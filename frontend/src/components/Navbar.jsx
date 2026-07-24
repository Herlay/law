import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const NAV_LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'PRACTICE AREAS', path: '/Practice' },
  { name: 'FINRA', path: '/Finra' },
  { name: 'IUL LAWSUITS', path: '/Lawsuits' },
  { name: 'ATTORNEYS', path: '/Attorneys' },
  { name: 'CASE RESULTS', path: '/Case' },
  { name: 'ARBITRATION PROCESS', path: '/Arbitration' },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  // Scroll listener for sticky glassmorphism effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu OR transition overlay is open
  useEffect(() => {
    document.body.style.overflow = (isMobileOpen || isNavigating) ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; }; 
  }, [isMobileOpen, isNavigating]);

  // Unified Navigation Handler for BOTH Desktop and Mobile
  const handleNavClick = (e, path) => {
    e.preventDefault(); 
    
    // If clicking the current page, just close the menu (if on mobile) and do nothing
    if (path === window.location.pathname) {
      setIsMobileOpen(false);
      return;
    }

    setIsMobileOpen(false); // Hide mobile menu instantly 
    setIsNavigating(true);  // Trigger full-screen animation overlay
    
    // Wait for the premium animation to play out before routing (1.2 seconds)
    setTimeout(() => {
      navigate(path);
      setIsNavigating(false);
    }, 1200); 
  };

  return (
    <>
      {/* --- GLOBAL CINEMATIC TRANSITION OVERLAY --- */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 w-screen h-screen bg-[#0a0a0a]/95 z-[999] flex items-center justify-center overflow-hidden"
          >
            {/* Cinematic Pulsing Aura behind the logo */}
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: [1, 1.5, 1.8], 
                opacity: [0, 0.3, 0] 
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity, 
                ease: "easeOut" 
              }}
              className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-brand-yellow/30 blur-[60px]"
            />
            
            {/* Premium Smooth Logo Reveal */}
            <motion.img 
              src={logo} 
              alt="Loading Transition"
              className="relative z-10 w-64 md:w-80 lg:w-96 h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -20, filter: "blur(10px)" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] // Apple-style custom cubic-bezier for silky smooth deceleration
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HEADER --- */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#121212]/95 backdrop-blur-md shadow-lg py-2' 
            : 'bg-transparent py-4 lg:py-6'
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* --- LOGO --- */}
          <Link 
            to="/" 
            className="relative z-[110] flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded"
            aria-label="Home"
            onClick={(e) => handleNavClick(e, '/')}
          >
            <img 
              src={logo} 
              alt="Law Firm Logo" 
              className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-all duration-300" 
            />
          </Link>

          {/* --- MOBILE HAMBURGER BUTTON --- */}
          <button
            className="lg:hidden relative z-[110] p-3 -mr-3 text-white hover:text-brand-yellow transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-lg"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-label="Toggle navigation menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileOpen ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11.5px] font-bold tracking-widest uppercase text-white relative z-[110]">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={({ isActive }) =>
                  `transition-colors duration-300 hover:text-brand-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded px-1 py-2 ${
                    isActive ? 'text-brand-yellow' : 'text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link to="/ContactUs" onClick={(e) => handleNavClick(e, '/ContactUs')} tabIndex={-1}>
              <button className="bg-brand-yellow text-white px-6 py-3 rounded font-bold cursor-pointer hover:bg-white hover:text-brand-yellow focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all duration-300 shadow-lg hover:-translate-y-1 ml-4">
                GET IN TOUCH
              </button>
            </Link>
          </nav>
        </div>
      </motion.header>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.nav
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ type: "spring", stiffness: 40, damping: 15 }}
            className="fixed inset-0 w-screen h-screen bg-[#121212]/95 backdrop-blur-xl text-white z-[90] flex flex-col pt-24 px-6 pb-10 overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col gap-2 mt-8 w-full max-w-md mx-auto">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <a
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={`flex items-center w-full py-4 px-2 text-sm font-bold tracking-widest uppercase border-b border-white/10 transition-colors duration-300 min-h-[48px] ${
                      window.location.pathname === link.path 
                        ? 'text-brand-yellow border-brand-yellow/30' 
                        : 'text-white hover:text-brand-yellow'
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: NAV_LINKS.length * 0.05 + 0.2 }}
                className="mt-8"
              >
                <a href="/ContactUs" onClick={(e) => handleNavClick(e, '/ContactUs')} tabIndex={-1}>
                  <button className="bg-brand-yellow text-white w-full py-4 rounded font-bold cursor-pointer hover:bg-white hover:text-brand-yellow transition-all duration-300 shadow-lg tracking-widest text-sm min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow">
                    GET IN TOUCH
                  </button>
                </a>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;