import React, { useContext, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginApi, registerApi } from '../services/allApi';
import { roleContext } from '../context/Contextshare';


function Auth({register}) {
  const navigate = useNavigate()
  const {setrole} = useContext(roleContext)
  const [userDetails,setuserDetails] = useState ({
    username :"",
    email :"",
    password :""
  })
  console.log(userDetails);
  

  // register 

  const handleRegister =async()=>{
    const{username,email,password} =userDetails
    if(!username || !email || !password){
      toast.info('please fill the form completly')
    }
    else{
      const result = await registerApi({username,email,password})
      console.log(result);
      if(result.status==200){
        toast.success('Registration sucesful')
        setuserDetails({
          username:"",
          email:"",
          password:""
        })
        navigate('/login')
      }
      else if(result.status==406){
        toast.warning(result.response.data)
      }
      else{
        toast.error('soomething went wrong')
      }
      
      console.log(result);
      
    }
  }


  // login

  const handleLogin = async()=>{
    const {email,password}=userDetails
    if(!email ||!password ){
      toast.info('please fill the form completely')

    }
    else{
      const result = await loginApi(userDetails)
      console.log(result);
      if(result.status==200){
        toast.success('Login succesful')
        
        setrole(result.data.existinguser.role)
        sessionStorage.setItem("existinguser",JSON.stringify(result.data.existinguser))
        sessionStorage.setItem("token",result.data.token)

        setuserDetails({
          username:"",
          email:"",
          password:""
        })
       

        if(result.data.existinguser.role=='user'){
          setTimeout(() => {
            navigate('/')
          }, 2000);
          
        }
        else{
          setTimeout(() => {
            navigate('/admin')
          }, 2000);
        }

       
        
      
      }
      else if(result.status==406){
        toast.warning(result.response.data)
        setuserDetails({
          username:"",
          email:"",
          password:""
        })
      }
      else{
        toast.error('soomething went wrong')
        setuserDetails({
          username:"",
          email:"",
          password:""
        })
      }
    }
  }


  return (
    <>
   
 <div className='w-full bg-[#f1f7b5]'>

  {/* login */}
  { !register ? <div class="md:grid grid-cols-12 pb-14 pt-20">
      <div class="col-span-2"></div>
      <div class="col-span-8 ">
        <div className="md:grid   grid-cols-12 px-4">

          <div className="col-span-6 bg-[url(https://wallpapercave.com/wp/wp1877575.jpg)] bg-cover">
            <div className='bg-[#0000007f] md:h-[455px] h-[200px]'></div>
            </div>
          <div className="col-span-6 p-4 bg-[#f3f4f4d4]">
          <div className=" pb-4 flex flex-col content-center items-center ">
              <div className='text-white py-4 '>
                <h2 className='text-3xl text-[#88a4ca] '> Rent & Revel</h2>
                <h4 className='text-[#88a4ca] py-3'>Sign in to your account</h4> 
                {/* <h4>Sign up to your account</h4> */}
              </div>
              <div className=' flex flex-col w-full'>
             {/* <div className='mb-3 w-full'> <TextField id="outlined-basic" className='w-full'  label="Username" variant="outlined" /></div> */}
             <div className='mb-3 w-full'> <TextField id="outlined-basic" onChange={(e)=>setuserDetails({...userDetails,email:e.target.value})} className='w-full'  label="email" variant="outlined" /></div>
             <div className='mb-3 w-full'> <TextField id="outlined-basic" onChange={(e)=>setuserDetails({...userDetails,password:e.target.value})} className='w-full'  label="password" variant="outlined" /></div>
              
             

                
                <div>
                <div className='py-3 px-5'  ><Button variant="contained" onClick={handleLogin} className='w-full '>Login</Button></div>
                  <p className='text-light text-center text-x' >New user? click here to  <Link className='text-blue-600' to={'/register'}>Register</Link></p>
                </div>
                
                {/* <div>
                <Button variant="outlined">Register</Button>
                  <p className='text-light text-center text-x ' >Already a user? click here to Login</p>
                </div> */}
              </div>
            </div>

  
          </div>
        </div>
      </div>
      <div class="col-span-2"></div>
  </div>


   :
  //  register

  <div class="md:grid grid-cols-12 pb-14 pt-20">
      <div class="col-span-2"></div>
      <div class="col-span-8 ">
        <div className="md:grid   grid-cols-12 px-4 ">

        <div className="col-span-6 p-4 bg-[#f3f4f4d4]">
          <div className=" pb-4 flex flex-col content-center items-center ">
              <div className='text-white py-4 '>
                <h2 className='text-3xl text-[#88a4ca] '> Rent & Revel</h2>
                <h4 className='text-[#88a4ca] py-3'>Sign up to your account</h4> 
             
              </div>
              <div className=' flex flex-col w-full'>
             <div className='mb-3 w-full'> <TextField id="outlined-basic"  onChange={(e)=>setuserDetails({...userDetails,username:e.target.value})}  className='w-full'  label="Username" variant="outlined" /></div>
             <div className='mb-3 w-full'> <TextField id="outlined-basic"  onChange={(e)=>setuserDetails({...userDetails,email:e.target.value})} className='w-full'  label="email" variant="outlined" /></div>
             <div className='mb-3 w-full'> <TextField id="outlined-basic"  onChange={(e)=>setuserDetails({...userDetails,password:e.target.value})} className='w-full'  label="password" variant="outlined" /></div>
              
  
                
                <div>
                <div className='py-3 px-5'  ><Button onClick={handleRegister} variant="contained" className='w-full '>Register</Button></div>
                
                  <p className='text-light text-center text-x ' >Already a user? click here to <Link className='text-blue-600' to={'/login'}>Login</Link></p>
                </div>
              </div>
            </div>

  
          </div>

          <div className="col-span-6 bg-[url(https://wallpapercave.com/wp/wp1877575.jpg)] bg-cover">
            <div className='bg-[#0000007f] md:h-[455px] h-[200px]'></div>
            </div>

        </div>
      </div>
      <div class="col-span-2"></div>
  </div>}

 </div>
 <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </>
  )
}

export default Auth
