
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Productpage from './pages/Productpage'
import Footer from './pages/Footer'
import Cart from './pages/Cart'
import Him from './pages/Him'
import ProductDetailPage from './pages/ProductDetailPage '
import Admin from './pages/Admin'
import AdminProductdetails from './pages/AdminProductdetails'
import Userdetails from './pages/Userdetails'
import ProfilePage from './pages/ProfilePage'
import Wishlist from './pages/Wishlist'
import { useContext } from 'react'
import { roleContext } from './context/Contextshare'
import Pagenotfound from './pages/Pagenotfound'
import Pleaselogin from './pages/Pleaselogin'
import Profile from './pages/Profile'
import AdminBuyingRequests from './pages/AdminBuyingRequests'
import ProceedBuy from './pages/ProceedBuy'


function App() {

  const{role} = useContext(roleContext)
  console.log(role);
  

  return (
    <>
   
   <Header login={true}/>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Auth />} />
    <Route path='/register' element={<Auth register={true}/>}/>
    <Route path='/her' element={<Productpage />} />
    <Route path='/him' element={<Him />} />
    <Route path='/details/:id' element={<ProductDetailPage />} /> 
    <Route path='/admin' element={role=='admin'?<Admin />:<Pagenotfound />} /> 
    <Route path='/admin-details' element={role=='admin'?<AdminProductdetails />:<Pagenotfound />} /> 
    <Route path='/admin-user-details' element={role=='admin'?<Userdetails />:<Pagenotfound />} /> 
    <Route path='/profile-update' element={<ProfilePage />} /> 
    <Route path='/profile' element={<Profile />} /> 
    <Route path='/wishlist' element={<Wishlist  />} /> 
    <Route path='/pleaselogin' element={<Pleaselogin  />} /> 
    <Route path='/requests' element={<AdminBuyingRequests  />} /> 
    <Route path='/buy/:id' element={<ProceedBuy  />} /> 


    <Route path='/cart' element={<Cart />} />
    <Route path='*' element={<Pagenotfound />} />


    

  </Routes>
  <Footer/>

   {/* <Auth/> */}
     
    </>
  )
}

export default App
