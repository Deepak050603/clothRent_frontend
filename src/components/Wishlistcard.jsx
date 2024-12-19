import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { serverurl } from '../services/serverUrl'
import { addtocartApi, removefavApi } from '../services/allApi'
import {  favremovecontext } from '../context/Contextshare'

function Wishlistcard({favproducts}) {

  const {setfavremoveres} = useContext(favremovecontext)

  
  const addtocart = async(id)=>{
   

    const token = sessionStorage.getItem("token")
    console.log(token);
    console.log(id);
    
    
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }

      const result = await addtocartApi(id,reqHeader)
      console.log(result.data);

      if(result.status==200){
        alert('addedto cart successfully')
      }
      else if(result.status==204){
        alert('Item already in cart')
      }
      else{
        alert('something went wrong')
      }
      
    }
    else{
      alert('please login')
    }
    
  
  }

  const removefav =async(id)=>{
    const token = sessionStorage.getItem("token")
    
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await removefavApi(id,reqHeader)
      setfavremoveres(result.data)
      console.log(result);
      
    }

  
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow p-6">
   <Link to={'/details'}> <img src={`${serverurl}/upload/${favproducts.productimg}`}alt="Item" className="w-[50%] h-[150px]   rounded-md mb-4" /></Link>
    <div className="text-lg font-semibold">{favproducts.productname}</div>
    <div className="text-gray-600">price: {favproducts.price}</div>
    <div className="flex items-center justify-between mt-4">
  
        <button onClick={()=>removefav(favproducts._id)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Remove</button>
        <button onClick={()=>addtocart(favproducts._id)} className="bg-green-500 text-white py-2 px-6 ms-3 rounded-lg hover:bg-green-600 transition duration-300">Add To Cart</button>
    
      
    </div>
  </div>
      
    </>
  )
}

export default Wishlistcard
