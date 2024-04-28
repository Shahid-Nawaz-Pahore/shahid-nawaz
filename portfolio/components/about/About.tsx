"use client"
import React from 'react';
import Contactback from '../contactbacktext/Contactback';
import Image from 'next/image';



const About = () => {
  const onOpenPDF = () => {
    const fileUrl = '/shahidcv.pdf';
    window.open(fileUrl, '_blank');
  }
  return (
    <div>
      <div className="bg-[#0A101E]">
        <div className="container mx-auto  lg:px-[6rem] xl:px-[10rem] md:px-[3rem] px-[1rem]">
          <Contactback textback="ABOUT ME" />
          <div className='grid lg:grid-cols-2 items-center'>
            <div>
              <p className='text-[#FFFFFF]'>
                <Image
                  src="/image1.jfif"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  style={{height:"600px",width:"85%",borderRadius:"4px"}}
                />

              </p>
            </div>
            <div className=''>
              <p className='text-[#FFFFFF] text-[1.875rem] leading-[2.25rem] mb-[0.4rem]'>Hello! I'm Shahid Nawaz</p>
              <p className='text-[#FFC107] text-[1.5rem] leading-10 mb-[0.4rem]'>MERN Stack Developer</p>
              <p className='text-[#a9adb8] text-justify text-[15px] leading-[1.75] xl:leading-[2] mb-[0.4rem]'>I am an experienced React developer with a strong understanding of API's, Redux Toolkit, MUI, Tailwind and Node.js. I excel at developing frontend web applications using JavaScript, HTML, CSS, and Git. With my attention to detail and passion for collaboration, I consistently deliver high-quality software solutions that meet business requirements and enhance the user experience.</p>
              <p className='text-[#a9adb8] text-[1rem] mb-[0.4rem]'>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; fa1694701@gmail.com</p>
              <p className='text-[#a9adb8] text-[1rem] mb-[0.4rem]'>From:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Faisalabad, Pakistan</p>
              <p className='text-[#a9adb8] text-[1rem] mb-[1.4rem]'>Language:&nbsp;&nbsp;&nbsp;&nbsp;English, Urdu, Panjabi</p>
              <button onClick={onOpenPDF} className="bg-yellow-400 onbuttonhover lg:mb-[7rem] mb-[2rem] bg-opacity-95  text-black text-[1rem] py-[12px] px-[2rem] rounded-full">
                Download CV
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
