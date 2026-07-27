import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/hero.jpg';
import companysLogo from "../assets/companyLogo.png";

const Hero = () => {
  return (
    <div>
      
<div className="relative w-full min-h-[100svh] flex flex-col justify-end bg-[#111111] overflow-hidden pt-24 lg:pt-0">
      
  {/* Background Image Overlay */}
  <div 
    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-90 z-0"
    style={{ backgroundImage: `url(${img1})` }} // Replace with your background image
  />
  
  {/* Content Layer */}
  <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between flex-1 h-full">
    
    {/* Left Text Content */}
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      // Increased width to 60% on desktop to use the available left space
      className="w-full lg:w-[60%] flex flex-col items-center lg:items-start justify-center text-center lg:text-left z-20 pb-8 lg:pb-16"
    >
      {/* Heading Row: 'You' and 'Found Hope' */}
      <div className="flex flex-row items-end justify-center lg:justify-start w-full leading-none">
        
        {/* 'You' */}
        <span className="font-cursive text-brand-yellow text-[5rem] mt-80 lg:mt-18 sm:text-[6rem] lg:text-[8rem] leading-[0.8]  drop-shadow-xl select-none pointer-events-none mr-2 sm:mr-4 lg:mr-6 transform translate-y-2 lg:translate-y-4">
          You
        </span>

        {/* 'Found Hope' */}
        <h1 className="text-[3.3rem] sm:text-[4.5rem] lg:text-[5rem] font-bold text-white tracking-tight drop-shadow-2xl whitespace-nowrap leading-[0.8]">
          Found Hope
        </h1>
        
      </div>

      {/* Subtitle - Removed conflicting tracking classes and applied a specific left margin for desktop */}
      <p className="text-white mt-6 sm:mt-8 text-[1.2rem] sm:text-[1.2rem] lg:text-[1.7rem] font-bold drop-shadow-md z-10 uppercase tracking-[0.15em] lg:ml-[90px]">
        Regain Your Financial Freedom
      </p>

    </motion.div>

  </div>

  {/* Curved bottom separator (Perfect Downward Dip) */}
  <div className="absolute bottom-0 w-full z-30 pointer-events-none translate-y-[1px]">
    <svg 
      viewBox="0 0 1440 120" 
      className="w-full h-[40px] sm:h-[80px] md:h-[120px] block" 
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z" 
        fill="white" 
      />
    </svg>
  </div>
</div>
 {/* Logos Section */}
    <div className="flex w-full max-w-7xl mx-auto justify-center items-center mt-10 mb-10 px-4 sm:px-6 lg:px-10">
  <img 
    src={companysLogo} 
    alt="Company_Logos" 
    className="w-full h-auto object-contain" 
  />
</div>
</div>

  );
};

export default Hero;