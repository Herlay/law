import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isPracticeMobileOpen, setIsPracticeMobileOpen] = useState(false);
  const [isFinraMobileOpen, setIsFinraMobileOpen] = useState(false);
  const [isIulMobileOpen, setIsIulMobileOpen] = useState(false);
  const [isResourcesMobileOpen, setIsResourcesMobileOpen] = useState(false);

  const practiceAreasLeft = [
    "Investment & Securities Fraud",
    "FINRA Attorneys",
    "Private Credit BDC Attorneys",
    "Coinbase Fraud",
    <Link to="/Arbitration" className="hover:text-brand-yellow transition">Arbitration Process</Link>,
    "Professional Athlete Representation"
  ];

  const practiceAreasRight = [
    "Class Action Representation",
    "Litigation",
    "Financial Abuse Of Elderly",
    "Cybercrime Attorneys",
    "Sim Swap Fraud"
  ];

  const finra = [
    "FINRA Attorneys",
    "FINRA Arbitration",
  ];

  const IUL = [
    "Indexed Universal Life Insurance Lawsuits",
    "Ameritas IUL Fraud Lawsuits",
    "Pacific Life IUL Lawsuits",
    "Transamerica IUL Lawsuits",
  ];

  const Resources = [
    "Blog",
    "In The Media",
    "Video FAQs",
    "Investment Firms We Have Litigated Against",
    "Stoltmann Arbitration Awards",
    "Current Investigations",
    "How We Are Paid"
  ];

  const allPracticeAreas = [...practiceAreasLeft, ...practiceAreasRight];

  return (
    <motion.nav 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 w-full z-50 flex items-center justify-between bg-transparent text-white"
    >
      
      {/* Logo Area */}
      <div className="flex items-center z-[60] py-4 pl-2 lg:pl-6">
       <Link to="/"><img src={logo} alt="Stoltmann Law Offices" className="h-12 md:h-22 w-auto" /></Link>
      </div>

      {/* --- MOBILE HAMBURGER BUTTON --- */}
      <button 
        className="lg:hidden text-brand-yellow z-[60] p-2 mr-6 focus:outline-none"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* --- DESKTOP LINKS --- */}
      <div className="hidden lg:flex items-center space-x-8 pr-6 lg:pr-10 text-[13px] font-bold tracking-widest uppercase drop-shadow-md z-50">
        
        {/* --- MEGA MENU: PRACTICE AREAS --- */}
        <div className="group relative py-8">
          <a href="#" className="hover:text-brand-yellow transition flex items-center gap-1.5 cursor-pointer">
            PRACTICE AREAS <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
          </a>
          <div className="absolute top-[80%] left-0 w-[850px] bg-white rounded-br-[4rem] shadow-2xl opacity-0 invisible translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 flex overflow-hidden z-50 py-6">
            <div className="flex-1 flex flex-col">
              {practiceAreasLeft.map((item, index) => (
                <a key={index} href="#" className="block normal-case text-[16px] text-gray-800 hover:text-brand-yellow hover:bg-black px-10 py-3 transition-colors duration-200 font-medium tracking-normal">
                  {item}
                </a>
              ))}
            </div>
            <div className="flex-1 flex flex-col border-l border-gray-200">
              {practiceAreasRight.map((item, index) => (
                <a key={index} href="#" className="block normal-case text-[16px] text-gray-800 hover:text-brand-yellow hover:bg-black px-10 py-3 transition-colors duration-200 font-medium tracking-normal">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- DROPDOWN: FINRA --- */}
        <div className="group relative py-8">
          <a href="#" className="hover:text-brand-yellow transition flex items-center gap-1.5 cursor-pointer">
            FINRA <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
          </a>
          {/* Changed pt-4 back to py-4 so the dropdown has balanced padding top and bottom */}
          <div className="absolute top-[80%] left-0 w-[300px] bg-white rounded-br-[2rem] shadow-2xl opacity-0 invisible translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden z-50 py-4">
            {finra.map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className="block normal-case text-[16px] text-gray-800 hover:text-brand-yellow hover:bg-black px-6 py-3 transition-colors duration-200 font-medium tracking-normal"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* --- DROPDOWN: IUL LAWSUITS --- */}
        <div className="group relative py-8">
          <a href="#" className="hover:text-brand-yellow transition flex items-center gap-1.5 cursor-pointer">
            IUL LAWSUITS <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
          </a>
          <div className="absolute top-[80%] left-0 w-[380px] bg-white rounded-br-[2rem] shadow-2xl opacity-0 invisible translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden z-50 py-4">
            {IUL.map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className="block normal-case text-[16px] text-gray-800 hover:text-brand-yellow hover:bg-black px-6 py-3 transition-colors duration-200 font-medium tracking-normal"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

       {/* --- NORMAL LINK: ATTORNEYS --- */}
        <Link to="/Attorneys" className="hover:text-brand-yellow transition">
          ATTORNEYS
        </Link>

        {/* --- DROPDOWN: RESOURCES --- */}
        <div className="group relative py-8">
          <a href="#" className="hover:text-brand-yellow transition flex items-center gap-1.5 cursor-pointer">
            RESOURCES <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
          </a>
          <div className="absolute top-[80%] right-0 w-[380px] bg-white rounded-br-[2rem] shadow-2xl opacity-0 invisible translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden z-50 py-4">
            {Resources.map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className="block normal-case text-[16px] text-gray-800 hover:text-brand-yellow hover:bg-black px-6 py-3 transition-colors duration-200 font-medium tracking-normal"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* --- NORMAL LINK: CASE RESULTS --- */}
         <Link to="/Case" className="hover:text-brand-yellow transition">
          CASE RESULTS
        </Link>
        
        {/* --- BUTTON --- */}
         <Link to="/ContactUs" className="hover:text-brand-yellow transition">
        <button className="bg-brand-yellow text-gray-600 px-6 py-2.5 rounded font-bold hover:bg-gray-400 cursor-pointer hover:text-white transition ml-2 shadow-lg hover:-translate-y-0.5 duration-300">
          GET IN TOUCH
        </button>
        </Link>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#121212] text-white z-50 flex flex-col pt-28 px-6 pb-10 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col space-y-6 text-sm font-bold tracking-widest uppercase text-white w-full">
              
              {/* Mobile Accordion: Practice Areas */}
              <div className="w-full border-b border-gray-800 pb-4">
                <button onClick={() => setIsPracticeMobileOpen(!isPracticeMobileOpen)} className="flex items-center justify-between w-full hover:text-brand-yellow transition-colors outline-none">
                  <span>PRACTICE AREAS</span>
                  <motion.div animate={{ rotate: isPracticeMobileOpen ? 180 : 0 }}>
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isPracticeMobileOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden flex flex-col space-y-4 pt-5 pl-4">
                      {allPracticeAreas.map((item, index) => (
                        <a key={index} href="#" className="normal-case tracking-normal text-[15px] font-medium text-white-400 hover:text-brand-yellow transition-colors">
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Accordion: FINRA */}
              <div className="w-full border-b border-gray-800 pb-4">
                <button onClick={() => setIsFinraMobileOpen(!isFinraMobileOpen)} className="flex items-center justify-between w-full hover:text-brand-yellow transition-colors outline-none">
                  <span>FINRA</span>
                  <motion.div animate={{ rotate: isFinraMobileOpen ? 180 : 0 }}>
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isFinraMobileOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden flex flex-col space-y-4 pt-5 pl-4">
                      {finra.map((item, index) => (
                        <a key={index} href="#" className="normal-case tracking-normal text-[15px] font-medium text-white-400 hover:text-brand-yellow transition-colors">
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Accordion: IUL LAWSUITS */}
              <div className="w-full border-b border-gray-800 pb-4">
                <button onClick={() => setIsIulMobileOpen(!isIulMobileOpen)} className="flex items-center justify-between w-full hover:text-brand-yellow transition-colors outline-none">
                  <span>IUL LAWSUITS</span>
                  <motion.div animate={{ rotate: isIulMobileOpen ? 180 : 0 }}>
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isIulMobileOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden flex flex-col space-y-4 pt-5 pl-4">
                      {IUL.map((item, index) => (
                        <a key={index} href="#" className="normal-case tracking-normal text-[15px] font-medium text-white-400 hover:text-brand-yellow transition-colors">
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            <Link href="/Attorneys" className="hover:text-brand-yellow transition">
          ATTORNEYS
        </Link>

              {/* Mobile Accordion: RESOURCES */}
              <div className="w-full border-b border-gray-800 pb-4">
                <button onClick={() => setIsResourcesMobileOpen(!isResourcesMobileOpen)} className="flex items-center justify-between w-full hover:text-brand-yellow transition-colors outline-none">
                  <span>RESOURCES</span>
                  <motion.div animate={{ rotate: isResourcesMobileOpen ? 180 : 0 }}>
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isResourcesMobileOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden flex flex-col space-y-4 pt-5 pl-4">
                      {Resources.map((item, index) => (
                        <a key={index} href="#" className="normal-case tracking-normal text-[15px] font-medium text-white-400 hover:text-brand-yellow transition-colors">
                          {item}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Normal Link */}
               <Link to="/Case" className="hover:text-brand-yellow transition">
          CASE RESULTS
        </Link>
              
              <button className="bg-brand-yellow text-gray-900 px-6 py-4 rounded font-bold hover:bg-yellow-400 transition mt-8 shadow-lg w-full text-center tracking-widest text-sm">
                GET IN TOUCH
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;