"use client"
import { FaReact } from 'react-icons/fa';
import Contactback from '../contactbacktext/Contactback';
import { FaCode } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';
import { motion} from "framer-motion";


const Service = () => {
  return (
    <div className="bg-[#0A101E]">
        <Contactback  textback="SERVICE"/>
      <div className="container mx-auto lg:px-[6rem] pt-[1rem] pb-[6rem]  md:px-[3rem] px-[1rem]">
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  place-items-center gap-5 xl:gap-0">
          <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }} className="text-white servicehover">
            <div style={{border:"1px solid #232935",borderRadius:"3px",padding:"50px 30px"}} className="block max-w-sm p-6 bg-[#101624]   shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center">
            <div className='grid place-items-center '>
            <div className='something' style={{ border: ".5px solid #3f4551", borderRadius: "50%", height: "90px", width: "90px", display: "flex", alignItems: "center", justifyContent: "center",backgroundColor:"#070d1b" }}>
      <FaReact className='text-[50px] borderchangecolour' />
    </div>
    <p className='text-[20px] font-bold text-[#fff] mt-5 text'>React Application</p>
    <p className='text-[15px] text-[#a9adb8] pt-3 leading-6'>I specialize in creating dynamic and user-friendly web applications using modern technologies like React ensuring seamless user experiences and robust functionality.</p>
    </div>
            
            </div>
          </motion.div>
          
          <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }} className="text-white servicehover">
            <div style={{border:"1px solid #232935",borderRadius:"3px",padding:"50px 30px"}} className="block max-w-sm p-6 bg-[#101624]   shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center">
            <div className='grid place-items-center'>
            <div className='something' style={{ border: ".5px solid #3f4551", borderRadius: "50%", height: "90px", width: "90px", display: "flex", alignItems: "center", justifyContent: "center",backgroundColor:"#070d1b" }}>
      <FaCode  className='text-[50px] borderchangecolour' />
    </div>
    <p className='text-[20px] font-bold text-[#fff] mt-5 text'>Web Development</p>
    <p className='text-[15px] text-[#a9adb8] pt-3 leading-6'>I specialize in creating Full Stack Website using modern technologies like MERN Stack (MongoDB, Express.js, React.js and Node.js) a perfect combination.</p>
    </div>
            
            </div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }} className="text-white servicehover">
            <div style={{border:"1px solid #232935",borderRadius:"3px",padding:"50px 30px"}} className="block max-w-sm p-6 bg-[#101624]   shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center">
            <div className='grid place-items-center'>
            <div className='something' style={{ border: ".5px solid #3f4551", borderRadius: "50%", height: "90px", width: "90px", display: "flex", alignItems: "center", justifyContent: "center",backgroundColor:"#070d1b" }}>
      <FaDesktop className='text-[50px] borderchangecolour' />
    </div>
    <p className='text-[20px] font-bold text-[#fff] mt-5 text'>Responsive Design</p>
    <p className='text-[15px] text-[#a9adb8] pt-3 leading-6'>I specialize in crafting intuitive UI/UX for web and mobile apps. From wireframes to prototypes, I ensure every element enhances user engagement with purposeful design.</p>
    </div>
            
            </div>
          </motion.div>
          
          
        </div>
      </div>
    </div>
  );
};
export default Service;
