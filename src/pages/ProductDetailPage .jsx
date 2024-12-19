import { faArrowLeft, faRulerHorizontal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addtocartApi, getselectedproductdetailsApi } from '../services/allApi';
import { serverurl } from '../services/serverUrl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';



const ProductDetailPage = () => {
  const {id} = useParams()
  const [productdetails,setproductdetails]= useState([])
  const [size,setsize]=useState("")


  
  const getproduct =async()=>{
    console.log(id);
    
    const result =await getselectedproductdetailsApi(id)
    console.log(result);
    setproductdetails(result.data)
  }

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
  

  useEffect(()=>{
    getproduct()
  },[])
  
  return (
    <div className="bg-gray-50">

       <Link to={'/'}> <h1 className=' text-xl ms-16 pt-16 '><FontAwesomeIcon icon={faArrowLeft} className='me-3' />Back Home</h1></Link>
      
     

      {/* Product Detail */} 
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="flex flex-col items-center">
            <img
              src={`${serverurl}/upload/${productdetails?.productimg}`}
              alt="Product Image"
              className="w-full h-96 object-cover  rounded-lg shadow-md"
            />
            {/* <div className="mt-4 flex space-x-3">
              <img
                src="https://via.placeholder.com/80"
                alt="Thumbnail 1"
                className="w-20 h-20 object-cover rounded-lg cursor-pointer"
              />
              <img
                src="https://via.placeholder.com/80"
                alt="Thumbnail 2"
                className="w-20 h-20 object-cover rounded-lg cursor-pointer"
              />
              <img
                src="https://via.placeholder.com/80"
                alt="Thumbnail 3"
                className="w-20 h-20 object-cover rounded-lg cursor-pointer"
              />
            </div> */}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">{productdetails.productname}</h1>
            <p className="text-xl text-green-600">${productdetails.price}</p>
          
            <p className="text-lg text-gray-700">
             {productdetails.description}
            </p>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Product Features:</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>{productdetails.feature1}</li>
                <li>{productdetails.feature2}</li>
                <li>{productdetails.feature3}</li>
                <li>{productdetails.feature4}</li>
              </ul>
            </div>
            {/* size selecion */}
            {/* <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Size <FontAwesomeIcon icon={faRulerHorizontal} /> </InputLabel>
          <Select
            labelId="demo-simple-select-label"id="demo-simple-select" label="Gender" value={size} onChange={(e)=>setsize(e.target.value)}>
            <MenuItem value={'S'}>S</MenuItem>
            <MenuItem value={'M'}>M</MenuItem>
            <MenuItem value={'L'}>L</MenuItem>
            <MenuItem value={'XL'}>XL</MenuItem>
            <MenuItem value={'XXL'}>XXL</MenuItem>
            
          </Select>
        </FormControl>
      </Box> */}

            {/* Actions */}
            <div className="flex space-x-4">
              <button onClick={()=>addtocart(productdetails?._id)} className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">Add to Cart</button>
             {/* <Link to={`/buy/${productdetails._id}`}> <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">Buy Now</button></Link> */}
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ProductDetailPage;
