import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold">SA-Store</span>
        </div>

        {/* Navigation Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <a href="#home" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#products" className="hover:text-gray-200">
              Products
            </a>
          </li>
          <li>
            <a href="#offers" className="hover:text-gray-200">
              Offers
            </a>
          </li>
          <li>
            <a href="#contact-us" className="hover:text-gray-200">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button id="menu-btn" className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
