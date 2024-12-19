import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slidesss from '../components/Slidesss'


function Home() {
 
 
  return (
    <>
         <div class="md:grid bg-[#f1f7b5] grid-cols-12 py-[30px]"> 
            <div className="col-span-2"></div>
            <div className="col-span-8  p-5">
              <div className="grid-cols-12">
                <div className="col-1"></div>
                <div className="col-span-10">
  <div className="grid grid-cols-1 bg-cover bg-center relative" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/group-models-stand-together-front-sky-background_869640-6928.jpg')" }}>
    
    {/* Gradient Overlay to darken background */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

    {/* Content Section */}
    <div className="w-full p-8 relative z-10">
      <div className="ps-16 pt-16">
        <h1 className="text-5xl font-bold text-white p-2 animate__animated animate__fadeIn animate__delay-1s text-shadow-md">
          Why Spend & Stock
        </h1>
        <h1 className="text-5xl font-bold text-white p-2 animate__animated animate__fadeIn animate__delay-2s text-shadow-md">
          When You Can
        </h1>
        <h1 className="text-5xl font-bold text-green-500 p-2 animate__animated animate__fadeIn animate__delay-3s text-shadow-md">
          Rent & Rock
        </h1>
      </div>
    </div>
  </div>
</div>
                <div className="col-1"></div>
              </div>
              
              {/* for him & for her */}
              

            <div class="md:grid grid-cols-12 py-[50px]">
               <div className="col-span-5  bg-[url(https://i.pinimg.com/474x/9f/13/02/9f13024d57d1b805e608a40a8e47a2b1.jpg)] h-[400px] md:mb-0 mb-4 bg-cover shadow-lg hover:bg-[url(https://i.pinimg.com/originals/3a/59/fa/3a59fa65bb117eb52df75a4fb9c44538.jpg)]   ">
              <Link to={'/him'}>
                 <div className='him w-full h-[400px] text-white text-6xl  flex items-center justify-center bg-[#00000086] '>
                  <h1 className='  texts '>FOR HIM</h1>
                 </div>
              </Link>
               </div>
               <div className="col-span-2"></div>
               <div className="col-span-5 bg-[url(https://i.pinimg.com/originals/af/6f/62/af6f62e5d19ae02763338adb5da3255c.jpg)] h-[400px] bg-cover hover:bg-[url(https://i.pinimg.com/originals/66/f2/53/66f253204f485a5d5180b0cda4f2d419.jpg)] ">
               <Link to={'/her'}>
                 <div className='w-full h-[400px] her text-white flex items-center justify-center bg-[#00000086]'>
                 <h1 className='text-6xl texts  '>FOR HER</h1>
                 </div>
               </Link>
               </div>

                </div>

                {/* slick */}
                <div className="grid grid-cols-12  py-5">
                  {/* <div className="col-span-6 text-center" style={{borderRight:'1px solid black'}}>Men</div>
                  <div className="col-span-6 text-center">Women</div> */}
                </div>
              <Slidesss />

              



 




                

                {/* about us */}

                <div className="md:grid grid-cols-1 mt-12 rounded-lg  bg-[#88a3ca89] ">

                  <h1 className='text-center mt-12 text-4xl md:p-0 p-2'>Why Renting?</h1>

                  <div className='md:grid grid-cols-12 pt-5  ps-5  pe-5  md:pt-16  md:ps-16  md:pe-16'  >
                    <div className="col-span-6 flex  justify-between  p-3 items-center">
                      <img src="https://poshrobe.com/images/por01.png" className='me-5' alt="" />
                      <div>
                        <h4 className='font-semibold'>Newness for Every Event</h4>
                        <p>Why buy something you’ll only wear once?</p>
                      </div>
                    </div>
  
                    <div className="col-span-6 flex justify-between  p-3 items-center">
                    <img src="https://poshrobe.com/images/por03.png" className=' me-5' alt="" />
                      <div>
                        <h4 className='font-semibold'>Stress-Free Fashion</h4>
                        <p>All items ship to you free and arrive in your fit, cleaned and ready-to-wear</p>
                      </div>
                    </div>
                  
                  </div>
                  <div className='md:grid grid-cols-12  pb-5  ps-5  pe-5   md:pb-16  md:ps-16  md:pe-16'   >
                    <div className="col-span-6 flex  justify-between  p-3 items-center">
                      <img src="https://poshrobe.com/images/por02.png" className='me-5' alt="" />
                      <div>
                        <h4 className='font-semibold'>Forget the Price Tag</h4>
                        <p>Finally the solution to wearing everything you want, no purchase necessary.</p>
                      </div>
                    </div>
  
                    <div className="col-span-6 flex justify-between  p-3 items-center">
                    <img src="https://poshrobe.com/images/por04.png" className=' me-5' alt="" />
                      <div>
                        <h4 className='font-semibold'>Sustainable Footprint</h4>
                        <p>Most clothes we buy end up in the back of the cupboard. Power the sharing economy and rent instead</p>
                      </div>
                    </div>
                  
                  </div>
                  
                  
                  
                  
                </div>

    

            </div>
            <div className="col-span-2 "></div>
         </div>
      
    </>
  )
}

export default Home
