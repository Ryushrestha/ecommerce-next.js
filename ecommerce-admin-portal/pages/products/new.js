import Layout from '@/components/Layout'
import  { BounceLoader } from '@/components/Loader'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ReactSortable } from 'react-sortablejs'


const NewProducts = () => {
    const router = useRouter()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState([])
    const [category, setCategory] = useState('')
    const [categories,setCategories] = useState([])
    const [isuploading, setIsUploading] = useState(false)
    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = async () => {
        const resp = await axios.get('/api/categories');
        setCategories(resp.data);
    }

    const uploadImages = async (e) => {
        console.log(e.target.files)

        const { files } = e.target
        if (files.length > 0) {
            setIsUploading(true);
            const data = new FormData();

            for (let file of files) {
                data.append('file', file)
            }
            //  upload image
            const resp = await axios.post('/api/upload', data)
            setImage((oldImage) => {
                console.log('oldImage', oldImage)
                console.log(resp.data.links)
                console.log('newImage', [...oldImage, ...resp.data.links])
                return oldImage.concat(resp.data.links)
            })
        }
        setIsUploading(false)
    }

    const setHandler = async (e) =>{
        e.preventDefault()
        const data = {
            title : name,
            description: description,
            price: price,
            images:image,
            category: category
        }
        // console.log(data)
       await axios.post('/api/products',data)
       router.push('/products')
    }

    const setImageOrder = ()=>{
        
        setImage(image);
    };

    return (
        <Layout>
            <form className='ml-8 mt-8 p-5 '>
                <h1 className='text-2xl'>Add Products</h1>
                <label>Product Name</label>
                <input type='text' placeholder='Product Name' onChange={(e) => setName(e.target.value)} />

                <select className='my-3' onChange={(e)=>setCategory(e.target.value)}>

                    {
                        categories.length > 0 &&
                        categories.map((category) => {
                            return <option key={category._id} value={category._id}>{category.name}</option>
                        })
                    }
                </select>

                <div>
                    <label>Photos</label>
                        
                    <label className='w-20 h-20 flex justify-center items-center bg-slate-400'>
                        <div className='flex flex-wrap'>
                          
                            {
                                isuploading && (
                                    <div className='h-20'>
                                        <BounceLoader />
                                    </div>
                                )
                            }
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        <input type='file' className='hidden' onChange={uploadImages} />
                    </label>
                    <div className='flex flex-wrap'>
                            <ReactSortable
                            list={image}
                            className='flex flex-wrap gap-2'
                            setList={setImageOrder}
                             >
                                {
                                    image.length>0 && image.map((image)=>{
                                        return (
                                            <div key={image}>
                                                <img className='h-20 mx-1' src={image}/>
                                            </div>
                                        )
                                    })
                                }
                            </ReactSortable>
                    </div>
                </div>

                <div className='mt-5'>
                    <label className>Description</label>
                    <input type='text' placeholder='Product Description' onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className='mt-5'>
                    <label className='mt-5'>Price</label>
                    <input type='number' placeholder='Product Price' onChange={(e) => setPrice(e.target.value)} />
                </div>
                <button className='my-3 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' onClick={(e)=>setHandler(e)}>Save</button>
            </form>
        </Layout>
    )
}

export default NewProducts