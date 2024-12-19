import React, { useEffect, useState } from "react";
import { getcartquantityApi, getselectedproductdetailsApi } from "../services/allApi";
import { useParams } from "react-router-dom";
import { serverurl } from "../services/serverUrl";

const ProceedBuy = () => {
   const {id} = useParams()

   console.log(id);
   
  const [showAddressForm, setShowAddressForm] = useState(false);
   const [productdetails,setproductdetails]= useState([])
    const [size,setsize]=useState("")

    const [quantity,setquantity] = useState("")

     const getproduct =async()=>{
        console.log(id);
        
        const result =await getselectedproductdetailsApi(id)
        // console.log(result);
        setproductdetails(result.data)
      }

      const getquantity = async () =>{
        // console.log('iside');
        
        const token = sessionStorage.getItem("token")
        const reqHeader = {
          "Content-Type":"application/json",
          "Authorization": `Bearer ${token}`
        }

        const result = await getcartquantityApi(id,reqHeader)
        console.log(result);
        
        setquantity(result.data)
      }

      useEffect(()=>{
          getproduct()
          getquantity()
        },[])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Confirm Purchase
        </h2>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={`${serverurl}/upload/${productdetails?.productimg}`}
              alt="Product"
              className="w-full max-w-sm rounded-lg shadow-md"
            />
          </div>

          {/* Product Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
            {productdetails.productname}
            </h3>
            <p className="text-lg text-green-600">{productdetails.price}</p>
            <p className="text-gray-700">
            {productdetails.description}
            </p>
            <p className="text-gray-700">
            quantity : {quantity}
            </p>

            {/* Features */}
           

            {/* Size Selector */}
            <div>
              <label
                htmlFor="size"
                className="block text-gray-700 font-medium mb-2"
              >
                Select Size
              </label>
              <select
                id="size"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="size"
                className="block text-gray-700 font-medium mb-2"
              >
                Select Time period
              </label>
              <select
                id="size"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              >
                <option value="3">3 days</option>
                <option value="9">9 days</option>
                <option value="12">12 days</option>
                <option value="15">15 days</option>
                
              </select>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="space-y-6">
          {/* <div>
            <label className="block text-gray-700 font-medium mb-2">
              Select Address
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            >
              <option>Select an address</option>
              <option>123 Main St, Springfield</option>
              <option>456 Elm St, Shelbyville</option>
            </select>
          </div> */}

          {/* Option to Add New Address */}
          {/* <button
            onClick={() => setShowAddressForm(!showAddressForm)}
            className="w-full text-blue-600 font-semibold hover:underline"
          >
            {showAddressForm ? "Hide Address Form" : "Add a New Address"}
          </button> */}

          {/* Add Address Form */}
          {/* {showAddressForm && (
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
              <label className="block text-gray-700 font-medium mb-2">
                New Address
              </label>
              <textarea
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                placeholder="Enter your new address"
              />
              <button
                onClick={() => setShowAddressForm(false)}
                className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 transition-all duration-300"
              >
                Save Address
              </button>
            </div>
          )} */}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            className="px-6 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition-all duration-300"
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-all duration-300"
          >
            Confirm Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProceedBuy;
