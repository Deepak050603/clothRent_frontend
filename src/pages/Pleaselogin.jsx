import React from 'react'
import { Link } from 'react-router-dom'

function Pleaselogin() {
  return (
    <div className='h-[70vh] mt-8 grid grid-cols-12 '>
  <div className='col-span-4'></div>
        <div className=' col-span-4 '>
            <img className='roundded-lg' src="https://cdn.dribbble.com/users/1525393/screenshots/15722735/media/fdb36d13151cbc4030699f668faa4226.gif" alt="" />
            <h1 className='text-center mt-4 text-3xl'>Please <Link className='hover:text-red-600 text-blue-600' to={'/login'}>Login </Link>to access all of our services </h1>
            </div>
            <div className='col-span-4'></div>
      
    </div>
  )
}

export default Pleaselogin
