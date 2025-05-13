import React from 'react';
import ProductCard from './productcard';
import {productsData} from '../utils/productsData';



const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src='./logo1.jpg'
          alt="Logo"
          className="w-35 h-30 transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex justify-between list-none w-96 text-lg font-medium">
        <li className="relative group">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </a>
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            About
          </a>
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative group">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
          >
            Contact
          </a>
          <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>

      {/* Cart */}
      <div className="text-gray-700 text-lg font-medium cursor-pointer hover:text-blue-500 transition-colors duration-300">
        Cart
      </div>
    </header>
  );
};


  

export default Navbar;