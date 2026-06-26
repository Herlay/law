import React, { useState } from 'react';
import bannerImg from '../assets/paid.jpg';
import Navbar from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import attImg from '../assets/att1.png';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const CaseResults = () => {
  // Separate states for each accordion so they toggle independent
  const [isPonziOpen, setIsPonziOpen] = useState(true);
  const [isArbitrationOpen, setIsArbitrationOpen] = useState(true);

  const ponziCases = [
    {
      title: "1. Avelar, et al. v. ING, Proequities, First Heartland, Nevin Gillette, et al.:",
      description: "ING financial advisor Nevin Gillette sold “Guaranteed Investment Contracts” (GICs) to clients but in reality the advisor was converting his clients’ funds for personal use.",
      conclusion: " The firm’s liability stemmed from its failure to supervise Gillette."
    },
    {
      title: "2. Schmidt, et al. v. LPL:",
      description: "LPL financial advisor Raymond Londo solicited purported direct investments from clients but in reality Londo stole the funds and spent it on gambling and personal uses  ",
      conclusion: ". The firm's liability derived from failure to supervise claims."
    },
    {
      title: "3. May, et al v. Stifel Nicolaus and Regald Smith:",
      description: "Stifel Nicolaus financial advisor Regald Smith converted funds directly from clients in fictitious bonds and other activity ",
      conclusion: ". The firm was held responsible because of its ignoring of multiple supervisory red flags that should have alerted the firm of Smith's conduct."
    },
    {
      title: "4. Walker, et al. v. Wachovia Securities and William Sirls:",
      description: "Wachovia financial advisor William Sirls engaged in a direct investment ponzi scheme where Sirls converted $40 million for personal purposes, including gambling purposes. The firm failed to reasonably supervise Sirls who was engaging in extraordinarily aggressive trading in his personal account at Wachovia with stolen client funds.",
    },
    {
      title: "5. Pingatore, et al. v. Madison Avenue, Algird Norkus, et al.:",
      description: "Madison Avenue financial advisor Algird Norkus sold bogus promissory notes in a $10 million ponzi scheme. The firm's liability was derived from its failure to identify and stop the ponzi scheme.",
    },
    {
      title: "6. Shipman, et al. v. ING, Richard Wells, et al.:",
      description: "ING financial advisor Richard Wells sold “mutual bond trusts” but in reality was operating a ponzi scheme. The firm's liability stemmed from supervisory lapses over an extended period of time.",
    },
    {
      title: "7. Bridges, et al. v. LPL and Ameriprise and James Buchanan:",
      description: "LPL and Ameriprise financial advisor Richard Buchanan sold $3 million of bogus debentures in Clean Coal Tech Inc. The funds were converted for the advisor’s personal use. The firm failed to supervise Buchanan despite multiple red flags that should have alerted the firm to his scam.",
    }
  ];

  const sampleCases = [
    {
      text: (
        <>
          Arbitrator awarded <strong>$329,665.12</strong> plus <strong>$150,000</strong> in additional damages, <strong>$95,602</strong> in attorney's fees, and <strong>$41,947</strong> in costs against Coinbase.
        </>
      )
    },
    {
      text: (
        <>
          <strong>Claimant v. T-Mobile USA:</strong> Arbitrators awarded <strong>$955,000</strong> for T-Mobile SIM-Swap fraud.
        </>
      )
    },
    {
      text: (
        <>
          <strong>May v. Stifel Nicolaus:</strong> Arbitrators awarded <strong>$4,500,000</strong> for a fraudulent Ponzi scheme.
        </>
      )
    },
    {
      text: (
        <>
          <strong>Horace Grant v. Morgan Keegan:</strong> Arbitrators awarded <strong>$1,500,000</strong> for fraud and misrepresentation and omission involving mutual funds.
        </>
      )
    },
    {
      text: (
        <>
          <strong>Josephine Desparte v. William Blair & Co:</strong> FINRA arbitrators awarded over <strong>$1,100,000 million</strong> for an elderly, 90 year client for various breaches of fiduciary duty and unauthorized trading.
        </>
      )
    },
    {
      text: (
        <>
          <strong>King v. Morgan Keegan:</strong> We recovered approximately <strong>$700,000</strong> for client losses, attorney fees and costs for a fraud and suitability case involving mutual funds.
        </>
      )
    },
    {
      text: (
        <>
          <strong>Baldwin v. Wachovia:</strong> Panel awarded full losses (over <strong>$300,000</strong>) plus another <strong>$100,000</strong> in attorney fees for unauthorized trading leading to a massive capital gains tax bill.
        </>
      )
    },
    {
      text: (
        <>
          <strong>Landau v. Morgan Keegan:</strong> The client recovered losses, attorney fees, interest and punitive damages for the financial exploitation of the elderly.
        </>
      )
    },
    {
      text: (
        <>
          <strong>Post v. Linsco:</strong> Arbitrators assessed full losses, attorney fees, and costs for the unsuitable concentration of an investors portfolio in a high risk stock.
        </>
      )
    }
  ];

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
            className="text-5xl sm:text-6xl md:text-[3rem] font-black text-white tracking-tight drop-shadow-2xl mt-20"
          >
            Case Results
          </motion.h1>
        </div>
      </header>

      <section className="bg-white py-16 px-6 md:px-12 lg:px-15 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
          
          {/* --- LEFT COLUMN: MAIN CONTENT --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 flex flex-col gap-8" // Added gap-8 to space out the accordions
          >
            <div>
              {/* Intro Text */}
              <p className="text-gray-800 text-[15px] md:text-[15px] leading-relaxed mb-6">
                <span className="text-red-600 font-bold">Stoltmann Law Offices</span> has a depth of experience representing investors who have suffered losses as a result of stockbroker misconduct, securities frauds and <span className="text-red-600 font-bold">ponzi schemes</span>. here are some of our case results.
              </p>

              {/* Red Alert Banner */}
              <div className="bg-red-600 text-white text-center p-3 rounded-sm shadow-md mb-8">
                <p className="font-bold text-[12px] md:text-[13px] tracking-wide">
                  Arbitrator awarded $329,665.12 + $150,000 in additional damages, $95,602 in attorney's fees, & $41,947 in costs against Coinbase
                </p>
              </div>
            </div>

            {/* --- Accordion 1: Ponzi Scams --- */}
            <div className="border border-gray-200 bg-gray-100 rounded-sm overflow-hidden shadow-sm">
              <button 
                onClick={() => setIsPonziOpen(!isPonziOpen)}
                className="w-full bg-brand-yellow p-4 flex items-center cursor-pointer justify-start gap-4 transition-colors"
              >
                <div className="bg-black text-white w-6 h-6 flex items-center justify-center font-bold text-xl leading-none pb-1">
                  {isPonziOpen ? '-' : '+'}
                </div>
                <h3 className="text-white font-bold text-[15px] md:text-xl">Sample of Ponzi Scams</h3>
              </button>

              <AnimatePresence>
                {isPonziOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-white px-6 py-8"
                  >
                    <div className="space-y-6 text-justify">
                      {ponziCases.map((item, index) => (
                        <p key={index} className="text-gray-700 text-sm md:text-[15px] leading-relaxed">
                          <strong className="font-bold text-gray-900">{item.title}</strong> {item.description}
                          {item.conclusion && item.conclusion}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* --- Accordion 2: Arbitration Cases --- */}
            <div className="border border-gray-200 bg-gray-100 rounded-sm overflow-hidden shadow-sm">
              <button 
                onClick={() => setIsArbitrationOpen(!isArbitrationOpen)}
                className="w-full bg-brand-yellow p-4 flex items-center cursor-pointer justify-start gap-4 transition-colors"
              >
                <div className="bg-black text-white w-6 h-6 flex items-center justify-center font-bold text-xl leading-none pb-1 shrink-0">
                  {isArbitrationOpen ? '-' : '+'}
                </div>
                <h3 className="text-white font-bold text-[15px] md:text-xl text-left">
                  Sample Arbitration Cases
                </h3>
              </button>

              <AnimatePresence>
                {isArbitrationOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-white px-6 py-8"
                  >
                    <div className="space-y-6 text-justify">
                      {sampleCases.map((item, index) => (
                        <p key={index} className="text-gray-700 text-sm md:text-[15px] leading-relaxed">
                          {index + 1}. {item.text}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>

    {/* --- RIGHT COLUMN: SIDEBAR --- */}
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full lg:w-1/3 flex flex-col self-start" 
    >
      {/* Note: relative and pb-0 allow the image to sit flush at the bottom */}
      <div className="bg-brand-yellow rounded-2xl flex flex-col h-full overflow-hidden shadow-lg relative pt-10 px-8 pb-0">
        
        <h2 className="text-1xl md:text-2xl font-black text-white leading-tight mb-6">
          Chicago Investment Fraud Attorneys Offering Nationwide Representation to Investors
        </h2>
        
        <p className="text-white text-[15px] md:text-[15px] leading-relaxed mb-8">
          If you have suffered financial losses because of the negligence or fraud of your financial advisor or broker through unsuitable investment recommendations, over-concentration, churning, misrepresenting risks, conversion or selling away, you have legal rights and options to pursue recovery of those losses.
        </p>
        
        <motion.button 
          className="bg-[#d40505] text-white font-bold py-3 px-8 rounded-sm self-start shadow-md hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer z-10"
        >
        <Link to="/ContactUs">
            CONTACT US TODAY
            </Link>
        </motion.button>

        {/* Attorneys Image Overlay */}
        {/* CHANGED: 'justify-left' to 'justify-end' and added 'w-full' to push it right */}
        <div className="mt-8 flex justify-end items-end flex-1 w-full">
          {/* If you want the image completely flush against the right edge (ignoring the parent's px-8 padding), add mr-[-32px] to the img classes */}
          <img 
            src={attImg} 
            alt="Chicago Investment Fraud Attorneys" 
            className="w-[50%] sm:w-[60%] lg:w-[70%] mr-[-32px] object-contain object-bottom"
          />
        </div>

      </div>
    </motion.div>

        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}

export default CaseResults;