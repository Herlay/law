import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar'; 
import { Link } from 'react-router-dom';
import bannerImg from '../assets/tieImage.jpg'; 
import joeImg from '../assets/Joe.jpg';
import saraImg from '../assets/Sara.jpg'; 
import monneyImg from '../assets/money.jpg';
import buildingImg from '../assets/building.jpg';
import metricsImg from '../assets/metrics.jpg';
import tieImage from '../assets/tieImage.jpg';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import meganPic from '../assets/Megan.jpg';
import jamesPic from '../assets/James.jpg';
import davidPic from '../assets/David.jpg';


const Attorneys = () => {
  // --- DATA ---
 const attorneysList = [
  {
    name: "Joe Wojciechowski, Esq",
    image: joeImg, 
    contact: {
      phone: "312-332-4200",
      fax: "312-332-4201",
      email: "Joe@stoltlaw.com",
      address: "161 N Clark St 16th Floor Chicago, Illinois 60601",
    },
  overview: [
"Joe Wojciechowski is a licensed attorney with more than 15 years of legal experience. He previously served in key legal and leadership roles at Guardian Property Law Group, where he gained extensive experience managing complex litigation, client representation, case strategy, and the day-to-day operations of a high-performing law firm. During his tenure, he successfully represented clients in arbitration proceedings, mediation, and state and federal court matters, building a reputation for meticulous preparation, strategic advocacy, and exceptional client service.",

"Joe now serves as an attorney at Guardian Property Law Group, where he focuses on real estate and property law. His practice includes residential and commercial real estate transactions, title review, contract drafting and negotiation, landlord-tenant matters, property disputes, land use issues, and real estate litigation. He works closely with individuals, investors, developers, and businesses to provide practical legal solutions that protect their property interests and help clients navigate complex legal matters with confidence.",

"Throughout his career, Joe has remained committed to delivering responsive, results-driven legal counsel built on integrity, professionalism, and attention to detail. His background in complex litigation, negotiation, and dispute resolution allows him to effectively advocate for clients while minimizing legal risks. At Guardian Property Law Group, he continues to provide trusted legal guidance, helping clients safeguard their investments and achieve successful outcomes in every stage of their property transactions and legal disputes."
]
,
    practiceAreas: [
      "Arbitration Process",
      "Investment and Securities Fraud",
      "Consumer Law",
      "Securities Law"
    ],
    education: [
      "J.D., The John Marshall Law School, 2009",
      "B.A., Western Michigan University, 2004"
    ],
    jurisdictions: [
      "Illinois",
      "Northern District of Illinois",
      "United States Tax Court",
      "Central District of Illinois",
      "U.S. Court of Appeals for the Ninth Circuit"
    ],
    memberships: [
      "Member of the PIABA Board of Directors and Chairperson of the Federal Legislation Committee",
      "Chicago Bar Association",
      "Association of Certified Fraud Examiners"
    ]
  },
];
 const staffList = [
    {
      name: "Michelle W",
      role: "Partner",
      image: saraImg, 
    },
     {
      name: "James Barnett",
      role: "Partner",
      image: jamesPic, 
    },
    {
      name: "Megan Barry",
      role: "Partner",
      image: meganPic, 
    },
    {
      name: "David Andrew",
      role: "Partner",
      image: davidPic, 
    },
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
            alt="Guardian Property Law Group" 
            className="w-full h-full object-cover object-[center_top] grayscale opacity-40"
          />
        </div>

        <Navbar />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full min-h-[500px] px-6 lg:px-10 flex flex-col justify-end pb-12 lg:pb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-[3rem] font-black text-white tracking-tight drop-shadow-2xl mt-20"
          >
            Attorneys
          </motion.h1>
        </div>
      </header>

{/* --- ATTORNEYS DIRECTORY SECTION --- */}
<section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
  <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="flex flex-col gap-16 xl:gap-24"
  >
    {attorneysList.map((attorney, index) => (
      <motion.div
        key={index}
        variants={cardVariants}
        // Removed the heavy hover animations to match the clean, professional look of the reference
        className="w-full bg-white border border-gray-200 shadow-sm overflow-hidden flex flex-col"
      >
        
        {/* =========================================
            TOP PROFILE HEADER (Matches Reference Image)
        ========================================= */}
        <div className="w-full bg-[#f7f8f9] flex flex-col md:flex-row items-end justify-between pt-12 md:pt-16 px-8 md:px-16 lg:px-20 overflow-hidden">
          
          {/* Left Text Column */}
          <div className="w-full md:w-[60%] pb-12 md:pb-16 flex flex-col justify-end">
            
            <h3 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium text-brand-yellow tracking-tight leading-none mb-3">
              {attorney.name}
            </h3>
            
            {/* If you have a title in your data, it goes here. Otherwise, it defaults to Attorney */}
            <p className="text-[#333333] text-base md:text-lg font-bold tracking-wide">
              {attorney.title || "Attorney"}
            </p>

            {/* Contact Row (Email | Phone) */}
            <div className="flex flex-wrap items-center gap-4 mt-8 md:mt-12 text-[15px] md:text-[17px]">
              <a 
                href={`mailto:${attorney.contact.email}`} 
                className="text-[#1a365d] underline underline-offset-4 hover:text-brand-yellow transition-colors"
              >
                {attorney.contact.email}
              </a>
              <span className="text-gray-300 font-light">|</span>
              <span className="text-[#333333]">
                {/* Optional Location Prefix */}
                {attorney.contact.location ? `${attorney.contact.location}: ` : ""} 
                {attorney.contact.phone}
              </span>
            </div>

          </div>

          {/* Right Image Column */}
          {/* Pushed to the bottom right, flush with the container */}
          <div className="w-full md:w-[40%] flex justify-center md:justify-end items-end relative h-full">
            <img
              src={attorney.image}
              alt={attorney.name}
              className="w-[80%] md:w-full max-w-[400px] h-auto object-contain object-bottom"
            />
          </div>

        </div>

        {/* =========================================
            BOTTOM DETAILS SECTION (Bio & Lists)
        ========================================= */}
        <div className="w-full bg-white px-8 md:px-16 lg:px-20 py-12 md:py-16 text-gray-800 font-sans">
          
          {/* Bio / Overview */}
          <div className="space-y-5 mb-12 text-[15px] md:text-[16px] text-justify leading-relaxed max-w-5xl">
            {attorney.overview.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </div>

          {/* Lists mapped cleanly */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl">
            
            {/* Practice Areas */}
            {attorney.practiceAreas?.length > 0 && (
              <div>
                <h4 className="text-[17px] text-brand-yellow font-bold text-[#1a365d] mb-4 border-b border-gray-200 pb-2">
                  Practice Areas
                </h4>
                <ul className="list-disc list-outside ml-4 space-y-2 text-[15px] text-gray-700">
                  {attorney.practiceAreas.map((item, i) => (
                    <li key={i} className="pl-1">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Education */}
            {attorney.education?.length > 0 && (
              <div>
                <h4 className="text-[17px] font-bold text-brand-yellow mb-4 border-b border-gray-200 pb-2">
                  Education
                </h4>
                <ul className="list-disc list-outside ml-4 space-y-2 text-[15px] text-gray-700">
                  {attorney.education.map((item, i) => (
                    <li key={i} className="pl-1">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Jurisdictions */}
            {attorney.jurisdictions?.length > 0 && (
              <div>
                <h4 className="text-[17px] font-bold text-brand-yellow mb-4 border-b border-gray-200 pb-2">
                  Jurisdictions Admitted to Practice
                </h4>
                <ul className="list-disc list-outside ml-4 space-y-2 text-[15px] text-gray-700">
                  {attorney.jurisdictions.map((item, i) => (
                    <li key={i} className="pl-1">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Professional Memberships */}
            {attorney.memberships?.length > 0 && (
              <div>
                <h4 className="text-[17px] font-bold text-brand-yellow mb-4 border-b border-gray-200 pb-2">
                  Professional Memberships
                </h4>
                <ul className="list-disc list-outside ml-4 space-y-2 text-[15px] text-gray-700">
                  {attorney.memberships.map((item, i) => (
                    <li key={i} className="pl-1">{item}</li>
                  ))}
                </ul>
              </div>
            )}

          </div>

        </div>

      </motion.div>
    ))}
  </motion.div>
</section>

{/* ---2nd ATTORNEYS DIRECTORY SECTION --- */}
      <section className="w-full bg-[#f8f9fa] py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          {/* Yellow Top Border Line */}
          <div className="w-24 h-1 bg-brand-yellow mb-5" />
          
          <h2 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-wide">
            Staff
          </h2>
        </div>

        {/* Staff Grid Container */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-16 lg:gap-20">
          {staffList.map((staff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Group class allows the image overlay to trigger when hovering anywhere on the card
              className="group flex flex-col items-center text-center w-48 md:w-56"
            >
              
              {/* Circular Image Container */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.12)] overflow-hidden mb-6">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 transition-all duration-300"
                />
                
                {/* Reddish Hover Overlay Effect */}
                <div className="absolute inset-0 bg-red-300/30 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full pointer-events-none" />
              </div>

              {/* Staff Name */}
              <h3 className="text-xl md:text-2xl font-medium text-gray-900 uppercase tracking-wider">
                {staff.name}
              </h3>

              {/* Staff Role */}
              <p className="mt-1.5 text-brand-yellow font-bold italic text-base md:text-lg">
                {staff.role}
              </p>
              
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
    
      
      {/* --- HIGHLIGHT & PROMO SECTION --- */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 items-stretch">
          
                  {/* Wide Promotional Banner */}
          <motion.div 
            variants={bannerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 relative flex flex-col justify-center rounded-br-[4rem] overflow-hidden shadow-xl min-h-[400px]"
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
                If you have suffered <span className="text-red-500 font-bold">financial losses</span> because of the negligence or fraud of your financial advisor or broker through unsuitable investment recommendations, over-concentration, churning, misrepresenting risks, conversion or selling away, you have legal rights and options to pursue recovery of those losses.
              </p>

               <Link to="/ContactUs"><button className="self-start bg-brand-yellow cursor-pointer text-white px-8 py-3.5 rounded-sm font-extrabold text-[13px] tracking-widest uppercase hover:bg-white hover:text-brand-yellow border-[1px] transition-colors duration-300 shadow-lg">
                CONTACT US TODAY
              </button>
              </Link>
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
            <div className="absolute inset-0 z-0 opacity-75 mix-blend-multiply">
              <img src={metricsImg} alt="Charts" className="w-full h-full object-cover object-bottom" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full items-start">
              <h3 className="text-2xl sm:text-[28px] md:text-3xl font-extrabold text-white mb-5 tracking-tight">
                Firms Litigated Against
              </h3>
              <p className="text-white text-[16px] leading-relaxed mb-10 max-w-[90%] font-medium">
                Check out a list of all the firms we have litigated against.
              </p>
              <Link to="/ContactUs"><button className="mt-auto bg-[#CC0000] text-white px-8 py-3.5 rounded font-extrabold text-[13px] tracking-widest uppercase hover:bg-black cursor-pointer transition-colors duration-300 shadow-lg w-60 sm:w-auto">
                LEARN MORE
              </button>
              </Link>
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
              <Link to="/ContactUs"><button className="mt-auto bg-[#CC0000] text-white px-8 py-3.5 rounded font-extrabold text-[13px] tracking-widest uppercase hover:bg-black cursor-pointer transition-colors duration-300 shadow-lg w-60 sm:w-auto">
                LEARN MORE
              </button>
              </Link>
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
               <Link to="/ContactUs"><button className="mt-auto bg-[#CC0000] text-white px-8 py-3.5 rounded font-extrabold text-[13px] tracking-widest uppercase hover:bg-brand-yellow hover:text-black cursor-pointer transition-colors duration-300 shadow-lg w-60 sm:w-auto">
                LEARN MORE
              </button>
              </Link>
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
              alt="Guardian Property Law Group"
              className="w-full h-full object-cover object-[center_top] grayscale opacity-40"
            />
            {/* White gradients to blend the image softly */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/90 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-white/80 via-white/60 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-6 sm:p-10 lg:p-16 flex flex-col justify-center h-full max-w-9xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold  text-black mb-6 sm:mb-8 leading-tight tracking-tight">
              Guardian Property Law Group prides itself on aggressively prosecuting investment fraud across the country
            </h2>
            
            <p className="text-gray-800 text-base leading-relaxed mb-8 font-light text-left md:text-justify">
              Our team of lawyers has decades of experience fighting for investor rights in every forum. We use a hands-on approach with our clients and pride ourselves on being extremely diligent communicators. We understand most of our clients have been victimized once by someone they trusted, so we strive to create and maintain a relationship worthy of our clients’ trust and confidence. If you have any issues with your investments, retirement accounts, IRAs, brokerage accounts, financial advisors, or, if you have a business dispute or need more general guidance with litigation, please contact our firm today. We offer services nationwide, including in Chicago, Los Angeles, New York, Seattle, Atlanta, Dallas, Houston, Las Vegas, Pittsburgh, San Antonio, Phoenix, Minneapolis, St. Louis, Indianapolis, San Francisco, Denver, New Orleans, and Boston.    
            </p>

            {/* Button */}
            <Link to="/ContactUs"><button className="w-full sm:w-auto self-start bg-brand-yellow text-white px-10 py-4 rounded-sm font-extrabold text-[14px] tracking-widest uppercase hover:bg-white hover:text-brand-yellow border-[1px] cursor-pointer transition-colors duration-300 shadow-lg">
              CONTACT US TODAY
            </button>
            </Link>
          </div>
        </motion.div>
      </section>
   
      <ContactSection />
      <Footer />

    </div>
  );
};

export default Attorneys;