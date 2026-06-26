import React from 'react';
import { motion } from 'framer-motion';
import footerImg from '../assets/foot.jpg';
import formImg from '../assets/formImage.png';

const ContactSection = () => {
  return (
    <section className="relative pt-32 pb-24 bg-[#1a1a1a] overflow-hidden w-full">
      
      {/* --- TOP WHITE CURVE --- */}
      {/* This SVG is absolutely positioned at the top edge to create the seamless dip */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[50px] md:h-[100px]"
        >
          <path d="M0,0 L1440,0 L1440,20 Q720,120 0,20 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* --- BACKGROUND IMAGE & OVERLAY --- */}
      {/* Separated out to handle the dark tint properly without affecting the white form */}
      <div className="absolute inset-0 z-0">
        <img 
          src={footerImg} 
          alt="Office Background" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
      </div>
      
      {/* --- MAIN CONTENT CONTAINER --- */}
      {/* Replaced Grid with Flex. justify-between pushes them to the far ends. lg:items-end perfectly aligns them to the bottom! */}
      <div className="relative w-full max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-16 z-10">
        
        {/* Left Side: Text Area */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-[50%] max-w-2xl"
        >
          <h2 className="mb-6 flex flex-row items-baseline gap-3 md:gap-4 flex-wrap"> 
  <span className="text-6xl md:text-[5rem] font-cursive text-brand-yellow leading-none">Let's</span>
  <span className="text-2xl md:text-3xl font-black text-white tracking-tight">Connect and Talk</span>
</h2>
          
        <p className="text-white mb-4 text-[1.08rem] font-light leading-snug text-justify">
  Since its inception in March 2005,<span className="text-red-500 font-bold"> Stoltmann Law Offices, P.C.</span> has dedicated its practice to representing investors in lawsuits and arbitration claims against brokers, financial advisors, investment advisors, and the companies they work for. Our Chicago investment fraud attorneys offer their clients a combined 35 years of experience fighting for investor rights from offices in Chicago, Illinois and suburban Barrington, Illinois and Downers Grove, Illinois.
</p>

<p className="text-white mb-10 text-[1.08rem] font-light leading-snug text-justify">
  The attorneys at Stoltmann Law Offices have dedicated their life’s work to representing investors who have been cheated or defrauded by those professionals they trusted with their hard-earned money and retirement savings, recovering in excess of $200 million for investors over the years.
</p>
          
          <div className="text-red-700 text-5xl hover:text-brand-yellow cursor-pointer font-bold mb-2">Ph 312-332-4200</div>
          <a href="mailto:Andrew@StoltLaw.com" className="text-white hover:text-brand-yellow transition text-lg font-bold text-5xl tracking-wide">Andrew@StoltLaw.com</a>
          
        </motion.div>

       {/* Right Side: Contact Form Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-[45%] max-w-[450px] bg-white text-gray-900 h-fit p-6 md:p-8 rounded-br-[3rem] shadow-2xl flex-shrink-0"
        >
          {/* 2. TIGHTENED HEADERS: Reduced bottom margins */}
          <h3 className="text-3xl font-black text-black mb-1 tracking-tight">Tell us your story</h3>
          <p className="text-red-600 font-bold text-[1.1rem] mb-5 pr-4 leading-snug">The #1 Most Trusted Investment Fraud Attorneys in Chicago</p>
          
          {/* 3. REDUCED SPACING: Changed space-y-4 to space-y-3 to pull inputs closer together */}
          <form className="space-y-3">
            {/* 4. SHRANK INPUTS: Changed p-3.5 to p-3 to make the boxes slightly shorter */}
            <input type="text" placeholder="Full Name*" className="w-full p-3 border border-gray-300/80 rounded focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-teal-50/90" />
            <input type="email" placeholder="Email Address*" className="w-full p-3 border border-gray-300/80 rounded focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-teal-50/90" />
            <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300/80 rounded focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-teal-50/90" />
            
            {/* 5. SHRANK TEXTAREA: Reduced rows="3" to rows="2" */}
            <textarea placeholder="How Can We Help?" rows="2" className="w-full p-3 border border-gray-300/80 rounded focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-teal-50/90 resize-none"></textarea>
            
           
            {/* 6. SHRANK BUTTON: Changed py-4 to py-3 */}
            <button className="w-full bg-brand-yellow text-white font-bold py-3 rounded cursor-pointer hover:bg-gray-600 hover:text-white transition duration-300 mt-1 text-sm tracking-widest shadow-md">
             SUBMIT
            </button>

            {/* 7. TIGHTENED IMAGE: Reduced mt-6 to mt-4 */}
            <div className="mt-4 flex justify-center w-full">
              <img src={formImg} alt="Awards" className="w-full h-auto max-h-[60px] object-contain" />
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;