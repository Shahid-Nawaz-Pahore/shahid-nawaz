"use client"
import Image from 'next/image'
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#070E1B]">
      <div className="container mx-auto py-3  lg:px-[3rem] xl:px-[10rem] md:px-[3rem] px-[1rem]">
        <div className="flex items-center justify-between ">
          <div className="flex-shrink-0">
            <Image
              src="/name.jpg"
              width={140}
              height={90}
              alt="Picture of the author"
              style={{ width: "270px", height: "100px" }}
            />


          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="  hover:text-[#ffc107] px-3 py-2 rounded-md text-[1rem] text-[#ffc107]">HOME</a>
              <a href="#" className=" text-white hover:text-[#ffc107] px-3 py-2 rounded-md text-sm font-medium">ABOUT</a>
              <a href="#" className=" text-white hover:text-[#ffc107] px-3 py-2 rounded-md text-sm font-medium">RESUME</a>
              <a href="#" className="text-white hover:text-[#ffc107] px-3 py-2 rounded-md text-sm font-medium">PORTFOLIO</a>
              <a href="#" className=" text-white hover:text-[#ffc107] px-3 py-2 rounded-md text-sm font-medium">CONTACT</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;