import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { serverurl } from '../services/serverUrl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { decrementcartitemApi, incrementcartitemApi, removecartitemApi } from '../services/allApi'
import { cartremoveresponse } from '../context/Contextshare'


function Cartcard({cartproducts}) {
   const {setremoitemresponse} = useContext(cartremoveresponse)


  const removecartitem = async(id)=>{

    const token= sessionStorage.getItem("token")
    if(token){

      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }

      const result = await removecartitemApi(id,reqHeader)
      console.log(result.data);
      
      setremoitemresponse(result.data)
      
    }
  }

  const increment = async(id)=>{
    const token= sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization": `Bearer ${token}`
    }

    const result = await incrementcartitemApi(id,reqHeader)
    console.log(result.data);
    setremoitemresponse(result.data)
    
  }


  const decrement = async(id)=>{
    const token= sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization": `Bearer ${token}`
    }

    const result = await decrementcartitemApi(id,reqHeader)
    console.log(result.data);
    setremoitemresponse(result.data)
    
  }

  
  return (
   <>
         <div className="bg-[white] shadow-lg rounded-lg hover:shadow-2xl transition-shadow p-6">
   <Link to={`/details/${cartproducts.productId._id}`}> <img src={`${serverurl}/upload/${cartproducts.productId?.productimg}`} alt="Item" className="w-[50%] h-[150px]  rounded-md mb-4" /></Link>
    <div className="text-lg font-semibold">{cartproducts.productId?.productname}</div>
    <div className="text-gray-600">{Number(cartproducts.productId?.price)*(cartproducts.quantity)} ₹</div>
    <div className="flex items-center justify-between mt-4">
    <div>
        <button onClick={()=>removecartitem(cartproducts.productId?._id)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Remove</button>
        <Link to={`/buy/${cartproducts.productId?._id}`}><button className="bg-green-500 text-white py-2 px-6 ms-5 rounded-lg hover:bg-green-600 transition duration-300">Buy Now</button></Link>
    </div >
      <div className='flex flex-col'>
      <button onClick={()=>decrement(cartproducts.productId?._id)}><FontAwesomeIcon icon={faMinus} className='mb-2' /></button>
        <span style={{borderTop:'1px solid black',borderBottom:'1px solid black'}} className="font-semibold md:p-2">Quantity:{cartproducts.quantity}</span>
        <button onClick={()=>increment(cartproducts.productId?._id)}><FontAwesomeIcon icon={faPlus} className='mt-2' /></button>
        </div>
    </div>
  </div>
   </>
  )
}

export default Cartcard
