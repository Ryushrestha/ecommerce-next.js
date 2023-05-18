import Layout from '@/components/Layout'
import axios from 'axios'
import React,{useState,useEffect} from 'react'

const order = () => {
    const [orders,setOrders] = useState([])

    const getOrders = async () =>{
        const resp = await axios.get('/api/orders')
        setOrders(resp.data)
    }

    useEffect(()=>{
        getOrders()
    },[])
  return (
    <Layout>
            
        {/* <table className='w-full drop-shadow-lg'>
        <thead >
            <td >Order Name</td>
            <td>Order Price</td>
          </thead>
          <tbody>
                
          </tbody>
        </table> */}


  <table class="table-auto m-auto">
    <thead>
      <tr>
        <th class="px-4 py-2 ">Order Name</th>
        <th class="px-4 py-2 ">Order Price</th>
      </tr>
    </thead>
    <tbody>
    
      <tr class="bg-emerald-200">
        <td class="border border-emerald-500 px-4 py-2  font-medium">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
        <td class="border border-emerald-500 px-4 py-2  font-medium">Adam</td>
        
      </tr>
     
    </tbody>
  </table>
    </Layout>
  )
}

export default order