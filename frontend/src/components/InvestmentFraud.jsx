import React from 'react';
import { motion } from 'framer-motion';
import fraudAttorneys from '../assets/att1.png'; 
import fraudAttorneysBack from '../assets/Securities-Fraud-Attorneys-in-Chicago.jpg'; 
import { Link } from 'react-router-dom';

const InvestmentFraud = () => {
  return (
    <section className="relative w-full min-h-[500px] lg:min-h-[500px] flex items-center mt-20 lg:mt-32 z-10 bg-[#1a1a1a]">
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated Background Image - Aligned right so "WALL ST" shows */}
        <motion.img 
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          src={fraudAttorneysBack} 
          alt="Wall Street" 
          className="absolute inset-0 w-full h-full object-cover object-[60%_center] opacity-40"
        />
        
        {/* Dark gradient fading left to right - uncommented so your text is readable! */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-transparent z-10"></div>

        {/* Diagonal line overlay pattern */}
        <div 
          className="absolute inset-0 z-20 opacity-30 pointer-events-none" 
          style={{ backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 8px)' }}
        ></div>
      </div>

      {/* --- LAYER 2: Text Content (Left Side) --- */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 z-20 py-16 lg:py-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-[55%] flex flex-col justify-center"
        >
          <h2 className="text-4xl sm:text-[2.5rem] font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Investment Fraud Attorneys
          </h2>
          
         <p className="text-white font-light leading-relaxed text-[0.95rem] md:text-[1rem] mb-8 md:mb-10 max-w-full lg:max-w-xl text-left md:text-justify hyphens-auto">
  The Guardian Property Law Group exclusively represents investors from across the country in securities litigation and arbitration actions including claims for fraud, unsuitable investment recommendations, excessive trading, churning, unauthorized trading, breach of fiduciary duty and misrepresentations and omissions.
</p>

    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-6">
    
  {/* CONTACT US BUTTON */}
<Link to="/ContactUs" className="w-[180px] block no-underline">
  <div className="w-full flex items-center justify-center bg-brand-yellow text-white font-extrabold py-4 px-10 rounded cursor-pointer hover:bg-white hover:text-brand-yellow transition duration-300 text-[14px] tracking-widest uppercase shadow-md whitespace-nowrap border border-[#e5e7eb]">
    CONTACT US
  </div>
</Link>

</div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-0 lg:right-[3%] w-[90%] sm:w-[60%] lg:w-[55%] h-[45%] sm:h-[65%] lg:h-[110%] z-0 lg:z-30 opacity-40 lg:opacity-100 pointer-events-none flex justify-end items-end"
      >
        <div className="relative h-full w-full lg:w-auto flex justify-end items-end">
          <img 
            src={fraudAttorneys} 
            alt="Attorneys Shaking Hands" 
            className="object-contain object-bottom h-full w-auto max-w-full drop-shadow-2xl"
          />
          
          <div className="absolute inset-0 bg-red-900/1 mix-blend-color pointer-events-none"></div>
        </div>
      </motion.div>

    </section>
  );
};

export default InvestmentFraud;