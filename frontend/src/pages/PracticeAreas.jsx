import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import bannerImg from '../assets/practice.jpg'; 
import investmentImg from '../assets/Investment.jpg'
import attorneysImg from '../assets/finra1.jpg'
import coinImg from '../assets/Coin.jpg'
import creditImg from '../assets/credit.jpg'
import AthleteImg from '../assets/Athlete.jpg'
import { Link } from 'react-router-dom';
import coinbase from '../assets/coinbase.png'
import cybercrimeimg from '../assets/cybercrime.jpg'
import simImg from '../assets/sim.jpg'
import litigationImg from '../assets/legitation.jpg'
import classImg from '../assets/class.jpg'
import elderlyImg from '../assets/elderly.png'
import fraudAttorneysBack from '../assets/Securities-Fraud-Attorneys-in-Chicago.jpg'
import tieImage from '../assets/tieImage.jpg';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';


const practiceAreasList = [
    { 
    title: "Cybercrime Attorneys", 
    image: cybercrimeimg,
    content: "Protecting consumers and investors from phishing scams, account takeovers, wire fraud, cryptocurrency scams, and other forms of cyber-enabled financial crime."

  },
  { 
    title: "Investment & Securities Fraud", 
    image: investmentImg,
    content: "Helping investors recover losses caused by broker misconduct, unsuitable investments, fiduciary breaches, Ponzi schemes, misrepresentation, and other forms of securities fraud."
  },
  { 
    title: "FINRA Attorneys", 
    image:  attorneysImg,
    content: "Experienced representation for investors pursuing claims involving broker misconduct, securities fraud, unsuitable investments, and FINRA violations."
  },
  { 
    title: "Coinbase Fraud", 
    image: coinImg,
    content: "Helping cryptocurrency investors pursue claims involving account takeovers, unauthorized transactions, data breaches, scams, and security failures."
  },
  { 
    title: "Private Credit BDC Attorneys", 
    image: creditImg,
    content: "Representing investors harmed by unsuitable BDC investments, valuation issues, disclosure failures, and private credit-related losses."
  },
  { 
    title: "Professional Athlete Representation", 
    image: AthleteImg,
    content: "Representing athletes and high-net-worth individuals in claims involving financial fraud, fiduciary breaches, theft, and advisor misconduct."
  },
  { 
    title: "Sim Swap Fraud", 
    image: simImg,
    content: "Legal advocacy for victims of telecom negligence, unauthorized account transfers, identity theft, and digital asset losses."
  },
  { 
    title: "Litigation", 
    image: litigationImg,
    content: "Representing businesses and individuals in contract disputes, business torts, intellectual property matters, real estate conflicts, and complex commercial litigation."
  },
  { 
    title: "Class Action Representation", 
    image: classImg,
    content: "Representing consumers and investors in class actions and group proceedings involving fraud, misconduct, defective products, and corporate wrongdoing."
  },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 } // Delays each card popping in
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

const PracticeAreas = () => {
  return (
    <div className="min-h-screen bg-white">
     {/* --- HERO BANNER --- */}
<header className="relative w-full h-[350px] bg-[#1a1a1a]">
  
  <div className="absolute inset-0 z-0 overflow-hidden">
    <img 
      src={bannerImg} 
      alt="Stoltmann Law Attorneys" 
      className="w-full h-full object-cover object-[center_top] grayscale opacity-40"
    />
  </div>

  <Navbar />

  {/* Change 2: Removed min-h-[500px] so it stops stretching the header */}
  <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full px-6 lg:px-10 flex flex-col justify-end pb-12 lg:pb-16">
    <motion.h1 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="text-5xl sm:text-6xl md:text-[3rem] font-black text-white tracking-tight drop-shadow-2xl mt-20"
    >
      Practice Areas
    </motion.h1>
  </div>
</header>

{/* --- Chicago-Based Investment Fraud and Consumer Fraud Attorneys --- */}
       <section className="w-full bg-white py-20 px-6 sm:px-10 text-justify lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mb-6">
          Chicago-Based Investment Fraud and Consumer Fraud Attorneys
        </h2>
        
        <div className="space-y-6 text-gray-800 text-[14px] sm:text-[14px] leading-relaxed">
          <p>The Chicago-based investment and consumer fraud attorneys at Stoltmann Law Offices are time-tested lawyers who have a combined fifty years of experience arbitrating, mediating, and litigating disputes on behalf of victims of investment, securities, and consumer fraud. Investment loss can be devastating. For many, the funds lost due to fraud or incompetence of investment advisors or brokerage firms, can have tragic repercussions on retirement savings and lifestyle. You work your entire life to build a retirement nest egg you deem sufficient to maintain your lifestyle into retirement – You have finally made it. And then an unscrupulous financial advisor sells you unsuitable investments, commits fraud, or does something that loses your retirement nest egg. If you are the victim of financial negligence or fraud, rest assured, the attorneys at Stoltmann Law Offices, P.C. have the experience, the grit, and the determination to secure the settlement, arbitration award, or jury verdict you are entitled to in order to put you back on your financial feet. We offer representation to our clients nationwide and offer contingency fee engagements which mean we do not get paid until you do. </p>
          <p>If you are the victim of investment or securities fraud or negligence, there are several types of damages you can pursue. Traditionally, compensatory damages in investment cases are referred to as “net out of pocket”. Simply put, if you lost $100,000 in a bad investment that was unsuitable for you or sold to you based on misrepresentations or omissions of material facts, you can bring a claim against the company that sold you that investment. In this example, if you invested $100,000, received $10,000 back in the form of distributions or interest, your “net loss” would be $90,000.</p>
        </div>
        </div>
        </section>

{/* --- Coinbase Fraud --- */}
{/* Added overflow-x-hidden on mobile to prevent the logo from creating horizontal scrollbars */}
<section className="relative w-full min-h-[400px] flex items-center mt-20 lg:mt-12 z-10 bg-[#111111] overflow-x-hidden md:overflow-x-visible">      
  
  {/* --- Background Container --- */}
  <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
    <motion.img 
      initial={{ scale: 1.05 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
      src={coinImg} 
      alt="Wall Street Background" 
      className="absolute inset-0 w-full h-full object-cover object-[60%_center] opacity-40 mix-blend-luminosity"
    />
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
      <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-white mb-4 sm:mb-6 tracking-tight leading-[1.1]">
        Coinbase Fraud
      </h2>
      
      <p className="text-gray-200 font-sans leading-relaxed text-[0.95rem] sm:text-[1rem] mb-8 max-w-full lg:max-w-xl text-left">
        If your Coinbase account was hacked, scammed, or accessed without permission, you may have legal rights. Stoltmann Law Offices helps crypto users recover losses and hold Coinbase accountable. Learn your options and how our experienced attorneys can help you fight back.
      </p>

      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
        
        {/* CONTACT US BUTTON */}
      <Link to="/ContactUs" className="w-[180px] block no-underline">
        <div className="w-full flex items-center justify-center bg-brand-yellow text-[#ffffff] font-extrabold py-4 px-10 rounded cursor-pointer hover:bg-[#ffffff] hover:text-brand-yellow transition duration-300 text-[14px] tracking-widest uppercase shadow-md whitespace-nowrap border border-[#e5e7eb]">
          CONTACT US
        </div>
      </Link>


      </div>
    </motion.div>
  </div>

  {/* --- LAYER 3: Coinbase Logo (Right Side - Overflowing Top) --- */}
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    viewport={{ once: true }}
    // Made the positioning responsive: pulled further right on mobile, sitting perfectly on desktop
    className="absolute top-[50%] lg:top-[35%] -translate-y-[50%] right-[-28%] sm:right-[-5%] md:right-0 lg:right-[5%] w-[220px] sm:w-[200px] md:w-[350px] lg:w-[450px] z-10 lg:z-30 opacity-10 sm:opacity-20 lg:opacity-100 pointer-events-none"
  >
    <img 
      src={coinbase} 
      alt="Coinbase Logo" 
      className="w-[350px] h-auto object-contain drop-shadow-2xl scale-110 lg:scale-125"
    />
  </motion.div>
</section>
            

      {/* --- PRACTICE AREAS GRID SECTION --- */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12"
        >
          {practiceAreasList.map((area, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // Group and specific rounded corners and shape are applied to the entire card
              className="group flex flex-col h-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-br-3xl overflow-hidden"
            >
              
              {/* =========================================
                  IMAGE SECTION WITH HOVER EFFECT
              ========================================= */}
              <div className="w-full h-[300px] lg:h-[200px] overflow-hidden bg-gray-200 shrink-0 relative">
                
                {/* Overlay with subtle colored filter on hover */}
                <div className="absolute inset-0 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                <img
                  src={area.image}
                  alt={area.title}
                  p={area.content}
                  // Responsive sizing and realistic stock photo behavior with object-cover
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 z-0"
                />
              </div>

              {/* =========================================
                  TEXT CONTENT (Yellow Section)
              ========================================= */}
             <div className="bg-white p-8 flex-1 flex flex-col relative border-b-4 border-brand-yellow">
              
              <h3 className="text-xl lg:text-1xl font-extrabold text-gray-900 tracking-tight leading-snug mb-3 group-hover:text-[#1553AB] transition-colors duration-300">
                {area.title}
              </h3>

              {/* Only render the paragraph if content exists in the array */}
              {area.content && (
                <p className="text-gray-600 text-[0.93rem] leading-relaxed text-justify mb-6">
                  {area.content}
                </p>
              )}


            </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

 {/* --- ELDERLY SECTION --- */}
   <section className="relative w-full min-h-[500px] lg:min-h-[300px] flex items-center mt-20 lg:mt-12 z-10 bg-[#1a1a1a]">
       
       <div className="absolute inset-0 z-0 overflow-hidden">
         {/* Animated Background Image - Aligned right so "WALL ST" shows */}
         <motion.img 
           initial={{ scale: 1.05 }}
           whileInView={{ scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           viewport={{ once: true }}
           src={fraudAttorneysBack} 
           alt="Wall Street" 
           className="absolute inset-0 w-full h-full object-cover object-[60%_center] opacity-90"
         />
         
         {/* Diagonal line overlay pattern */}
         <div 
           className="absolute inset-0 z-20 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 2px)' }}
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
            Financial Abuse of the Elderly
           </h2>
           
          <p className="text-white font-light leading-relaxed text-[0.95rem] md:text-[1rem] mb-8 md:mb-10 max-w-full lg:max-w-xl text-left md:text-justify hyphens-auto">
Senior investors are becoming an increasingly large percentage of those utilizing the services of financial services firms and the sad reality is, seniors, especially those who are vulnerable as a result of cognitive decline, are all too often victims of financial exploitation. The attorneys at Stoltmann Law Offices will stop at nothing to recover those financial losses. </p>
 
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
         <div className="relative h-full w-full lg:w-[700px] flex justify-end items-end">
           <img 
             src={elderlyImg} 
             alt="Attorneys Shaking Hands" 
             className="object-contain object-bottom h-full w-auto max-w-full drop-shadow-2xl"
           />
           
           <div className="absolute inset-0 bg-red-900/1 mix-blend-color pointer-events-none"></div>
         </div>
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
            <button className="w-full sm:w-auto self-start bg-brand-yellow text-white px-10 py-4 rounded-sm font-extrabold text-[14px] tracking-widest uppercase hover:bg-gray-800 hover:text-white cursor-pointer transition-colors duration-300 shadow-lg">
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

export default PracticeAreas;