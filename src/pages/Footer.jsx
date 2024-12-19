import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';



function Footer() {
  return (
    <div>
       <footer className="bg-[black]  py-8">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
          
          {/* Column 1 - About */}
          <div >
            <h3 className="text-lg font-semibold text-gray-800">About Rent & Revel</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Rent & Revel is your ultimate destination for renting stylish and affordable clothing for every occasion.
              From elegant dresses to casual wear, we offer a variety of options to suit your needs.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className='md:ms-[220px]'>
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li><a href="#home" className="hover:text-gray-800">Home</a></li>
              <li><a href="#shop" className="hover:text-gray-800">Shop</a></li>
              <li><a href="#about" className="hover:text-gray-800">About Us</a></li>
              <li><a href="#contact" className="hover:text-gray-800">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div  className='md:ms-24'>
            <h3 className="text-lg font-semibold md:ps-32 text-gray-800">Follow Us</h3>
            <div className="mt-2  flex items-center justify-center   space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 p-3 hover:text-gray-800">
  <FaFacebook size={24} />
</a>
<a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 p-3 hover:text-gray-800">
  <FaTwitter size={24} />
</a>
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 p-3 hover:text-gray-800">
  <FaInstagram size={24} />
</a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-gray-600">
          <p className="text-sm">&copy; 2024 Rent & Revel. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
