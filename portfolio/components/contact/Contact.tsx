import Form from "../form/Form";
import { TfiEmail } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { FaSkype } from "react-icons/fa";
import Contactback from "../contactbacktext/Contactback";

const Contact = () => {
  return (
    <div className="bg-[#070E1B] ">
      <div>
        <Contactback textback="CONTACT"/>
      </div>
      <div className="grid container grid-cols-1  mx-auto lg:px-[6rem] md:px-[3rem] px-[1rem] lg:grid-cols-2">
        <div>
          <Form />
          
        </div>
        <div className="lg:ml-10 mb-10 ">
          <p
            className="text-white text-[1.875rem] leading-normal"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Let's Chat.
          </p>
          <p className="text-white text-[1.875rem] leading-8 mb-[22px]">
            Tell me about your project.
          </p>
          <p className="text-[#a9adb8] mb-[22px] lg:pt-1 text-[1rem]">
            Let's create something together 🤘
          </p>

          <div className="flex mt-[1.375rem] items-center text-[#a9adb8] hovered ">
            <div className="border border-solid rounded-full border-[#3f4551] borde p-4">
              <TfiEmail size={20} className="" />
            </div>
            <div className="ml-4">
              <p className="text-white  text-[20px]">Email</p>
              <p className="#a9adb8 text-[1rem] ">fa1694701@gmail.com</p>
            </div>
          </div>

          <div className="flex mt-[1.375rem] mb-[20px] items-center text-[#a9adb8] hovered ">
            <div className="border border-solid rounded-full border-[#3f4551] borde p-4">
              <GrLocation size={20} className="" />
            </div>
            <div className="ml-4">
              <p className="text-white  text-[20px]">Address</p>
              <p className="#a9adb8 text-[1rem] ">Faisalabad, Pakistan</p>
            </div>
          </div>
          <p className="text-[#a9adb8] text-[20px]">
            Visite my social profile and get connected
          </p>
          <div className="flex mt-[1.375rem] items-center text-[#a9adb8] ">
            <div className="border border-solid flex rounded-full border-[#3f4551] md:p-4 p-3 icon-container">
              <IoLogoLinkedin size={20} className="icon" />
              <span className="text-white mt-[-2px] md:pl-3 pl-1 text-hidden">
                Linkedin
              </span>
            </div>
            <div className="border ml-3 border-solid flex rounded-full border-[#3f4551] md:p-4 p-3 icon-container">
              <BsGithub size={20} className="" />
              <span className="text-white mt-[-2px] md:pl-3 pl-1 text-hidden">Github</span>
            </div>
            <div className="border ml-3 border-solid flex  rounded-full  border-[#3f4551] md:p-4 p-3 icon-container">
              <FaSkype size={20} className="" />
              <span className="text-white mt-[-2px] md:pl-3 pl-1 text-hidden">Skype</span>
            </div>
            <div className="border ml-3 border-solid rounded-full flex border-[#3f4551] md:p-4 p-3 icon-container">
              <TfiEmail size={20} className="" />
              <span className="text-white mt-[-2px] md:pl-3 pl-1 text-hidden">Email</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
