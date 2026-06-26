import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // const [isPracticeMobileOpen, setIsPracticeMobileOpen] = useState(false);
  // const [isFinraMobileOpen, setIsFinraMobileOpen] = useState(false);
  // const [isIulMobileOpen, setIsIulMobileOpen] = useState(false);
  // const [isResourcesMobileOpen, setIsResourcesMobileOpen] = useState(false);

  // const practiceAreasLeft = [
   
  // ];

  // const practiceAreasRight = [
    
  // ];

  // const finra = [
  //   "FINRA Attorneys",
  //   "FINRA Arbitration",
  // ];

  // const IUL = [
  //   "Indexed Universal Life Insurance Lawsuits",
  //   "Ameritas IUL Fraud Lawsuits",
  //   "Pacific Life IUL Lawsuits",
  //   "Transamerica IUL Lawsuits",
  // ];

  // const Resources = [
  //   "Blog",
  //   "In The Media",
  //   "Video FAQs",
  //   "Investment Firms We Have Litigated Against",
  //   "Stoltmann Arbitration Awards",
  //   "Current Investigations",
  //   "How We Are Paid"
  // ];

  // const allPracticeAreas = [...practiceAreasLeft, ...practiceAreasRight];

  return (
    <motion.nav 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 w-full z-50 flex items-center justify-between bg-transparent text-white"
    >
      
      {/* Logo Area */}
      <div className="flex items-center z-[60] py-4 pl-2 lg:pl-6">
       <Link to="/"><img src={logo} alt="Stoltmann Law Offices" className="h-12 md:h-15 w-[150px]" /></Link>
      </div>

      {/* --- MOBILE HAMBURGER BUTTON --- */}
      <button 
        className="lg:hidden text-white z-[60] p-2 mr-6 focus:outline-none"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* --- DESKTOP LINKS --- */}
      <div className="hidden lg:flex items-center space-x-8 pr-6 lg:pr-10 text-[11.5px] font-bold tracking-widest uppercase drop-shadow-md z-50">
        
        {/* --- MEGA MENU: PRACTICE AREAS --- */}
  <div className="group relative py-8">
          <Link to="/" className="hover:text-brand-yellow transition flex items-center gap-1.5 cursor-pointer">
            HOME
          </Link>
          </div>

        <div className="group relative py-8">
          <Link to="/Practice" className="hover:text-brand-yellow transition flex items-center gap-1.5 cursor-pointer">
            PRACTICE AREAS
          </Link>
          {/* <div className="absolute top-[80%] left-0 w-[850px] bg-white rounded-br-[4rem] shadow-2xl opacity-0 invisible translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 flex overflow-hidden z-50 py-6">
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
          </div> */}
        </div>

        {/* --- DROPDOWN: FINRA --- */}
        <div className="group relative py-8">
          <Link to="/Finra" className="hover:text-brand-yellow transition flex items-center gap-1.5 cursor-pointer">
            FINRA </Link>
          {/* Changed pt-4 back to py-4 so the dropdown has balanced padding top and bottom */}
          {/* <div className="absolute top-[80%] left-0 w-[300px] bg-white rounded-br-[2rem] shadow-2xl opacity-0 invisible translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden z-50 py-4">
            {finra.map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className="block normal-case text-[16px] text-gray-800 hover:text-brand-yellow hover:bg-black px-6 py-3 transition-colors duration-200 font-medium tracking-normal"
              >
                {item}
              </a>
            ))}
          </div> */}
        </div>

        {/* --- DROPDOWN: IUL LAWSUITS --- */}
        <div className="group relative py-8">
          <Link to="/Lawsuits" className="hover:text-brand-yellow transition flex items-center gap-1.5 cursor-pointer">
            IUL LAWSUITS
          </Link>
        </div>

       {/* --- NORMAL LINK: ATTORNEYS --- */}
        <Link to="/Attorneys" className="hover:text-brand-yellow transition">
          ATTORNEYS
        </Link>

        {/* --- DROPDOWN: RESOURCES ---
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
        </div> */}

        {/* --- NORMAL LINK: CASE RESULTS --- */}
         <Link to="/Case" className="hover:text-brand-yellow transition">
          CASE RESULTS
        </Link>
        
        <Link to="/Arbitration" className="hover:text-brand-yellow transition">Arbitration Process</Link>

        {/* --- BUTTON --- */}
         <Link to="/ContactUs" className="hover:text-brand-yellow transition">
        <button className="bg-brand-yellow text-white px-6 py-2.5 rounded font-bold hover:bg-white cursor-pointer hover:text-brand-yellow transition ml-2 shadow-lg hover:-translate-y-0.5 duration-300">
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
              
{/* Mobile Accordion:Home */}
              <div className="w-full border-b border-gray-800 pb-4">
                <button onClick={() => setIsPracticeMobileOpen(!isPracticeMobileOpen)} className="flex items-center justify-between w-full hover:text-brand-yellow transition-colors outline-none">
                  <Link to="/" className="hover:text-brand-yellow transition">
                  <span>HOME</span>
                  </Link>
                </button>
              </div>

              {/* Mobile Accordion: Practice Areas */}
              <div className="w-full border-b border-gray-800 pb-4">
                <button onClick={() => setIsPracticeMobileOpen(!isPracticeMobileOpen)} className="flex items-center justify-between w-full hover:text-brand-yellow transition-colors outline-none">
                  <Link to="/Practice" className="hover:text-brand-yellow transition">
                  <span>PRACTICE AREAS</span>
                  </Link>
                </button>
              </div>

              {/* Mobile Accordion: FINRA */}
              <div className="w-full border-b border-gray-800 pb-4">
                <button onClick={() => setIsFinraMobileOpen(!isFinraMobileOpen)} className="flex items-center justify-between cursor-pointer w-full hover:text-brand-yellow transition-colors outline-none">
                   <Link to="/Finra" className="hover:text-brand-yellow transition">
                  <span>FINRA</span>
                   </Link>
                </button>
              </div>

              {/* Mobile Accordion: IUL LAWSUITS */}
              <div className="w-full border-b border-gray-800 pb-4">
                <button onClick={() => setIsIulMobileOpen(!isIulMobileOpen)} className="flex items-center cursor-pointer justify-between w-full hover:text-brand-yellow transition-colors outline-none">
                 <Link to="/Lawsuits" className="hover:text-brand-yellow transition">
                  <span>IUL LAWSUITS</span>
                 </Link>
                </button>
              
              </div>

<div className="w-full border-b border-gray-800 pb-4">
                <button onClick={() => setIsIulMobileOpen(!isIulMobileOpen)} className="flex items-center cursor-pointer justify-between w-full hover:text-brand-yellow transition-colors outline-none">
            <Link to="/Attorneys" className="hover:text-brand-yellow transition">
          ATTORNEYS
        </Link>
          </button>
          </div>

              {/* Mobile Accordion: RESOURCES
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
              </div> */}

              {/* Normal Link */}
               <Link to="/Case" className="hover:text-brand-yellow transition">
          CASE RESULTS
        </Link>
              
              <Link to="/ContactUs">
              <button className="bg-brand-yellow px-6 py-4 rounded cursor-pointer font-bold hover:bg-white hover:text-brand-yellow transition mt-8 shadow-lg w-full text-center tracking-widest text-sm">
                GET IN TOUCH
              </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;