import  React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FormControl, InputLabel, MenuItem, TextField } from '@mui/material';
import Select from '@mui/material/Select';
import { serverurl } from '../services/serverUrl';
import { updateproductApi } from '../services/allApi';
import { toast } from 'react-toastify';

import { producteditresponsecontext } from '../context/Contextshare';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 600,
  bgcolor: 'background.paper',
 
  boxShadow: 24,
  p: 4,
};

function Edit({products}) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const{seteditresponse} = useContext(producteditresponsecontext)
  
  const [productdetails , setproductdetails] = useState({
    productname:products.productname,
    clothtype:products.clothtype,
    description:products.description,
    price:products.price,
    quantity:products.quantity,
    gender:products.gender,
    
    productimg:""
  })
  // console.log(productdetails);
  
   const [preview,setpreview] =useState("")
  const [key,setkey] =useState(1)

  const handleFile =(e)=>{
    setproductdetails({...productdetails,productimg:e.target.files[0]})
  }

  const handlegender = (e) => {
    setproductdetails({...productdetails,gender:e.target.value});
  };

 

  const handleCancel =()=>{
    setproductdetails({
      productname:products.productname,
      clothtype:products.clothtype,
      description:products.description,
      price:products.price,
      quantity:products.quantity,
      gender:products.gender,
     
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

   const handleClose = () => {
    setOpen(false)
   handleCancel()
  }

  const handleupdate = async()=>{

    const {productname,clothtype,description,price,quantity,gender,productimg}= productdetails
    // console.log(productimg);
    // console.log(productname);
    // console.log(productdetails);
    
    
    
    if(!productname || !clothtype || !description || !price || !quantity || !gender  ){
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
      
      preview?reqBody.append("productimg",productimg):reqBody.append("productimg",products.productimg)

      const token = sessionStorage.getItem("token")

      if(preview){
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization": `Bearer ${token}`
        }

        const result = await  updateproductApi(products._id,reqBody,reqHeader)
        // console.log(result);
        if(result.status==200){
          seteditresponse(result.data)
          setOpen(false)
          toast.success('project updated succesfully')
        }
        else{
          handleCancel()
          toast.error('something went wrong')
        }
        
      }
      else{
        const reqHeader={
          "Content-Type":"application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await  updateproductApi(products._id,reqBody,reqHeader)
        // console.log(result);
        if(result.status==200){
          seteditresponse(result.data)
         setOpen(false)
          toast.success('project updated succesfully')
        }
        else{
          handleCancel()
          toast.error('something went wrong')
        }
      }
    }
  }


  useEffect(()=>{
    if(productdetails.productimg){
      /* console.log(URL.createObjectURL(projectdetails.projectImage)); */
      
   setpreview(URL.createObjectURL(productdetails.productimg)) 
    }
  },[productdetails.productimg])


  // console.log(products.productimg);
  // console.log(preview);
  
  

  return (
    <>
    <button onClick={handleOpen} className='py-2 px-8 rounded text-white bg-blue-500'>Edit</button>
    <div>
     
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
              labelId="demo-simple-select-label"id="demo-simple-select" value={productdetails.gender} label="Gender" onChange={(e)=>handlegender(e)}>
              <MenuItem value={'Men'}>Men</MenuItem>
              <MenuItem value={'wOMEN'}>Women</MenuItem>
              
            </Select>
          </FormControl>
        </Box>
                 
        <div className=" col-span-6 md:hidden  px-5 flex justify-center items-center ">
                <label htmlFor="pimg" >
               
                  <input id="pimg" key={key}  onChange={(e)=>handleFile(e)}  type="file" className="hidden" />
                  <img src={preview? preview :`${serverurl}/upload/${products.productimg}`}  className="w-full p-5 " alt="no image" />
                </label>
               
              </div>
                 </div>
                 <div className="md:flex my-4  hidden  justify-between">
                 <button className="py-2 px-5 me-3 rounded-lg bg-gray-500" onClick={handleCancel}>cancel</button>
                  <button className="py-2 px-5   md:me-0 rounded-lg bg-green-500" onClick={handleupdate}>add</button>
                  
                 </div>
              </div>
              
              <div className="flex my-4 md:hidden justify-between">
              <button className="py-2 px-5 me-3 rounded-lg bg-gray-500" onClick={handleCancel}>cancel</button>
                  <button className="py-2 px-5  md:me-0 rounded-lg bg-green-500" onClick={handleupdate}>add</button>
                  
                 </div>
            
                
              </div>
              <div className=" col-span-6 hidden  px-5 md:flex justify-center items-center ">
                <label htmlFor="pimg" >
               
                  <input id="pimg"key={key}  onChange={(e)=>handleFile(e)}  type="file" className="hidden" />
                  <img src={preview? preview :`${serverurl}/upload/${products.productimg}`}  className="w-full p-5 " alt="no image" />
                </label>
               
              </div>
              
              
              </div>
            </Typography>
        </Box>
      </Modal>
    </div>
    
    </>
  )
}

export default Edit
