"use client"
import Contactback from "../contactbacktext/Contactback";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../variants/variants";
const Resume = () => {
  return (
    <div className="bg-[#070E1B]">
      <Contactback textback="RESUME" />
      <div className="container mx-auto lg:px-24  pb-28 md:px-12 px-4">
        <div className="grid grid-cols-1  md:grid-cols-2">

          <div>
            <div className="flex pb-[30px]">
              <FaGraduationCap size={40} className="text-[#3c434e]" />
              <p className="text-[white] text-[40px] mt-[-10px] font-normal ml-[30px]">Education</p>
            </div>

            <div className="container">

              <div className="step completed">
                <div className="v-stepper">
                  <div className="circle"></div>
                  <div className="line"></div>
                </div>

                <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}} className="content">
                  <p className="text-[#ffc107] text-[24px] font-normal mb-[10px]">Bachelor of Computer Science</p>
                  <p className="text-[#a9adb8] text-[18px] mb-[10px]">2019-2023</p>
                  <p className="text-[#fff] text-[20px] font-normal mb-[10px]">COMSATS University Islamabad</p>
                </motion.div>

              </div>


              <div className="step active">
                <div className="v-stepper">
                  <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }} className="circle"></motion.div>
                  <div className="line"></div>
                </div>

                <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}} className="content">
                  <p className="text-[#ffc107] text-[24px] font-normal mb-[10px]">Intermediate (ICS)</p>
                  <p className="text-[#a9adb8] text-[18px] mb-[10px]">2017-2019</p>
                  <p className="text-[#fff] text-[20px] font-normal mb-[10px]">Aspire Group of Colleges</p>
                </motion.div>
              </div>





              <div className="step">
                <div className="v-stepper">
                  <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }} className="circle"></motion.div>
                  <div className="line"></div>
                </div>

                <div className="content">
                  <p className="text-[#ffc107] text-[24px] font-normal mb-[10px]">Matric</p>
                  <p className="text-[#a9adb8] text-[18px] mb-[10px]">2015-2017</p>
                  <p className="text-[#fff] text-[20px] font-normal mb-[10px]">Govt High school Sargana</p>

                </div>
              </div>
              <div className="step empty">
                <div className="v-stepper">
                  <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }} className="circle"></motion.div>
                  <div className="line"></div>
                </div>


              </div>
            </div>
          </div>
          <div>
            <div className="flex pb-[30px]">
              <FaBriefcase size={40} className="text-[#3c434e]" />
              <p className="text-[white] text-[40px] mt-[-10px] font-normal ml-[30px]">Experience</p>
            </div>

            <div className="container">

              <div className="step completed">
                <div className="v-stepper">
                  <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }} className="circle"></motion.div>
                  <div className="line"></div>
                </div>

                <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}} className="content">
                  <p className="text-[#ffc107] text-[24px] font-normal mb-[10px]">Mern Stack Developer</p>
                  <p className="text-[#a9adb8] text-[18px] mb-[10px]">2023 – continue </p>
                  <p className="text-[#fff] text-[20px] font-normal mb-[10px]">NetixSol Pvt.ltd</p>
                  <p className="text-justify text-[#A9ADB8] leading-6">I have leveraged the MERN stack in various projects at Netixsol, incorporating TypeScript for robust development. Employing Nest.js on the backend has enhanced efficiency, while Tailwind CSS has been utilized for seamless styling. </p>
                </motion.div>

              </div>


              <div className="step active">
                <div className="v-stepper">
                  <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }} className="circle"></motion.div>
                  <div className="line"></div>
                </div>

                <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.7}} className="content">
                  <p className="text-[#ffc107] text-[24px] font-normal mb-[10px]">Mern Stack Developer</p>
                  <p className="text-[#a9adb8] text-[18px] mb-[10px]">2023 – continue </p>
                  <p className="text-[#fff] text-[20px] font-normal mb-[10px]">Genius Mind Zone </p>
                  <p className="text-justify text-[#A9ADB8] leading-6">As a junior MERN stack developer, I&apos;ve had the opportunity to actively contribute within the innovative realm of the Genius Mind Zone, collaborating on their projects to drive excellence and innovation. </p>
                </motion.div>
              </div>





              <div className="step">
                <div className="v-stepper">

                  <div className="line"></div>
                </div>


              </div>

            </div>
          </div>
        </div>


      </div>

    </div>


  )
}
export default Resume;