"use client"
import { useState } from "react";
const Form = () => {
    
  return (
    <div>
      <p className="text-white lg:text-[1.875rem] text-[1.6rem] mb-[1.375rem]">
        Send us a message 🚀
      </p>
      <div>
        <input
          type="text"
          id="first_name"
          className="bg-[#101624] text-[1rem] mb-[1.875rem] h-[3.25rem] py-[12px] px-[20px] border border-[#232935] text-[#a9adb8]  placeholder-[#a9adb8] text-sm rounded-[7px]  focus:border-white  block w-full p-2.5 dark:bg-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-400 ease"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          id="first_name"
          className="bg-[#101624] text-[1rem] mb-[1.875rem] h-[3.25rem] py-[12px] px-[20px] border border-[#232935] text-[#a9adb8]  placeholder-[#a9adb8] text-sm rounded-[7px]  focus:border-white  block w-full p-2.5 dark:bg-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-400 ease"
          placeholder="Your Email"
          required
        />
        <textarea id="message" rows={6} cols={35} className="bg-[#101624]  text-[1rem] mb-[1.875rem]  py-[12px] px-[20px] border border-[#232935] text-[#a9adb8]  placeholder-[#a9adb8] text-sm rounded-[7px]  focus:border-white  block w-full p-2.5 dark:bg-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-400 ease" placeholder="Your Message"></textarea>
      </div>
      <button className="bg-yellow-400 onbuttonhover lg:mb-[7rem] mb-[2rem] bg-opacity-95  text-black text-[1rem] py-[12px] px-[1.8rem] rounded-full">
  Send Message
</button>
    </div>
  );
};
export default Form;
