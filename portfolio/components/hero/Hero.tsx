"use client"
import React from 'react';
import Typewriter from "typewriter-effect";
import Image from 'next/image';

const Hero = () => {
  return (
    <div style={{
      backgroundImage: "url('/bgpic.jpg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100vh',
    }}>
      <div className='container mx-auto  lg:px-[6rem] xl:px-[10rem]  md:px-[3rem] px-[1rem] pt-[5rem]'>
        <div className='grid lg:grid-cols-2 grid-cols-1 pt-[6rem]'>
          <div>
            <p className='text-[#FFC107] text-[2rem] pt-[0.5rem]'>Hello, I&apos;m</p>
            <p className='text-7xl font-bold text-white leading-none'>Mr. Shahid</p>
            <p className='text-7xl font-bold text-white leading-none'>Nawaz</p>
            <span className='text-4xl text-white '>
              <Typewriter
                options={{
                  strings: [
                    "|Blockchain Developer.",
                    "|React Js Developer.",
                    "|Mern Stack Developer.",
                    "|Full Stack Developer.",

                  ],
                  autoStart: true,
                  loop: true
                }}
              />
            </span>
            <button className="bg-yellow-400 onbuttonhover mt-[1.3rem] lg:mb-[7rem] mb-[2rem] bg-opacity-95  text-black text-[1rem] py-[9px] px-[3.2rem] rounded-full">
              Hire Me
            </button>
          </div>
          <div className='grid justify-items-center '>
            <div className='relative w-80 h-80 imageContainer'>
              <div className='imageWrapper hidden md:block'>
                <Image
                  src="/image1.jfif"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
