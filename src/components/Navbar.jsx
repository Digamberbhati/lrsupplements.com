"use client";  // ✅ Add this at the very top

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-2 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* Left - Navigation Links */}
        <ul className="hidden md:flex gap-6 text-lg font-semibold">
          <li>
            <Link href="/" className="hover:text-[#FF9F1C] transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-[#FF9F1C] transition duration-300">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#FF9F1C] transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#FF9F1C] transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <h1 className="text-xl font-bold text-center flex-1">
          <Link href="/" className="flex items-center justify-center">
            <Image 
              src="/images/logo.png"
              alt="Irsupplements Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </Link>
        </h1>

        {/* Right - Search Bar, Cart, Login */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF9F1C]"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600">
              <FaSearch />
            </button>
          </div>

          {/* Cart Icon */}
          <Link href="/cart" className="text-gray-700 hover:text-yellow-800 transition">
            <FaShoppingCart size={20} />
          </Link>

          {/* Login Button */}
          <Link href="/login" className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-800 transition">
            <FaUser className="inline mr-2" /> Login
          </Link>
        </div>

        {/* Hamburger Menu (For Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 py-4 text-center">
          <li>
            <Link href="/" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/cart" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
              Cart
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
