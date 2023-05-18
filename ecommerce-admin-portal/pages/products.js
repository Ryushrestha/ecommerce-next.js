import Layout from '@/components/Layout'
import { getProducts } from '@/service/axios.service'
import Link from 'next/link'
import React,{useState,useEffect} from 'react'

const products = () => {
  const [products,setProducts] = useState([])

  useEffect(()=>{
    // const response = getProducts()
    // setProducts(response.data)
  },[])
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
              products && products.map((product)=>{
                return <tr key={product._id}>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                </tr>
              })
            }
          </tbody>
        </table>
    </Layout>
  )
}

export default products