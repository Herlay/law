import React from 'react';
import { motion } from 'framer-motion'; 
import Navbar from '../components/Navbar';
import bannerImg from '../assets/tieImage.jpg';
import goggleImg from '../assets/GoogleCustomer.png';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';


const ContactUs = () => {

    const contactVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

const BRASS = "#AD8A46";
  return (
   <div className="min-h-screen bg-white">
      
      {/* --- HERO BANNER --- */}
      <header className="relative w-full min-h-[300px] md:min-h-[100px] bg-[#1a1a1a]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={bannerImg} 
            alt="Guardian Property Law Group" 
            className="w-full h-full object-cover object-[center_top] grayscale opacity-90"
          />
        </div>

        <Navbar />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full min-h-[500px] px-6 lg:px-10 flex flex-col justify-end pb-12 lg:pb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl sm:text-6xl md:text-[3rem] font-black text-white tracking-tight drop-shadow-2xl mt-20"
          >
            Contact Guardian Property Law Group
          </motion.h1>

             <motion.svg width="220" height="6" viewBox="0 0 220 6" 
             className="mt-5 mb-6"
             initial="hidden"
             animate="visible"
           >
            <motion.line
            x1="2" y1="3" x2="218" y2="3"
            stroke={BRASS} strokeWidth="3" strokeLinecap="round"
             variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.9, delay: 0.65, ease: "easeInOut" } } }}
           />
           </motion.svg>
        </div>
      </header>
      
     {/* --- CONTACT INFO SECTION --- */}
<section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    transition={{ staggerChildren: 0.2 }}
    className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20"
  >
    
    {/* Left Column: Disclaimer */}
    <motion.div variants={contactVariants} className="lg:col-span-2">
      <h2 className="text-1xl md:text-4xl font-extrabold text-black mb-6 tracking-tight">
        Contact Guardian Property Law Group
      </h2>
      <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed text-justify sm:text-left">
        The information contained in this web site is provided solely for general interest and may not reflect current legal developments and therefore should not be relied upon or construed as legal advice. Further, the sending or receipt of this information does not create an attorney-client relationship between us. For more specific, comprehensive and up-to-date information, or for help with particular factual situations, you should seek the opinion of legal counsel. Reproduction, distribution, republication and/or retransmission of material contained within this web site is prohibited unless you have obtained our prior written permission. Your communication with us through this web site may not be considered as privileged or confidential. Guardian Property Law Group is a professional corporation.
      </p>
    </motion.div>

    {/* Right Column: Address & Details */}
    <motion.div variants={contactVariants} className="flex flex-col">
      <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-4 tracking-tight">
        Chicago Office
      </h3>
      
      <div className="text-gray-500 text-[15px] sm:text-base leading-relaxed mb-8">
        <p>161 N Clark Street 16th Floor</p>
        <p>Chicago, IL 60601</p>
        <p className="mt-1">
          Phone: 
        </p>
      </div>

      {/* Google Reviews Badge */}
      <div className="mt-auto">
        <img 
          src={goggleImg} 
          alt="Google Customer Reviews 5 Stars" 
          className="h-14 sm:h-16 object-contain"
        />
      </div>

    </motion.div>

  </motion.div>
</section>
        <ContactSection />
          <Footer />

    </div>
  )
}

export default ContactUs;