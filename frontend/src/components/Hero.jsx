import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/hero.png';

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: `url(${img1})` }}
      />
      
    
{/* Hero Text */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 flex flex-col items-center w-full px-4 mt-[25vh] md:mt-[40vh]"
      >
        {/* The relative anchor container */}
        <div className="relative inline-flex flex-col items-center justify-center">
          
          {/* 'You' - pinned to the left and slightly up from 'Found Hope' */}
          <span className="absolute right-[88%] md:right-[80%] bottom-[25%] md:bottom-[1%] font-cursive text-brand-yellow text-[6rem] md:text-[8.5rem] leading-none z-0 drop-shadow-xl select-none pointer-events-none">
            You
          </span>

        {/* 'Found Hope' - sits cleanly on top and moved to the right */}
          <h1 className="text-[3.5rem] md:text-[7rem] font-bold text-white tracking-tight relative z-10 drop-shadow-2xl whitespace-nowrap ml-8 md:ml-45">
            Found Hope
          </h1>
        </div>
        
     {/* Subtitle - flushed right up against the text above */}
        <p className="text-white mt-0 text-[0.8rem] md:text-[2rem] tracking-[0.1rem] font-semibold drop-shadow-md z-10 text-center uppercase">
          Regain Your Financial Freedom
        </p>
      </motion.div>

      {/* Curved bottom separator (Perfect Downward Dip) */}
      <div className="absolute bottom-0 w-full z-30 pointer-events-none translate-y-[1px]">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-[50px] md:h-[120px] block" 
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
  );
};

export default Hero;