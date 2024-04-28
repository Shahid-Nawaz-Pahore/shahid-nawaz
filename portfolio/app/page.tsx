import Portfolio from "@/components/Portfolio/Portfolio";
import Resume from "@/components/Resume/Resume";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Service from "@/components/services/Services";
import Skills from "@/components/skills/Skills";


import React from "react";
import AnimatedCursor from "react-animated-cursor";


export default function Home() {
  return (
    <div className="animated-cursor">
      <AnimatedCursor/>
      <Navbar />
      
      <Hero />
      <About />
     
      <Service />
      <Skills />
      <Resume />
      <Portfolio />
      
      <Contact />
      <Footer /> 
      
      
      {/* Your content here */}
    </div>
  );
}
