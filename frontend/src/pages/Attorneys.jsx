import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar'; 
import bannerImg from '../assets/allLawyers.jpg'; 
import andrewImg from '../assets/andrew.jpg';
import joeImg from '../assets/joe.jpg';
import saraImg from '../assets/sara.jpg';
import mikeImg from '../assets/mike.jpg'; 
import monneyImg from '../assets/money.jpg';
import buildingImg from '../assets/building.jpg';
import metricsImg from '../assets/metrics.jpg';
import tieImage from '../assets/tieImage.jpg';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Attorneys = () => {
  // --- DATA ---
  const attorneysList = [
    {
      name: "Andrew Stoltmann, Esq.",
      image: andrewImg,
      vcard: "#",
      phone: "",
      fax: ""
    },
    {
      name: "Joe Wojciechowski, Esq.",
      image: joeImg,
      vcard: "#",
      phone: "",
      fax: ""
    },
    {
      name: "Sara Hanley, Esq",
      image: saraImg,
      vcard: "#",
      phone: "",
      fax: ""
    }
  ];

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const bannerVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* --- HERO BANNER --- */}
      <header className="relative w-full min-h-[400px] md:min-h-[500px] bg-[#1a1a1a]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src={bannerImg} 
            alt="Stoltmann Law Attorneys" 
            className="w-full h-full object-cover object-[center_top] grayscale opacity-90"
          />
        </div>

        <Navbar />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full min-h-[500px] px-6 lg:px-10 flex flex-col justify-end pb-12 lg:pb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-[5.5rem] font-black text-white tracking-tight drop-shadow-2xl mt-20"
          >
            Attorneys
          </motion.h1>
        </div>
      </header>

      {/* --- ATTORNEYS GRID SECTION --- */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12"
        >
          {attorneysList.map((attorney, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="group flex flex-col h-full bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-br-[3rem] overflow-hidden"
            >
              <div className="w-full h-[300px] lg:h-[350px] overflow-hidden bg-gray-200 shrink-0">
                <img 
                  src={attorney.image} 
                  alt={attorney.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="bg-brand-yellow p-8 flex-1 flex flex-col justify-center relative">
                <h3 className="text-xl md:text-[22px] font-extrabold text-gray-900 tracking-tight m-0">
                  {attorney.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- HIGHLIGHT & PROMO SECTION --- */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 items-stretch">
          
          {/* Mike Mungovan Card */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="group flex flex-col h-full bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 rounded-br-[3rem] overflow-hidden"
          >
            <div className="w-full h-[300px] lg:h-[350px] overflow-hidden bg-gray-200 shrink-0">
              <img 
                src={mikeImg} 
                alt="Mike Mungovan"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="bg-brand-yellow p-8 flex-1 flex flex-col justify-center relative">
              <h3 className="text-xl md:text-[22px] font-extrabold text-gray-900 tracking-tight m-0">
                Mike Mungovan
              </h3>
            </div>
          </motion.div>

          {/* Wide Promotional Banner */}
          <motion.div 
            variants={bannerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 relative flex flex-col justify-center rounded-br-[4rem] overflow-hidden shadow-xl min-h-[400px]"
          >
            <div className="absolute inset-0 z-0 bg-[#121212]">
              <img 
                src={bannerImg} 
                alt="Chicago Investment Fraud Attorneys"
                className="w-full h-full object-cover object-center opacity-40 grayscale"
              />
            </div>
            
            <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col justify-center h-full max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Chicago Investment Fraud Attorneys Offering Nationwide Representation To Investors
              </h2>
              
              <p className="text-white text-base md:text-[18px] leading-relaxed mb-8">
                If you have suffered <span className="text-brand-yellow font-medium">financial losses</span> because of the negligence or fraud of your financial advisor or broker through unsuitable investment recommendations, over-concentration, churning, misrepresenting risks, conversion or selling away, you have legal rights and options to pursue recovery of those losses.
              </p>

              <button className="self-start bg-brand-yellow cursor-pointer text-black px-8 py-3.5 rounded-sm font-extrabold text-[13px] tracking-widest uppercase hover:bg-yellow-400 transition-colors duration-300 shadow-lg">
                CONTACT US TODAY
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- EDGE-TO-EDGE FEATURE CARDS SECTION --- */}
      <section className="w-full mt-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-0 w-full"
        >
          
          {/* Card 1: Firms Litigated Against */}
          <motion.div 
            variants={cardVariants}
            className="group relative flex flex-col p-10 sm:p-12 xl:p-16 bg-brand-yellow overflow-hidden h-full min-h-[400px]"
          >
            <div className="absolute inset-0 z-0 opacity-25 mix-blend-multiply">
              <img src={metricsImg} alt="Charts" className="w-full h-full object-cover object-bottom" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full items-start">
              <h3 className="text-2xl sm:text-[28px] md:text-3xl font-extrabold text-gray-900 mb-5 tracking-tight">
                Firms Litigated Against
              </h3>
              <p className="text-gray-900 text-[16px] leading-relaxed mb-10 max-w-[90%] font-medium">
                Check out a list of all the firms we have litigated against.
              </p>
              <button className="mt-auto bg-[#CC0000] text-white px-8 py-3.5 rounded font-extrabold text-[13px] tracking-widest uppercase hover:bg-black cursor-pointer transition-colors duration-300 shadow-lg w-60 sm:w-auto">
                LEARN MORE
              </button>
            </div>
          </motion.div>

          {/* Card 2: How We Are Paid */}
          <motion.div 
            variants={cardVariants}
            className="group relative flex flex-col p-10 sm:p-12 xl:p-16 bg-[#f9f9f9] overflow-hidden h-full min-h-[400px]"
          >
            <div className="absolute inset-0 z-0 opacity-70 grayscale">
              <img src={monneyImg} alt="Money" className="w-full h-full object-cover object-[center_bottom]" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#f9f9f9] via-[#f9f9f9]/90 to-transparent z-0"></div>
            
            <div className="relative z-10 flex flex-col h-full items-start">
              <h3 className="text-2xl sm:text-[28px] md:text-3xl font-extrabold text-gray-900 mb-5 tracking-tight">
                How We Are Paid
              </h3>
              <p className="text-gray-700 text-[16px] leading-relaxed mb-10 max-w-[95%]">
                "How will I pay my lawyer" is a common question clients ask. Law firms can work on many different fee arrangements with clients.
              </p>
              <button className="mt-auto bg-[#CC0000] text-white px-8 py-3.5 rounded font-extrabold text-[13px] tracking-widest uppercase hover:bg-black cursor-pointer transition-colors duration-300 shadow-lg w-60 sm:w-auto">
                LEARN MORE
              </button>
            </div>
          </motion.div>

          {/* Card 3: Arbitration Awards */}
          <motion.div 
            variants={cardVariants}
            className="group relative flex flex-col p-10 sm:p-12 xl:p-16 bg-[#0a0a0a] overflow-hidden h-full min-h-[400px]"
          >
            <div className="absolute inset-0 z-0 opacity-30 grayscale">
              <img src={buildingImg} alt="Courthouse" className="w-full h-full object-cover object-right" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-0"></div>
            
            <div className="relative z-10 flex flex-col h-full items-start">
              <h3 className="text-2xl sm:text-[28px] md:text-3xl font-extrabold text-white mb-5 tracking-tight">
                Arbitration Awards
              </h3>
              <p className="text-gray-300 text-[16px] leading-relaxed mb-10 max-w-[95%]">
                Check out arbitration awards. These represent only a small fraction of the Awards received by our law firm.
              </p>
              <button className="mt-auto bg-[#CC0000] text-white px-8 py-3.5 rounded font-extrabold text-[13px] tracking-widest uppercase hover:bg-brand-yellow hover:text-black cursor-pointer transition-colors duration-300 shadow-lg w-60 sm:w-auto">
                LEARN MORE
              </button>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* --- MISSION / ABOUT FIRM SECTION --- */}
      <section className="relative w-full">
        <motion.div 
          variants={bannerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative flex flex-col justify-center overflow-hidden min-h-[400px] py-16 lg:py-24"
        >
          {/* Background Image and Overlays */}
          <div className="absolute inset-0 z-0">
            <img 
              src={tieImage} 
              alt="Stoltmann Law Offices"
              className="w-full h-full object-cover object-[center_top] grayscale opacity-40"
            />
            {/* White gradients to blend the image softly */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/90 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-white/80 via-white/60 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-6 sm:p-10 lg:p-16 flex flex-col justify-center h-full max-w-9xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold  text-black mb-6 sm:mb-8 leading-tight tracking-tight">
              Stoltmann Law Offices, P.C. prides itself on aggressively prosecuting investment fraud across the country
            </h2>
            
            <p className="text-gray-800 text-base leading-relaxed mb-8 font-light text-left md:text-justify">
              Our team of lawyers has decades of experience fighting for investor rights in every forum. We use a hands-on approach with our clients and pride ourselves on being extremely diligent communicators. We understand most of our clients have been victimized once by someone they trusted, so we strive to create and maintain a relationship worthy of our clients’ trust and confidence. If you have any issues with your investments, retirement accounts, IRAs, brokerage accounts, financial advisors, or, if you have a business dispute or need more general guidance with litigation, please contact our firm today. We offer services nationwide, including in Chicago, Los Angeles, New York, Seattle, Atlanta, Dallas, Houston, Las Vegas, Pittsburgh, San Antonio, Phoenix, Minneapolis, St. Louis, Indianapolis, San Francisco, Denver, New Orleans, and Boston.    
            </p>

            {/* Button */}
            <button className="w-full sm:w-auto self-start bg-brand-yellow text-gray-900 px-10 py-4 rounded-sm font-extrabold text-[14px] tracking-widest uppercase hover:bg-gray-800 hover:text-white cursor-pointer transition-colors duration-300 shadow-lg">
              CONTACT US TODAY
            </button>
          </div>
        </motion.div>
      </section>
   
      <ContactSection />
      <Footer />

    </div>
  );
};

export default Attorneys;