import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getuserdetailsApi } from '../services/allApi'
import { serverurl } from '../services/serverUrl'

function Profile() {
  const [userdetail,setuserdetail]=useState([])

  console.log(userdetail);

  const getuserdetails = async()=>{
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization": `Bearer ${token}`
    }
    const result = await getuserdetailsApi(reqHeader)
    setuserdetail(result.data);
    
  
  }

  useEffect(()=>{
    getuserdetails()
  },[])


  return (
    <>
         <div className="bg-gray-100 min-h-screen p-4">
      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Banner */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-36"></div>
        
        {/* Profile Info */}
        <div className="relative -mt-16 flex flex-col items-center">
          <img
            src={`${serverurl}/upload/${userdetail?.profileImg}`}
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 border-white shadow-md"
          />
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">{userdetail.username}</h2>
         
        </div>

        {/* Profile Details */}
        <div className="px-6 py-4">
          <h3 className="text-lg font-medium text-gray-700 border-b pb-2">Profile Details</h3>
          <div className="mt-4">
          <p className="mt-2 text-gray-600">
              <span className="font-medium text-gray-800">EMAIL: </span>{userdetail.email}         
                </p>
            <p className="mt-2 text-gray-600">
              <span className="font-medium text-gray-800">Phone: </span>{userdetail.phoneNumber}         
                </p>
            <p className="text-gray-600 mt-2">
              <span className="font-medium text-gray-800">Adress: </span>{userdetail.adress}
            </p>
           
            <p className="mt-2 text-gray-600">
              <span className="font-medium text-gray-800">Total Rentals: </span>25
            </p>
          </div>
        </div>

        {/* Rental History */}
        <div className="px-6 py-4">
          <h3 className="text-lg font-medium text-gray-700 border-b pb-2">Rental History</h3>
          <div className="mt-4 space-y-4">
            {[1, 2, 3].map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm"
              >
                <img
                  src="https://via.placeholder.com/80"
                  alt="Item"
                  className="w-16 h-16 rounded-md"
                />
                <div className="ml-4">
                  <h4 className="text-gray-800 font-medium">Vintage Dress</h4>
                  <p className="text-gray-600 text-sm">Rented: Oct 2023</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="bg-gray-100 p-4 text-center">
          <Link to={'/profile-update'}>
              <button className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700">
                Edit Profile
              </button>
          </Link>
          <button className="ml-4 bg-red-600 text-white py-2 px-4 rounded-md shadow hover:bg-red-700">
            Logout
          </button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Profile
