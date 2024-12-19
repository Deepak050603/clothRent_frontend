import React, { useEffect, useState } from 'react'
import Productcard from '../components/Productcard'
import { GiAmpleDress } from "react-icons/gi";
import { getAllWomenProductApi } from '../services/allApi';

function Productpage() {
  const [allproduct,setallproduct] =useState([])
  const [dataset,setdataset] = useState([])
  console.log(allproduct);
  

  const getallwomenproduct =async()=>{
    
      
      const result = await getAllWomenProductApi()
      console.log(result);
      setallproduct(result.data)
      setdataset(result.data)
      
      
      
    }

    const filterlahenga=()=>{
      setallproduct(dataset.filter((item)=>item.clothtype=='lahenga'))
    }
    const filtergown=()=>{
      setallproduct(dataset.filter((item)=>item.clothtype=='gown'))
    }

    const filterall=()=>{
      setallproduct(dataset)
    }
    const filtersaree=()=>{
      setallproduct(dataset.filter((item)=>item.clothtype=='saree'))
    }
  
  useEffect(()=>{
    getallwomenproduct()
  },[])


  return (
    <div>
      <div className="grid grid-cols-12 pt-14 pb-8 bg-[#f1f7b5]">
        <div className="col-span-1"></div>
        <div className="col-span-10">
          <div className="grid grid-cols-12">
             <div onClick={filterall} className="col-span-3 flex justify-center flex-col items-center menu">
              <img src="https://cdn4.iconfinder.com/data/icons/fashion-vol-1/72/19-512.png" className='md:w-[20%] w-[20%]' alt="" />
            
             <h2 className='mt-3'>All</h2>
             </div>
             <div onClick={filterlahenga} className="col-span-3 flex flex-col justify-center items-center menu p-1 ">
              <img src="https://png.pngtree.com/png-vector/20231123/ourmid/pngtree-pink-lehenga-illustration-vector-png-image_10697319.png " className='md:w-[15%] w-[20%]' alt="" />
              <h1 className='mt-3'>Lanhenga</h1>
             </div>
             <div  onClick={filtergown} className="col-span-3 flex justify-center flex-col items-center menu p-1">
              <img src="http://clipart-library.com/images_k/wedding-silhouette-vector/wedding-silhouette-vector-15.png" className='md:w-[20%] w-[30%]' alt="" />
              <h1 className='mt-3'>Gown</h1>
             </div>
             <div onClick={filtersaree} className="col-span-3 flex justify-center flex-col items-center menu p-1" style={{borderRight:'1px solid gray'}}>
              <img src="https://cdn4.iconfinder.com/data/icons/accessories-1/100/saree-512.png"  className='md:w-[20%] w-[30%]' alt="" />
              <h1 className='mt-2 '>Saree</h1>
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
              <div className="col-span-3 p-5  "><Productcard products={item}/></div>
          ))}
              
            
            </div>
            
           
        </div>
        <div className="col-span-1"></div>
    </div>
    </div>
  )
}

export default Productpage
