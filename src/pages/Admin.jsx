import React, { useEffect, useState } from 'react'

import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { getAllProductApi } from '../services/allApi';

function Admin() {

  const [allproduct,setallproduct] = useState({})

 
console.log(allproduct);



  const getallproduct =async()=>{
    if(sessionStorage.getItem("token")){
     const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await getAllProductApi(reqHeader)
      console.log(result);
      setallproduct(result.data)
      
      
    }
  }
  useEffect(()=>{
    getallproduct()
  },[])
    
  return (
    <>
        <div className="flex">
        
        <div className=" mt-14 mb-14 flex-1 p-8">
         
              <h1 className="text-3xl text-center font-bold text-slate-700 pb-16">Dashboard</h1>
              <div className='flex justify-center'>
              {/* <button className='bg-slate-500  text-white rounded-md font-semibold shadow-2xl hover:bg-green-800 hover:text-gray-400 p-3 ms-auto '>ADD Product</button> */}
         </div>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <Link to={'/admin-details'}>
              <div className="bg-[#f1f7b5] hover:text-slate-400  text-gray-800 p-6 shadow-md rounded-lg flex flex-col items-center">
                <h2 className="text-xl  font-semibold ">Total Rentals</h2>
                <p className="text-2xl font-bold ">{allproduct?.length}</p>
              </div>
            </Link>
    
           <Link to={'/admin-user-details'}>
              <div className="bg-[#f1f7b5] hover:text-slate-400  text-gray-800 p-6 shadow-md rounded-lg flex flex-col items-center">
                <h2 className="text-xl font-semibold ">Total Users</h2>
                <p className="text-2xl font-bold ">1,120</p>
              </div>
           </Link>
    
           <Link to={'/requests'}>
              <div className="bg-[#f1f7b5] hover:text-slate-400  text-gray-800 p-6 shadow-md rounded-lg flex flex-col items-center">
                <h2 className="text-xl font-semibold "> Requests</h2>
                <p className="text-2xl font-bold ">45</p>
              </div>
           </Link>
          </div>
    
          <div className="mt-6">
           
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Admin
