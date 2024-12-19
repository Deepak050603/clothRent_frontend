import React, { useContext, useEffect, useState } from 'react'
import Cartcard from '../components/Cartcard'
import { getAllCartProductApi } from '../services/allApi';
import { cartremoveresponse } from '../context/Contextshare';
import { Link } from 'react-router-dom';



function Cart() {
  const [cartproducts,setcartproducts] =useState([])
  const {remoitemresponse}= useContext(cartremoveresponse)

  const getcartitem =async()=>{
     const token = sessionStorage.getItem("token")
    console.log(token);
    // console.log(id);
    
    
    if(token){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await getAllCartProductApi(reqHeader)
      console.log(result.data.products);
      setcartproducts(result.data.products)
      
  }
}

useEffect(()=>{
  getcartitem()
},[remoitemresponse])

  return (
    
    
    <>
    <div>
      <div className=" mx-auto w-full p-5">
        
  
        <div className="md:grid grid-cols-12   gap-6">
          <div className="col-span-1"></div>
          <div className="col-span-10">
          <h2 className="text-2xl text-center  ">Your Cart</h2>
            {/* Cart Items */}
            <div className="md:grid mt-12 grid-cols-12 gap-5">

              {cartproducts?.length>0?cartproducts.map(item=>(
               
                
                <div className="col-span-6 mb-6 md:mb-0">
                <Cartcard cartproducts={item}  />
              </div>
              )):
              <div className="col-span-12 flex justify-center items-center text-center text-3xl"> 
              <div>
                <img className=' ms-14  mb-2 'src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-10681467-8593283.png" alt="" />
                <h1>No items Here continue<Link className='text-red-600 hover:text-blue-600' to={'/'}> shoping.....</Link></h1>
              </div>
              </div>
              }
             
                
              
            </div>
          </div>
  
          {/* Total Price Section */}

          
          <div className="col-span-1 mt-12 flex flex-col justify-start items-center">

          </div>
          
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Cart
