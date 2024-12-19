import React, { useEffect, useState } from 'react'
import Productcard from '../components/Productcard'
import { Link } from 'react-router-dom'
import { getAllMenProductApi } from '../services/allApi'

function Him() {


  const [allproduct,setallproduct] =useState([])
  const [dataset,setdataset]= useState([])
  console.log(allproduct);
  

  const getallmenproduct =async()=>{
    
      
      const result = await getAllMenProductApi()
      console.log(result);
      setallproduct(result.data)
      setdataset(result.data)
      
      
      
    }

    const filterkurta=()=>{
      setallproduct(dataset.filter((item)=>item.clothtype=='kurta'))
    }
    const filtersuits=()=>{
      setallproduct(dataset.filter((item)=>item.clothtype=='suits'))
    }
    const filtersherwani=()=>{
      setallproduct(dataset.filter((item)=>item.clothtype=='sherwani'))
    }
    const filterall=()=>{
      setallproduct(dataset)
    }


  
  useEffect(()=>{
    getallmenproduct()
  },[])

  return (
    <div>
    <div className="grid grid-cols-12 pt-14 pb-8 bg-[#f1f7b5]">
      <div className="col-span-1"></div>
      <div className="col-span-10">
        <div className="grid grid-cols-12">
           <div onClick={filterall} className="col-span-3 flex flex-col justify-center items-center menu p-1">
            <img src="http://clipart-library.com/images_k/transparent-t-shirts/transparent-t-shirts-10.png" className='w-[15%]' alt="" />
            <h1 className='mt-3'>All</h1>
           </div>
           <div onClick={filtersuits} className="col-span-3 flex flex-col justify-center items-center menu p-1 ">
            <img src="https://pngimg.com/d/suit_PNG93235.png " className='w-[13%]' alt="" />
            <h1 className='mt-2'>suits</h1>
           </div>
           <div onClick={filterkurta} className="col-span-3 flex justify-center flex-col items-center menu p-1">
            <img src="https://cdn-icons-png.flaticon.com/512/9992/9992534.png" className='w-[20%]' alt="" />
            <h1 className='mt-2'>Kurta</h1>
           </div>
           <div onClick={filtersherwani} className="col-span-3 flex justify-center flex-col items-center menu p-1" style={{borderRight:'1px solid gray'}}>
            <img src="https://cdn4.iconfinder.com/data/icons/clothing-accessories-7/1024/Clothing__accessories_1-62-512.png"  className='w-[20%]' alt="" />
            <h1 className='mt-2 '>Sherwani</h1>
           </div>
        </div>
        {/* <div className="grid drid-cols-12 bdr mt-3 px-2"></div> */}
      </div>
      <div className="col-span-1"></div>
      

    
    
    
    </div>
     <div className="grid grid-cols-12  pb-10 bg-[#f1f7b5]">
      <div className="col-span-1"></div>
      <div className="col-span-10">
      <div className="md:grid grid-cols-12">
        {allproduct?.map(item=>(
           <div className="col-span-3 p-5 "><Productcard products={item}/></div>
        ))}
             
             
          </div>
          
      </div>
      <div className="col-span-1"></div>
  </div>
  </div>
  )
}

export default Him
