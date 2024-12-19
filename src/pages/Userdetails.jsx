import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { getAlluserApi } from '../services/allApi';


function Userdetails() {
  const [token,settoken]=useState("")
  
  const [alluser,setalluser]=useState([])

  const getalluser =async()=>{
    const token = sessionStorage.getItem("token")
    if(sessionStorage.getItem("token")){
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await getAlluserApi(reqHeader)
      console.log(result);
      setalluser(result.data)
      
    }
  }

  useEffect(()=>{
    getalluser()
    
    if(sessionStorage.getItem("token")){
     settoken(sessionStorage.getItem("token"))
    }
   },[token])
  return (
    <div className='h-[47vh]'>
        <h1 className='text-2xl my-6 text-center'>User Details</h1>
      <div className='md:mx-20 mx-2 mb-20  relative overflow-x-auto shadow-md rounded-md'>
         <table className='w-full  '> 
          <thead className='text-center border border-5 border-white bg-slate-500 text-white'>
            <tr className=''>
              <th className='p-3 border border-s-5 border-white'>No</th>
              <th className='p-3 border border-s-5 border-white'>UserName</th>
              <th className='p-3 border border-s-5 border-white'>Email</th>
              <th className='p-3 border border-s-5 border-white'>total purchase</th>
             
              
            </tr>
          </thead>
          <tbody className='bg-slate-300 border border-5 border-white' >
         {alluser?.map((item,n)=>(
           <tr>
           <td className='p-3 border border-s-5 border-white'>{n+1}</td>
           <td className='p-3 border border-s-5 border-white'>{item?.username}</td>
           <td className='p-3 border border-s-5 border-white'>{item.email}</td>
           <td className='p-3 border border-s-5 border-white'>4</td>
           
         </tr>
         ))  }
              
          </tbody>
         </table>
       </div>
    </div>
  )
}

export default Userdetails
