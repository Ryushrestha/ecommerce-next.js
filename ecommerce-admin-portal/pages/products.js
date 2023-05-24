import Layout from '@/components/Layout'
import { getProducts } from '@/service/axios.service'
import axios from 'axios'

import Link from 'next/link'
import React,{useState,useEffect} from 'react'

const products = () => {
  const [product,setProduct] = useState([])

  useEffect(()=>{
  getProducts().then((resp)=>{
    setProduct(resp.data);
  })
  },[])

  // const getProducts= async() =>{
  //   const resp = await axios.get('/api/products')
  //   setProduct(resp.data)
  // }

const deleteProducts =async (e, product) =>{
  e.preventDefault()
  await axios.delete('/api/products?_id=' + product._id)
  const data = products.filter((prod)=>{
    return prod._id !== product._id
  })
  setProduct(data)
 
}

  return (
    <Layout>
        <Link className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' href='products/new'>Add New Products</Link>

        <table>
          <thead>
            <td>Product Name</td>
            <td>Product Price</td>
          </thead>
          <tbody>
            {
              product.length>0 && product.map((product)=>{
                return <tr key={product._id}>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <button onClick={(e)=>deleteProducts(e,product)}>Delete</button>
                </tr>

              })
            }
          </tbody>
        </table>
    </Layout>
  )
}

export default products