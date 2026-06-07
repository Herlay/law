import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import arbitration from '../assets/arbitration.jpg';

const ArbitrationSection = () => {
 const points = [
    { text: 'American Arbitration Association (AAA)' },
    { text: 'FINRA Arbitration'},
    { text: 'Judicial Arbitration/Mediation Services (JAMS)'},
    { text: 'International Arbitration'}
  ];

  return (
    <section className="bg-[#FDFDFD] py-16 overflow-hidden w-full">
      
      {/* 2. Replaced max-w-[1440px] mx-auto with w-full to stretch edge-to-edge */}
      <div className="w-full flex flex-col lg:flex-row items-center">

        {/* Left Side: Image with Yellow Top Bar and Curved Bottom Right */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative lg:pr-10"
        >
          <div className="relative w-full shadow-2xl rounded-br-[6rem] lg:rounded-br-[3rem] overflow-hidden">
            {/* The Thick Yellow Top Bar */}
            <div className="w-full h-6 bg-brand-yellow relative z-10"></div>
            
            {/* Image Wrapper with Red Overlay */}
            <div className="relative">
              {/* The Image */}
              <img 
                src={arbitration} 
                alt="Arbitration Process" 
                className="w-full h-[400px] sm:h-[650px] object-cover"
              />
              
              {/* Reddish Color Overlay */}
              <div className="absolute inset-0 bg-red-400/20 mix-blend-multiply pointer-events-none"></div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-16 mt-16 lg:mt-0"
        >
          <h2 className="text-4xl sm:text-[2.5rem] font-black text-gray-900 mb-6 tracking-tight leading-tight">
            Arbitration Process
          </h2>
          
          <p className="text-gray-500 text-[1.1rem] leading-relaxed mb-10 max-w-xl">
            Although most business in the securities industry is completed without a problem, disputes and controversies will occasionally arise from time to time.
          </p>

          {/* Custom List Items - Now Clickable Links */}
          <div className="space-y-5 mb-12 cursor-pointer">
            {points.map((pt, i) => (
              <div key={i} className="flex items-center space-x-4">
                {/* Custom Checkmark */}
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                  <Check className="text-brand-yellow" size={16} strokeWidth={4} />
                </div>
                
                {/* 3. Changed span to an <a> tag and added hover colors */}
                <a 
                  href={pt.href} 
                  className="text-gray-500 font-medium hover:text-brand-yellow transition duration-300"
                >
                  {pt.text}
                </a>
              </div>
            ))}
          </div>
             <Link to="/Arbitration" className="w-[250px] block no-underline">
              <button className="bg-brand-yellow text-gray-600 font-bold py-3.5 px-8 rounded cursor-pointer hover:bg-gray-400 hover:text-white transition duration-300 text-sm tracking-wide">
                LEARN MORE
              </button>
            </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ArbitrationSection;