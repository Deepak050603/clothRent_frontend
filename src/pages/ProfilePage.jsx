import React, { useEffect, useState } from 'react';
import { getuserdetailsApi, updateprofileApi } from '../services/allApi';
import { serverurl } from '../services/serverUrl';

const ProfilePage = () => {

 
  const [userdetail,setuserdetail]=useState([])
  const [isemail,setisemail]=useState(true)
  const [isphone,setisphone]=useState(true)
  const [disable,setdisable]= useState(true)

  const [preview,setpreview] =useState("")
  console.log(preview);
  


 const[profiledetails,setprofiledetails]=useState({
  username:"",
  email:"",
  phoneNumber:"",
  adress:"",
  profileImg:""
 })
 console.log(profiledetails);
 
 

  const getuserdetails = async()=>{
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization": `Bearer ${token}`
    }
    const result = await getuserdetailsApi(reqHeader)
    setprofiledetails({
      username:result.data.username,
      email:result.data.email,
      phoneNumber:result.data.phoneNumber,
      adress:result.data.adress,
      profileImg:result.data.profileImg
    });
    
  
  }

  const validate=(e)=>{

     if(e.target.name=='username'){
      setprofiledetails({...profiledetails,username:e.target.value})

     }
     else if(e.target.name=='email'){
      if(!!e.target.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        setprofiledetails({...profiledetails,email:e.target.value})
        setisemail(true)
        setdisable(true)
      }else{
        setprofiledetails({...profiledetails,email:e.target.value})
        setisemail(false)
        setdisable(false)
      }
     }
     else if(e.target.name=='phone'){
      if(!!e.target.value.match(/^[0-9]*$/)){
        setprofiledetails({...profiledetails,phoneNumber:e.target.value})
        setisphone(true)
        setdisable(true)
      }else{
        setprofiledetails({...profiledetails,phoneNumber:e.target.value})
        setisphone(false)
        setdisable(false)
      }
     }
     else if(e.target.name=='adress'){
      setprofiledetails({...profiledetails,adress:e.target.value})

     }
  }
  const handleFile =(e)=>{
    console.log('hi');
    
    setprofiledetails({...profiledetails,profileImg:e.target.files[0]})
    
  }
 
  const handleupdate=async()=>{

   
   
    const token = sessionStorage.getItem("token")
    const {username,email,phoneNumber,adress,profileImg}=profiledetails
    
    
    const reqBody = new FormData()

    reqBody.append("username",username)
    reqBody.append("email",email)
    reqBody.append("phoneNumber",phoneNumber)
    reqBody.append("adress",adress)
    

    preview?reqBody.append("profileImg",profileImg):reqBody.append("productimg",profiledetails.profileImg)



 


    if(preview){
      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization": `Bearer ${token}`
      }

      const result = await updateprofileApi(reqBody,reqHeader)
      console.log(result);
      if(result.status==200){
        alert('updated successfully')
      }else{
        console.log('something went wrong');
        
      }
      

    }
    else{
      const reqHeader={
        "Content-Type":"application/json",
      "Authorization": `Bearer ${token}`
    }
    const result = await updateprofileApi(reqBody,reqHeader)
    console.log(result);
    if(result.status==200){
      alert('updated successfully')
    }else{
      console.log('something went wrong');
      
    }

    }
    
  }

 const handlecancel = ()=>{
  getuserdetails()
 }
  
console.log(profiledetails.profileImg);



  useEffect(()=>{
    getuserdetails()
  },[])
  

  useEffect(()=>{
    
    // console.log(typeof(profiledetails.profileImg));
    
    if(typeof(profiledetails.profileImg)!='string'){
    setpreview(URL.createObjectURL(profiledetails.profileImg)) 
    }
    


  },[profiledetails.profileImg])
 
  


  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-12 flex items-center justify-center">
  <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-2xl">
    <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Update Your Profile</h2>

    
      <div className="space-y-6">
        {/* Avatar Image Input */}
        <label htmlFor="image" className="flex justify-center items-center">
          <input type="file" onChange={(e)=>handleFile(e)} className="hidden" id="image" />
          {profiledetails.profileImg==''?<img
            src={preview?preview:"https://www.pngarts.com/files/11/Avatar-PNG-Free-Download.png"}
            className="w-[150px] h-[150px] rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            alt="User Avatar"
          />
          :
         <img
            src={preview?preview:`${serverurl}/upload/${profiledetails.profileImg}`}
            className="w-[150px] h-[150px] rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            alt="User Avatar"
          />
        }
        </label>

        {/* Name Input */}
        <div>
          <label className="block text-gray-700 font-medium" htmlFor="name">User Name</label>
          <input
          onChange={(e)=>validate(e)}
            type="text"
            name='username'
            value={profiledetails.username}
            id="name"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter your username"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-gray-700 font-medium" htmlFor="email">Email</label>
          <input
           onChange={(e)=>validate(e)}
            type="email"
            value={profiledetails.email}
            id="email"
            
            name="email"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter your email"
          />
        </div>
        {isemail==false && <span className='text-red-600'>Invalid input</span>}

        {/* Phone Input */}
        <div>
          <label className="block text-gray-700 font-medium" htmlFor="phone">Phone</label>
          <input
           onChange={(e)=>validate(e)}
            type="text"
            id="phone"
            name="phone"
            value={profiledetails.phoneNumber}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter your phone number"
          />
        </div>
        {isphone==false && <span className='text-red-600'>Invalid input</span>}
        <div>
          <label className="block text-gray-700 font-medium" htmlFor="phone">Adress</label>
          <textarea
           onChange={(e)=>validate(e)}
            type="text"
            value={profiledetails.adress}
            id="adress"
            name="adress"
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            placeholder="Enter your Adress"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6">
         {disable==false?  
         <button
         type="submit"
         disabled
         className="w-full bg-gradient-to-r disabled:bg-gray-400  text-white font-semibold py-3 rounded-lg shadow-lg  focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
       >
         Update Profile
       </button>
         : <button
         onClick={handleupdate}
            type="submit"
            className="w-full mb-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
          >
            Update Profile
          </button>}
          <button className='w-full bg-gradient-to-r from-gray-500 to-black text-white font-semibold py-3 rounded-lg shadow-lg hover:from-gray-600 hover:to-gray-900 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300' onClick={handlecancel}>cancel</button>
        </div>
      </div>
    
  </div>
</div>

  );
};

export default ProfilePage;

