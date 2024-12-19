import React, { useContext, useEffect, useState } from 'react'

import Wishlistcard from '../components/Wishlistcard'
import { getfavApi } from '../services/allApi'
import { cartremoveresponse, favremovecontext } from '../context/Contextshare'
import { Link } from 'react-router-dom'

export default function Wishlist() {
  const {favremoveres} = useContext(favremovecontext)
  const [favproducts,setfavproducts] = useState([])

  const getfav = async(id)=>{

    const token= sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await getfavApi(reqHeader)
      console.log(result.data.products);
      setfavproducts(result.data.products)
      
  }
  }

  useEffect(()=>{
    getfav()
  },[favremoveres])
  return (
    <>
    <div className='grid grid-cols-12  py-5'>
       
        <div className="col-span-1"></div>
        <div className="col-span-10 mb-12">
        <h1 className='text-2xl text-center'>Wishlist</h1>
            <div className="md:grid mt-12 gap-5 grid-cols-12">

             
              {favproducts.length>0?favproducts?.map((item)=>(
                  <div className="col-span-4 mb-5 md:mb-5"><Wishlistcard favproducts={item} /></div>
              )): 
              
              <div className="col-span-12 flex justify-center text-center items-center  text-3xl"> 
             <div>
                <img className=' ms-14  mb-4 'src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-10681467-8593283.png" alt="" />
                <h1>No items Here continue<Link className='text-red-600 hover:text-blue-600' to={'/'}> shoping.....</Link></h1>
             </div>
              </div>
              }
           
            
              

                
            </div>
        </div>
        <div className="col-span-1"></div>
    </div>
      
    </>
  )
}
