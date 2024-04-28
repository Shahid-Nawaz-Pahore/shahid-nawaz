"use client"
import Contactback from "../contactbacktext/Contactback";
import Image from 'next/image'
import {motion} from "framer-motion"
import {fadeIn} from "../variants/variants"
const Skills = () => {
    return (
        <div className="bg-[#070E1B]">
            <div className="container mx-auto  lg:px-[6rem] md:px-[3rem] px-[1rem]">
                <Contactback textback="SKILLS" />
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  pt-[2.5rem] gap-8">
                    <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
                        <div  style={{boxShadow:"0 0 10px 0 #fff",borderRadius:"6px"}} className="block one1 max-w-sm p-8 bg-[#070d1b] border-2 border-solid border-gray-900 hover:border-[#E75000] transition-all duration-500 ease-in-out transition-timing-function-ease  shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex items-center justify-center">
                            <Image 
                                src="/html.png"
                                width={50}
                                height={50}
                                alt="Picture of the author"
                            />
                            </div>
                            <p className="text-[20px] font-bold text-center text-white one2 pt-2">Html</p>
                            
                        </div>

                    </motion.div>
                    <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
                        <div style={{boxShadow:"0 0 10px 0 #fff",borderRadius:"6px"}} className="block two1 max-w-sm p-8 bg-[#070d1b] border-2 border-solid border-gray-900 hover:border-[#0477C1] transition-all duration-500 ease-in-out transition-timing-function-ease  shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex items-center justify-center">
                            <Image 
                                src="/css.png"
                                width={50}
                                height={50}
                                alt="Picture of the author"
                            />
                            </div>
                            <p className="text-[20px] font-bold text-center text-white pt-2 two2">Css</p>
                            
                        </div>

                    </motion.div>
                    
                    <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
                        <div style={{boxShadow:"0 0 10px 0 #fff",borderRadius:"6px"}} className="block three1 max-w-sm p-8 bg-[#070d1b] border-2 hover:border-[#F6E11B] transition-all duration-500 ease-in-out transition-timing-function-ease border-solid border-gray-900  shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex items-center justify-center">
                            <Image 
                                src="/javascript.png"
                                width={50}
                                height={50}
                                alt="Picture of the author"
                            />
                            </div>
                            <p className="text-[20px] font-bold text-center text-white pt-2 three2">JavaScript</p>
                            
                        </div>

                    </motion.div>
                    <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
                        <div  style={{boxShadow:"0 0 10px 0 #fff",borderRadius:"6px"}} className="block four1 max-w-sm p-8 bg-[#070d1b] border-2 border-solid border-gray-900  shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:border-[#05B4D9] transition-all duration-500 ease-in-out transition-timing-function-ease">
                            <div className="flex items-center justify-center">
                            <Image 
                                src="/reactjs.png"
                                width={50}
                                height={50}
                                alt="Picture of the author"
                                style={{ transform: 'rotate(360deg)' }}
                            />
                            </div>
                            <p className="text-[20px] font-bold text-center text-white pt-2 four2">React</p>
                            
                        </div>

                    </motion.div>
                    
                       

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 pt-[2rem] gap-8">
                <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
                        <div style={{boxShadow:"0 0 10px 0 #fff",borderRadius:"6px"}} className="block max-w-sm five1 p-8 bg-[#070d1b] border-2 border-solid border-gray-900  shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:border-[#1B99EC] transition-all duration-500 ease-in-out transition-timing-function-ease">
                            <div className="flex items-center justify-center">
                            <Image 
                                src="/typescript.png"
                                width={50}
                                height={50}
                                alt="Picture of the author"
                            />
                            </div>
                            <p className="text-[20px] font-bold text-center text-white pt-2 five2">Typescript</p>
                            
                        </div>

                    </motion.div>
                    <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
                        <div style={{boxShadow:"0 0 10px 0 #fff",borderRadius:"6px"}} className="block six1 max-w-sm p-8 bg-[#070d1b] border-2 border-solid border-gray-900  shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:border-[#427096] transition-all duration-500 ease-in-out transition-timing-function-ease">
                            <div className="flex items-center justify-center">
                            <Image 
                                src="/nextjs.png"
                                width={50}
                                height={50}
                                alt="Picture of the author"
                            />
                            </div>
                            <p className="text-[20px] font-bold text-center text-white six2 pt-2">Next</p>
                            
                        </div>

                    </motion.div>
                    <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
                        <div style={{boxShadow:"0 0 10px 0 #fff",borderRadius:"6px"}} className="block seven1 max-w-sm p-8 bg-[#070d1b] border-2 border-solid border-gray-900  shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:border-[#01ADC0] transition-all duration-500 ease-in-out transition-timing-function-ease">
                            <div className="flex items-center justify-center">
                            <Image 
                                src="/tailwind.png"
                                width={50}
                                height={50}
                                alt="Picture of the author"
                            />
                            </div>
                            <p className="text-[20px] font-bold text-center text-white pt-2 seven2">Tailwind</p>
                            
                        </div>

                    </motion.div>
                    <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
                        <div style={{boxShadow:"0 0 10px 0 #fff",borderRadius:"6px"}} className="block eight1  max-w-sm p-8 bg-[#070d1b] border-2 border-solid border-gray-900  shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:border-[#7C4DFF] transition-all duration-500 ease-in-out transition-timing-function-ease">
                            <div className="flex items-center justify-center">
                            <Image 
                                src="/bootstrap.png"
                                width={50}
                                height={50}
                                alt="Picture of the author"
                                style={{ transform: 'rotate(360deg)' }}
                            />
                            </div>
                            <p className="text-[20px] font-bold text-center text-white pt-2 eight2">Bootstrap</p>
                            
                        </div>

                    </motion.div>
                    
                       

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 pt-[2rem] gap-8">
                    <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
                        <div style={{boxShadow:"0 0 10px 0 #fff",borderRadius:"6px"}} className="block nine1 max-w-sm  p-8 bg-[#070d1b] border-2 border-solid border-gray-900  shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:border-[#65A158] transition-all duration-500 ease-in-out transition-timing-function-ease">
                            <div className="flex items-center justify-center">
                            <Image 
                                src="/nodejs.png"
                                width={80}
                                height={80}
                                alt="Picture of the author"
                            />
                            </div>
                            <p className="text-[20px] font-bold text-center text-white pt-2 nine2">Nodejs</p>
                            
                        </div>

                    </motion.div>
                    <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
                        <div style={{boxShadow:"0 0 10px 0 #fff",borderRadius:"6px"}} className="block ten1 max-w-sm p-8 bg-[#070d1b] border-2 border-solid border-gray-900  shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:border-[#4961E4] transition-all duration-500 ease-in-out transition-timing-function-ease">
                            <div className="flex items-center justify-center">
                            <Image 
                                src="/expressjs.png"
                                width={50}
                                height={50}
                                alt="Picture of the author"
                            />
                            </div>
                            <p className="text-[20px] font-bold text-center text-white ten2 pt-2">Expressjs</p>
                            
                        </div>

                    </motion.div>
                    <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
                        <div style={{boxShadow:"0 0 10px 0 #fff",borderRadius:"6px"}} className="block max-w-sm p-8 bg-[#070d1b] eleven1 border-2 border-solid border-gray-900  shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:border-[#F40057] transition-all duration-500 ease-in-out transition-timing-function-ease">
                            <div className="flex items-center justify-center">
                            <Image 
                                src="/nestjs.png"
                                width={50}
                                height={50}
                                alt="Picture of the author"
                            />
                            </div>
                            <p className="text-[20px] font-bold text-center text-white pt-2 eleven2">Nestjs</p>
                            
                        </div>

                    </motion.div>
                    <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}}>
                        <div style={{boxShadow:"0 0 10px 0 #fff",borderRadius:"6px"}} className="block twelve1 max-w-sm p-8 bg-[#070d1b] border-2 border-solid border-gray-900  shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:border-[#B726FB] transition-all duration-500 ease-in-out transition-timing-function-ease">
                            <div className="flex items-center justify-center">
                            <Image 
                                src="/mongodb.png"
                                width={50}
                                height={50}
                                alt="Picture of the author"
                                style={{ transform: 'rotate(360deg)' }}
                            />
                            </div>
                            <p className="text-[20px] font-bold text-center text-white pt-2 twelve2">MongoDB</p>
                            
                        </div>

                    </motion.div>
                    
                       

                </div>

            </div>

        </div>
    )
}
export default Skills;