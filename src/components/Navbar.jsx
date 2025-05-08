import React from 'react';
import ProductCard from './productcard';
import { productsData } from '../utils/productsData';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="./logo1.jpg"
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

const Body = () => {
  return (
    <section className="flex flex-col gap-4 px-2 py-2">
      {/* Search Bar */}
      <div className="flex gap-3">
        <input
          type="text"
          className="w-80 px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 hover:shadow-md"
          placeholder="Search..."
        />
        <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300">
          Search
        </button>
      </div>

      {/* Product Cards */}
      <div className="flex flex-wrap justify-center gap-4 product-items">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
    </section>
  );
};

export { Navbar, Body };