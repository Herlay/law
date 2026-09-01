import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

import Homepage from "./pages/HomePage";
import Attorneys from "./pages/Attorneys";
import ContactUs from "./pages/ContactUs";
import Arbitation from "./pages/Arbitation";
import CaseResults from "./pages/CaseResults";
import PracticeAreas from "./pages/PracticeAreas";
import Finra from "./pages/Finra";
import Lawsuits from "./pages/Lawsuits";

// =========================================================
// SCROLL TO TOP
// =========================================================

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

// =========================================================
// APP
// =========================================================

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // =========================================================
  // SHOW / HIDE BACK TO TOP BUTTON
  // =========================================================

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================================================
  // SCROLL TO TOP BUTTON
  // =========================================================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen">
      {/* =====================================================
          RESET SCROLL POSITION WHEN ROUTE CHANGES
      ===================================================== */}

      <ScrollToTop />

      {/* =====================================================
          ROUTES
      ===================================================== */}

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/Attorneys" element={<Attorneys />} />

        <Route path="/ContactUs" element={<ContactUs />} />

        <Route path="/Arbitration" element={<Arbitation />} />

        <Route path="/Case" element={<CaseResults />} />

        <Route path="/Practice" element={<PracticeAreas />} />

        <Route path="/Finra" element={<Finra />} />

        <Route path="/Lawsuits" element={<Lawsuits />} />
      </Routes>

      {/* =====================================================
          BACK TO TOP BUTTON
      ===================================================== */}

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.8,
            }}
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            className="
              fixed
              bottom-6
              right-6
              z-[9999]
              flex
              h-12
              w-12
              cursor-pointer
              items-center
              justify-center
              border
              border-white
              bg-red-500
              text-white
              shadow-[0_8px_25px_rgba(0,0,0,0.30)]
              transition-all
              duration-300
              hover:bg-white
              hover:text-red-500
              focus:outline-none
              focus:ring-2
              focus:ring-red-500
              focus:ring-offset-2
              sm:bottom-8
              sm:right-8
              sm:h-14
              sm:w-14
            "
          >
            <FiArrowUp className="text-lg sm:text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
