import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Productcard from './Productcard';
import { Link } from 'react-router-dom';
import { getAllProductApi } from '../services/allApi';

function Slidesss({products}) {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }}
    ]
  };

  const [allproduct,setallproduct] = useState([])

 
  console.log(allproduct);
  
  
  
    const getallproduct =async()=>{
      
        const result = await getAllProductApi()
        console.log(result);
        setallproduct(result.data)
        
        
      }
    
    useEffect(()=>{
      getallproduct()
    },[])
 



  return (
    <>
     <div className="slider-container mb-8">
      <Slider {...settings}>
      {allproduct?.map(item=>(
         <div>
         <Productcard products={item}/>
        </div>
      ))}
     
       
      </Slider>
    </div>
    </>
  )
}

export default Slidesss
