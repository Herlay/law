import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import LitigationImg from '../assets/litigation.jpg'; 

const CommercialLitigation = () => {
  const points = [
    { text: 'Business Tort Litigation' },
    { text: 'Commercial Arbitration' },
    { text: 'Breach of Contract'},
    { text: 'ERISA Class Action' },
    { text: 'Employment Litigation' },
    { text: 'Professional Malpractice' },
    { text: 'Trusts and Estate Litigation' }
  ];

  return (
    <section className="bg-white py-16 overflow-hidden w-full">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center">

        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 px-6 sm:px-12 lg:pl-24 lg:pr-16 mt-16 lg:mt-0"
        >
          <h2 className="text-4xl sm:text-[2.5rem] font-black text-gray-900 mb-6 tracking-tight leading-tight">
            Commercial Litigation
          </h2>
          
          <p className="text-black text-[1rem] leading-relaxed mb-10 max-w-xl">
 Stoltmann Law Offices Commercial Litigation Group is a Chicago-based law firm representing individuals and corporations in all different types of business and commercial litigation. Our investment fraud attorneys have litigated approximately one thousand fraud cases and related court cases.
           </p>

          {/* 2-Column Grid for Custom List Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 cursor-pointer gap-x-4 mb-12">
            {points.map((pt, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center shrink-0">
                  <Check className="text-brand-yellow" size={16} strokeWidth={4} />
                </div>
                <a 
                  href={pt.href} 
                  className="text-gray-600 text-sm lg:text-base hover:text-black transition duration-300"
                >
                  {pt.text}
                </a>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {/* <Link to="/" className="w-[200px] block no-underline">
            <button className="bg-brand-yellow text-gray-600 font-bold cursor-pointer py-3.5 px-8 rounded hover:bg-gray-600 hover:text-white transition duration-300 text-sm tracking-wide">
              LEARN MORE
            </button>
            </Link> */}

            {/* Outlined Button specific to this section */}
            <Link to="/ContactUs" className="w-[250px] block no-underline">
            <button className="bg-brand-yellow text-gray-600 font-bold cursor-pointer py-3.5 px-8 rounded hover:bg-gray-600 hover:text-white transition duration-300 text-sm tracking-wide">
              CONTACT US
            </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Image with Yellow Top Bar and Curved Bottom Left */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative lg:pl-10"
        >
         
         <div className="relative w-full rounded-bl-[6rem] lg:rounded-bl-[3rem] overflow-hidden">
  
  {/* The Thick Yellow Top Bar - Stays relative z-10 to sit on top of the image container */}
  <div className="w-full h-6 bg-brand-yellow relative z-10"></div>
  
  {/* 1. Wrapper for Image and Overlay (relative so absolute overlay fits perfectly) */}
  <div className="relative">
    <img 
      src={LitigationImg} 
      alt="Commercial Litigation" 
      className="w-full h-[400px] sm:h-[600px] object-cover"
    />

    {/* 2. The Reddish Tint Overlay */}
    <div className="absolute inset-0 bg-red-700/30 mix-blend-multiply pointer-events-none"></div>
  </div>
  
</div>
        </motion.div>

      </div>
    </section>
  );
};

export default CommercialLitigation;