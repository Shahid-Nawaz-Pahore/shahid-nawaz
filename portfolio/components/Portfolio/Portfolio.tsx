"use client"
import Image from 'next/image'
import { useState } from "react";
import Contactback from "../contactbacktext/Contactback";
import Portfoliodata from "../portfolioData/Portfoliodata";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

import Link from 'next/link';
type A = {
    img: string,
    github: string,
    liveurl: string
}
const Portfolio = () => {
    const [data, setData] = useState<A[]>(Portfoliodata);
    return (
        <div className="bg-[#0A101E]">
            <Contactback textback="PORTFOLIO" />
            <div className="container mx-auto lg:px-24  pb-28 md:px-12 px-4">
                <div className="grid lg:grid-cols-3 pt-4 grid-cols-1 gap-10">
                    {data.map((value: A, index: number) => (
                        <div className="relative group" key={index}>
                            <Image
                                src={value.img}
                                width={500}
                                height={800}
                                style={{ height: "230px" }}
                                layout="fixed"
                                alt="Picture of the author"
                                className="transition-opacity duration-400 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-[#A2A5AA]  opacity-5 group-hover:opacity-50 transition-opacity duration-300 ease-in-out flex justify-center items-center">
                                <div className="flex justify-center items-center h-screen ">
                                    <Link href={value.github} target="_blank" rel="noopener noreferrer">
                                        <div className='border border-black border-solid  rounded-full h-[4.5rem] w-[4.5rem] flex items-center justify-center hover:border-yellow-400 hover:border-2 hover:text-yellow-400 transition-all duration-200 ease-in-out'>
                                            <FaGithub className='icontwo' size={30} />
                                        </div>
                                    </Link>
                                    <Link href={value.liveurl} target="_blank" rel="noopener noreferrer">
                                    <div className='border border-black border-solid rounded-full h-[4.5rem] w-[4.5rem] ml-4 flex items-center justify-center hover:border-yellow-400 hover:border-2 hover:text-yellow-400 transition-all duration-500 ease-in-out'>
                                        <FaLink size={30} />
                                    </div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Portfolio;