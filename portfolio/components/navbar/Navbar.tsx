"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-transparent z-50">
      <div className="container mx-auto py-3  lg:px-[3rem] xl:px-[10rem] md:px-[3rem] px-[1rem]">
        <div className="flex items-center justify-between ">
          <div className="flex-shrink-0">
            <Image
              src="/name-removebg-preview.png"
              width={140}
              height={90}
              alt="Picture of the author"
              style={{ width: "270px", height: "100px" }}
            />


          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <Link href="/">
              <span className="  hover:text-[#ffc107] px-3 py-2 rounded-md text-[1rem] text-[#ffc107]">HOME</span>
            </Link>
            <Link href="/about">
              <span className=" text-white hover:text-[#ffc107] px-3 py-2 rounded-md text-sm font-medium">ABOUT</span>
            </Link>
            <Link href="/resume">
              <span className=" text-white hover:text-[#ffc107] px-3 py-2 rounded-md text-sm font-medium">RESUME</span>
            </Link>
            <Link href="/portfolio">
              <span className=" text-white hover:text-[#ffc107] px-3 py-2 rounded-md text-sm font-medium">PORTFOLIO</span>
            </Link>
            <Link href="/contact">
              <span className=" text-white hover:text-[#ffc107] px-3 py-2 rounded-md text-sm font-medium">CONTACT</span>
            </Link>
           
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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#070E1B] z-10">
          <Link href="/" className="text-gray-300  hover:text-[#ffc107] block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link href="/about" className="text-gray-300  hover:text-[#ffc107] block px-3 py-2 rounded-md text-base font-medium">About</Link>
          <Link href="/resume" className="text-gray-300  hover:text-[#ffc107] block px-3 py-2 rounded-md text-base font-medium">Resume</Link>
          <Link href="/portfolio" className="text-gray-300  hover:text-[#ffc107] block px-3 py-2 rounded-md text-base font-medium">Portfolio</Link>
          <Link href="/contact" className="text-gray-300  hover:text-[#ffc107] block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;