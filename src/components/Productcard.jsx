import React from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { serverurl } from '../services/serverUrl';
import { addtocartApi, addtofavoriteApi } from '../services/allApi';
function Productcard({products}) {
  

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

  const addtofav = async(id)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }

      const result = await addtofavoriteApi(id,reqHeader)
      console.log(result.data);

      if(result.status==200){
        alert('addedto fav successfully')
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
  return (

    <>
     <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Car Image */}
     <Link to={`/details/${products._id}`}>
        <img 
          src={`${serverurl}/upload/${products?.productimg}`}
          alt="Car" 
          className="w-full h-[300px] "
        />
     </Link>
      
      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-xl text-center font-semibold text-gray-800">{products?.productname.slice(0,15)}</h2>
        <p className="text-gray-600 text-center text-sm mt-2">{products?.description.slice(0,15)}</p>
        <p className='text-center mt-3'>{products?.price}</p>
        {/* <p className='text-center'>Size :{products?.size}</p> */}
        
        {/* Buttons & Icons */}
        <div className="flex items-center ww-full justify-around mt-4 flex-wrap">
          
            <button onClick={()=>addtofav(products._id)}  className="   text-[#00000056] rounded px-7 py-2 hover:text-red-600">
              <FaHeart size={24} />
            </button>
            <button onClick={()=>addtocart(products._id)} className="  text-[#00000056] rounded px-7 py-2 hover:text-blue-600">
              <FaShoppingCart size={24} />
            </button>
          
          
          
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Productcard
