import React, { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPlus, faTrash, faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { addProductApi, getAllProductApi, removeadminPRojectApi } from "../services/allApi";
import { serverurl } from "../services/serverUrl";
import Edit from "../components/Edit";
import { producteditresponsecontext } from "../context/Contextshare";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 600,
  bgcolor: 'background.paper',
  maxHeight: '80vh', // Restrict height
  overflowY: 'auto', // Enable scrolling
 
  boxShadow: 24,
  p: 4,
};



function AdminProductdetails() {

  const [gender, setgender] = React.useState('');
  const [preview,setpreview] =useState("")
  const [key,setkey] =useState(1)
  const [token,settoken] = useState("")
  const [allproduct,setallproduct] = useState([])
  const [dataset,setdataset] = useState([])

  const [addresponse,setaddresponse] =  useState([])
  const [removestatus,setremovestatus] = useState([])

  const{editresponse}=useContext(producteditresponsecontext)
  

  console.log(allproduct);
  

  const [productdetails , setproductdetails] = useState({
    productname:"",
    clothtype:"",
    description:"",
    price:"",
    quantity:"",
    gender:"",
    feature1:"",
    feature2:"",
    feature3:"",
    feature4:"",
    
    productimg:""
  })
  // console.log(productdetails);
  // console.log(token);
  
  
  const handleCancel =()=>{
    setproductdetails({
      productname:"",
      clothtype:"",
      description:"",
      price:"",
      quantity:"",
      gender:"",
      feature1:"",
      feature2:"",
      feature3:"",
      feature4:"",
      
      productimg:""
    })
    // setOpen(false)
    
    setpreview("")
    if(key==1){
      setkey(0)
    }
    else{
      setkey(1)
    }
   }

  const handlegender = (e) => {
    setproductdetails({...productdetails,gender:e.target.value});
  };
 
  const handleFile =(e)=>{
    setproductdetails({...productdetails,productimg:e.target.files[0]})
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
   handleCancel()


  }

  const getallproduct =async()=>{
   
      const result = await getAllProductApi()
      console.log(result);
      setallproduct(result.data)
      setdataset(result.data)
      
    
  }

  const handleadd = async()=>{

    const {productname,clothtype,description,price,quantity,gender,productimg,feature1,feature2,feature3,feature4}= productdetails
    if(!productname || !clothtype || !description || !price || !quantity || !gender  || !productimg || !feature1 || !feature2 || !feature3 || !feature4){
      alert('please fill the form completely')
    }
    else{
      const reqBody = new FormData()

      reqBody.append("productname",productname)
      reqBody.append("clothtype",clothtype)
      reqBody.append("description",description)
      reqBody.append("price",price)
      reqBody.append("quantity",quantity)
      reqBody.append("gender",gender)
      reqBody.append("feature1",feature1)
      reqBody.append("feature2",feature2)
      reqBody.append("feature3",feature3)
      reqBody.append("feature4",feature4)
     
      reqBody.append("productimg",productimg)

      if(token){
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await addProductApi(reqBody,reqHeader)
      // console.log(result);
      if(result.status==200){
        toast.success(' project added successfully')
        setTimeout(() => {
          handleClose()
        }, 1000);
        setaddresponse(result)
       
      }
      else if(result.status==406){
        toast.warning(result.response.data)
        handleCancel()

      }
      else{
        toast.error('something went wrong')
        handleClose()
      }
      }
      else{
        alert('please login')
      }
        
      
    }

  }
  

  const handleDelete =async(id)=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
  
      const reqHeader ={
         "Content-Type":"application/json",
          "Authorization": `Bearer ${token}`
      }
  
      const result = await removeadminPRojectApi(id,reqHeader)
      // console.log(result);
      
     if(result.status ==200){
     setremovestatus(result.data)
     }
     else{
      alert('something went wrong')
     }
      
    }
    }

 const  filterMenproducts = ()=>{
  setallproduct(dataset.filter((item)=>item.gender=="Men"))
 }
 const  filterwomenproducts = ()=>{
  setallproduct(dataset.filter((item)=>item.gender=="Women"))
 }

  useEffect(()=>{
    if(productdetails.productimg){
      setpreview(URL.createObjectURL(productdetails.productimg))
    }
  },[productdetails.productimg])

 

  useEffect(()=>{
    getallproduct()
    
    if(sessionStorage.getItem("token")){
     settoken(sessionStorage.getItem("token"))
    }
   },[token,addresponse,removestatus,editresponse])

  return (
  <>
  <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Products</h1>
        <div className='grid grid-cols-12'>
          <div className="col-span-3 p-5 flex flex-col">
        
        <div className='py-4 flex justify-center' style={{borderBottom:'1px solid grey'}}>   
            <button onClick={getallproduct} className='px-24 text-xl hover:text-orange-500' >All <FontAwesomeIcon className='ms-3' icon={faArrowRight} /> </button>
            </div>
        <div className='py-4 flex justify-center'style={{borderBottom:'1px solid grey'}}>   
            <button onClick={filterMenproducts} className='px-24 text-xl hover:text-blue-500' >Men <FontAwesomeIcon className='ms-3' icon={faArrowRight} /> </button>
            </div>
        <div className='py-4 flex justify-center'style={{borderBottom:'1px solid grey'}}>   
            <button onClick={filterwomenproducts} className='px-24 text-xl hover:text-pink-500' >Women <FontAwesomeIcon className='ms-3' icon={faArrowRight} /> </button>
            </div>
            <div className=' rounged p-2  flex justify-center' >  
               
      

            <div>
            <button onClick={handleOpen}  className='px-3 py-2 rounded bg-green-400 text-xl hover:text-slate-700' >ADD <FontAwesomeIcon icon={faPlus} className='ms-3' /> </button>

      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="w-[100%] md:w-[65%] " sx={style}>
        <div className="grid grid-cols-1 p-1 px-2  hover:border rounded-md hover:bg-slate-400 hover:border-black  float-end">
           <button onClick={handleClose}> <FontAwesomeIcon  icon={faX} /></button>
            </div>
          <Typography id="modal-modal-title" className="text-center mb-14" variant="h6" component="h2">
            Add Product
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
          <div className="grid grid-cols-12 w-full">
            <div className="md:col-span-6 col-span-12 w-full md:flex flex-col items-center justify-center ">
            <div className="w-full">
               <div className="mb-5"> <TextField id="outlined-basic" value={productdetails.productname} onChange={(e)=>setproductdetails({...productdetails,productname:e.target.value})} className="w-full " label="Product Name" variant="outlined" /></div>
               <div className="mb-5"> <TextField id="outlined-basic" value={productdetails.clothtype} onChange={(e)=>setproductdetails({...productdetails,clothtype:e.target.value})} className="w-full " label="Type of cloth" variant="outlined" /></div>
               <div className="mb-5"> <TextField id="outlined-basic" value={productdetails.description} onChange={(e)=>setproductdetails({...productdetails,description:e.target.value})} className="w-full " label="Description" variant="outlined" /></div>
               <div className="mb-5"> <TextField id="outlined-basic" value={productdetails.price} onChange={(e)=>setproductdetails({...productdetails,price:e.target.value})} className="w-full " label="Price" variant="outlined" /></div>
               <div className="mb-5"> <TextField id="outlined-basic" value={productdetails.quantity} onChange={(e)=>setproductdetails({...productdetails,quantity:e.target.value})} className="w-full " label="Quantity" variant="outlined" /></div>
             
               <div>
               <Box className="mb-5" sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"id="demo-simple-select" value={productdetails.gender}label="Gender" onChange={(e)=>handlegender(e)}>
            <MenuItem value={'Men'}>Men</MenuItem>
            <MenuItem value={'Women'}>Women</MenuItem>
            
          </Select>
        </FormControl>
      </Box>
               
      <div className="border border-gray-500 rounded  p-2 my-5">
        <h1 className="text-xl text-center font-semibold p-2">Features</h1>
                 <div className="mb-5"> <TextField id="outlined-basic" value={productdetails.feature1} onChange={(e)=>setproductdetails({...productdetails,feature1:e.target.value})}  className="w-full " label="feature1" variant="outlined" /></div>
                 <div className="mb-5"> <TextField id="outlined-basic" value={productdetails.feature2} onChange={(e)=>setproductdetails({...productdetails,feature2:e.target.value})} className="w-full " label="feature2" variant="outlined" /></div>
                 <div className="mb-5"> <TextField id="outlined-basic" value={productdetails.feature3} onChange={(e)=>setproductdetails({...productdetails,feature3:e.target.value})} className="w-full " label="feature3" variant="outlined" /></div>
                 <div className="mb-5"> <TextField id="outlined-basic" value={productdetails.feature4} onChange={(e)=>setproductdetails({...productdetails,feature4:e.target.value})} className="w-full " label="feature4" variant="outlined" /></div>
              </div>
      <div className=" col-span-6 md:hidden  px-5 flex justify-center items-center ">
              <label htmlFor="pimg" >
             
                <input id="pimg" key={key}  onChange={(e)=>handleFile(e)}  type="file" className="hidden" />
                <img src={preview? preview:"https://static.thenounproject.com/png/187803-200.png"} className="w-full p-5 " alt="no image" />
              </label>
             
            </div>
               </div>
               <div className="md:flex my-4  hidden  justify-between">
               <button className="py-2 px-5 me-3 rounded-lg bg-gray-500" onClick={handleCancel}>cancel</button>
                <button className="py-2 px-5   md:me-0 rounded-lg bg-green-500" onClick={handleadd}>add</button>
                
               </div>
            </div>
            
            <div className="flex my-4 md:hidden justify-between">
            <button className="py-2 px-5 me-3 rounded-lg bg-gray-500">cancel</button>
                <button className="py-2 px-5  md:me-0 rounded-lg bg-green-500" onClick={handleadd}>add</button>
                
               </div>
          
              
            </div>
            <div className=" col-span-6 hidden  px-5 md:flex justify-center items-center ">
              <label htmlFor="pimg" >
             
                <input id="pimg" key={key}  onChange={(e)=>handleFile(e)}  type="file" className="hidden" />
                <img src={preview? preview:"https://static.thenounproject.com/png/187803-200.png"} className="w-full p-5 " alt="no image" />
              </label>
             
            </div>
            
            
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
       
            </div>
            
             
          </div>
         <div className='col-span-9'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* card */}


          {allproduct?.length>0&&allproduct?.map(item=>(
 <div  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
 <img
   src={`${serverurl}/upload/${item?.productimg}`} 
   alt=""
   className="w-full h-48 object-cover rounded-md mb-4"
 />
<div className='flex w-full space-y-2 flex-col items-center justify-center'>
   <h2 className="text-xl font-semibold text-gray-800">{item?.productname}</h2>
   <p className="text-gray-600 mt-2">{item?.description}</p>
   <p className="text-lg font-bold text-gray-900 mt-4">Price:{item?.price}</p>
   <p className="text-lg font-bold text-gray-900 mt-4">Quantiry:{item?.quantity}</p>
</div>
<div className='flex justify-between mt-3'>
 <button className='py-2 px-8  rounded text-white bg-red-500' onClick={()=>handleDelete(item?._id)}>Remove</button>
 <Edit products={item}/>
</div>
</div>
          )) }
             
            
             
             
            
          </div>
         </div>

        </div>
        
      </div>
    </div>
    <ToastContainer theme='colored' position='top-center' autoClose={2000} />
  </>
  )
}

export default AdminProductdetails
