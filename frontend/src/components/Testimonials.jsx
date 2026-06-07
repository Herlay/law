import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- TESTIMONIAL DATA ---
const testimonials = [
  {
    id: 1,
    name: "Michael T.", 
    quote: "I just wanted to say thanks again for preparing and executing my case in such a professional manner. It was a pleasure to watch the professionals take such pride in their work, as well as becoming personally in tune with your client (Me). I would personally recommend you and your firm to anyone.",
  },
  {
    id: 2,
    name: "Sarah L.",
    quote: "I am so blessed to have you and your dynamic team defending me. Your ethics, forward thinking and strategies are amazing.  You guys are the best group of attorneys in the country that I could hire to handle this complicated case.",
  },
  {
    id: 3,
    name: "David W.",
    quote: "They truly understand the devastation of financial fraud. They didn't just treat me like a case number; they treated me like family and delivered a settlement that exceeded my expectations.",
  },
  {
    id: 4,
    name: "Greg P.",
    quote: "Fantastic news!!!!  Your professionalism, support and expertise were greatly appreciated.  You made a difficult situation much more bearable.",
  },
  {
    id: 5,
    name: "Rick R.",
    quote: "This was the best of all possible outcomes and I cannot thank you and the team enough.",
  },
  
];

// --- FRAMER MOTION SLIDE ANIMATIONS ---
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95
  })
};

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = Math.abs(page % testimonials.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1); // Move forward by 1 slide
    }, 5000); // 5000ms = 5 seconds

    // Cleanup the timer if the user manually clicks, so it doesn't double-jump
    return () => clearInterval(timer);
  }, [page]);

  return (
    <section className="w-full bg-white py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Client <span className="text-brand-yellow">Testimonials</span>
          </h2>
          <div className="w-16 h-1.5 bg-brand-yellow mx-auto rounded-full"></div>
        </div>

        {/* Compact Carousel Container */}
        {/* We use min-h to allow the box to grow slightly if a quote is very long, but keep it tight otherwise */}
        <div className="relative w-full max-w-4xl min-h-[280px] md:min-h-[220px] flex items-center justify-center">
          
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 400, damping: 40 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 }
              }}
              // The popLayout mode combined with w-full ensures smooth transitions without forcing a huge fixed height
              className="w-full bg-white rounded-2xl shadow-xl p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 border-l-8 border-brand-yellow"
            >
              
              {/* Left Column: Author Info & Rating */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-[200px]">
                {/* Large Quote Icon */}
                <svg className="w-10 h-10 text-brand-yellow/40 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z"/>
                </svg>
                
                <h4 className="text-gray-900 font-extrabold text-lg tracking-tight">
                  {testimonials[imageIndex].name}
                </h4>
             

                
              </div>

              {/* Right Column: The Quote itself */}
              <div className="flex-1 flex items-center">
                <p className="text-gray-700 text-[16px] md:text-[18px] font-medium leading-relaxed italic">
                  "{testimonials[imageIndex].quote}"
                </p>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        <div className="flex items-center space-x-8 mt-10">
          <button 
            onClick={() => paginate(-1)}
            className="group p-2 rounded-full hover:bg-brand-yellow/20 transition-colors"
          >
            <svg className="w-8 h-8 text-gray-400 group-hover:text-brand-yellow transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

        
          <button 
            onClick={() => paginate(1)}
            className="group p-2 rounded-full hover:bg-brand-yellow/20 transition-colors"
          >
            <svg className="w-8 h-8 text-gray-400 group-hover:text-brand-yellow transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;