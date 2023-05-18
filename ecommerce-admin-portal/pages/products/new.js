import Layout from '@/components/Layout'
import React from 'react'

const NewProducts = () => {
    return (
        <Layout>
            <form className='ml-8 mt-8 p-5 '>
                <h1 className='text-2xl'>Add Products</h1>
                <label>Product Name</label>
                <input type='text' placeholder='Product Name' />

                <select className='my-3'>
                    <option value="">Uncategorized</option>
                    <option value="">Electronics</option>
                </select>

                <div>
                <label>Photos</label>

                    <div className='w-20 h-20 flex justify-center items-center bg-slate-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        <input type='file' className='hidden'/>
                    </div>
                </div>
                
                <div className='mt-5'>
                <label className>Description</label>
                <input type='text' placeholder='Product Description'/>
                </div>
                <div className='mt-5'> 
                <label className='mt-5'>Price</label>
                <input type='number' placeholder='Product Price'/>
                </div>
                <button className='my-3 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Save</button>
            </form>
        </Layout>
    )
}

export default NewProducts