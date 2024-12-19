
import { IoBagHandleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { RiArchiveDrawerFill } from "react-icons/ri";
import { IoIosLogIn } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { roleContext } from "../context/Contextshare";




function Header() {

  const [token, settoken] = useState("")

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const{role} = useContext(roleContext)

 
 console.log(token);

 
 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleprofile =()=>{
    setIsOpen(!isOpen);
    navigate('/profile')
  }

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      settoken(sessionStorage.getItem("token"))
      
    }
    
    
  },[token,,navigate])
  return (
    <div className="">
       <nav className="bg-[#f1f7b5] py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Brand Name on the left */}
       <div>
        {role=='admin' ? <Link to={ '/admin' }> <div className="text-[#88a4ca] flex justify-between items-center font-bold text-2xl">
           <RiArchiveDrawerFill className="me-2" />Rent & Revel
          </div>
          </Link>
         :
          <Link to={ '/' }> <div className="text-[#88a4ca] flex justify-between items-center font-bold md:text-2xl text-xl">
           <RiArchiveDrawerFill className="me-2" />Rent & Revel
          </div>
          </Link>}
       </div>

       
          {/* Icons on the right */}
          <div className="flex items-center">
            {role!='admin' && <Link to={token?'/wishlist':'/pleaselogin'} className="text-black py-3 md:px-5 me-4  md:me-0 hnavitem hover:text-red-400">
              <CiHeart className="h-8 w-8  md:" />
            </Link>}
          {role!='admin' &&  <Link to={token?'/cart':'/pleaselogin'} className="text-black  py-3  md:px-5 me-4 md:me-0 navitem hover:text-[#6667ff]">
              <IoBagHandleOutline className="h-11 w-7" />
            </Link>}
           { !token &&<Link to={'/login'} className="text-black py-3  md:px-5 me-4 md:me-0 lnavitem hover:text-green-500"> <IoIosLogIn className="h-7 w-7 "   /></Link>}
  
        
          
  
           {/* collapse */}
  
          
  
  
      {/* dropdown menu */}
  
      {token &&<div>
        {/* Dropdown Button */}
    <button
          id="dropdownDefaultButton"
          onClick={toggleDropdown}
          className="text-black   font-medium rounded-lg text-xl md:px-5 py-2.5 text-center inline-flex items-center "
          type="button"
        >
          <FontAwesomeIcon icon={faUser} />
          
          <FontAwesomeIcon className="ms-2 text-sm"  icon={isOpen?faAngleUp:faAngleDown} />
        </button>
        
  
        {/* Dropdown Menu */}
        {isOpen && (
          <div
            id="dropdown"
            className=" bg-white w-[150px] p-5 divide-y flex flex-col items-center absolute top-20 right-2 md:right-20 m z-[999] divide-gray-100 rounded-lg shadow "
          >
     { role!='admin' &&  <button onClick={handleprofile} className="py-2 hover:text-blue-500">profile</button>}
      <button className="   text-black hover:text-red-500 px-3 me-4 md:me-0 py-1 ">Logout <FontAwesomeIcon className="ms-1" icon={faPowerOff} /></button>
  
          </div>
        )}
      </div>}
  
  
          </div>
        
      </div>
    </nav>
    </div>
  )
}

export default Header
