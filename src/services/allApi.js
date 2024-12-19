import { commomApi } from "./commonApi"
import { serverurl } from "./serverUrl"


// register
export const registerApi = async(reqBody)=>{
    return await commomApi('POST',`${serverurl}/register`,reqBody,"")
}
// login
export const loginApi = async(reqBody)=>{
    return await commomApi('POST',`${serverurl}/login`,reqBody,"")
}

// add-project

export const addProductApi = async(reqBody,reqHeader)=>{
    return await commomApi('POST',`${serverurl}/add-product`,reqBody,reqHeader)
}

// get all project

export const getAllProductApi = async(reqHeader)=>{
    return await commomApi('GET',`${serverurl}/allproduct`,"",reqHeader)
}
// get all user

export const getAlluserApi = async(reqHeader)=>{
    return await commomApi('GET',`${serverurl}/alluser`,{},reqHeader)
}
// to remove adminproject

export const removeadminPRojectApi = async(id,reqHeader)=>{
    return await commomApi('DELETE',`${serverurl}/remove-adminproduct/${id}`,{},reqHeader)
}

// to update product

export const updateproductApi = async(id,reqBody,reqHeader)=>{
    return await commomApi('PUT',`${serverurl}/edit-product/${id}`,reqBody,reqHeader)
}

// get all men product

export const getAllMenProductApi = async()=>{
    return await commomApi('GET',`${serverurl}/allmenproduct`,"","")
}
// get all women product

export const getAllWomenProductApi = async()=>{
    return await commomApi('GET',`${serverurl}/allwomenproduct`,"","")
}

// add to cart
export const addtocartApi = async(id,reqHeader)=>{
    return await commomApi('POST',`${serverurl}/add-to-cart/${id}`,{},reqHeader)
}

// get cart

export const getAllCartProductApi = async(reqHeader)=>{
    return await commomApi('GET',`${serverurl}/getcart`,{},reqHeader)
}

// renove cart item

export const removecartitemApi = async(id,reqHeader)=>{
    return await commomApi ('DELETE',`${serverurl}/removecartitem/${id}`,{},reqHeader)
}

// increment cart item

export const incrementcartitemApi = async(id,reqHeader)=>{
    return await commomApi ('PUT',`${serverurl}/increment/${id}`,{},reqHeader)
}

// decrement cart item

export const decrementcartitemApi = async(id,reqHeader)=>{
    return await commomApi ('PUT',`${serverurl}/decrement/${id}`,{},reqHeader)
}

// add to favorite

export const addtofavoriteApi = async(id,reqHeader)=>{
    return await commomApi ('POST',`${serverurl}/add-to-fav/${id}`,{},reqHeader)
}


// get fav items

export const getfavApi = async(reqHeader)=>{
    return await commomApi('GET',`${serverurl}/getfav`,{},reqHeader)
}

// remove fav item

export const removefavApi = async(id,reqHeader)=>{
    return await commomApi('DELETE',`${serverurl}/removefav/${id}`,{},reqHeader)
}

// get userdetails

export const getuserdetailsApi = async(reqHeader)=>{
    return await commomApi('GET',`${serverurl}/getuserdetails`,{},reqHeader) 
}

// update profile

export const updateprofileApi = async(reqBody,reqHeader)=>{
    return await commomApi('PUT',`${serverurl}/edituserdetails`,reqBody,reqHeader)
}

// get selected product

export const getselectedproductdetailsApi=async(id)=>{
    return await commomApi('GET',`${serverurl}/getdetails/${id}`,{},"")
}

// get cart quantity

export const getcartquantityApi= async(id,reqHeader)=>{
    return await commomApi('GET',`${serverurl}/getquantity/${id}`,{},reqHeader)
}