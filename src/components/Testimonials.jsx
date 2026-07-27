import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- TESTIMONIAL DATA (Updated to match the target design) ---
const testimonials = [
  {
    id: 1,
    name: "melissa gibbens",
    date: "06-25-2026",
    quote: "After the tragic loss of our daughter in a car accident, this law firm did an outstanding job representing our family. They were professional, compass ...",
    initials: "m",
    avatarBg: "bg-[#00a9b5]", 
  },
  {
    id: 2,
    name: "jane Hale",
    date: "04-15-2026",
    quote: "They were amazing to work with throughout the process. I would highly recommend this firm!",
    initials: "j",
    avatarBg: "bg-[#c2185b]",
  },
  {
    id: 3,
    name: "Edna Nelsen",
    date: "02-19-2026",
    quote: "Having representation by Strong Law Firm was one of the greatest experiences of my life. Bailey Geller, Nick Smart and Dana Medley were absolutely fan ...",
    initials: "EN",
    avatarBg: "bg-blue-500", 
  },
  {
    id: 4,
    name: "Greg P.",
    date: "08-16-2025",
    quote: "Fantastic news!!!! Your professionalism, support and expertise were greatly appreciated. You made a difficult situation much more bearable.",
    initials: "G",
    avatarBg: "bg-orange-500",
  },
  {
    id: 5,
    name: "Rick R.",
    date: "12-05-2025",
    quote: "This was the best of all possible outcomes and I cannot thank you and the team enough. Highly recommended to anyone seeking justice.",
    initials: "R",
    avatarBg: "bg-purple-600",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Handle responsiveness for the carousel
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsToShow);

  const paginate = (direction) => {
    setCurrentIndex((prev) => {
      let newIndex = prev + direction;
      if (newIndex < 0) return 0;
      if (newIndex > maxIndex) return maxIndex;
      return newIndex;
    });
  };

  const GoogleLogo = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  const Stars = () => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#FBBC05]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="w-full bg-white py-16 lg:py-24 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl text-slate-900 font-serif mb-2">
            Our Clients Love Us
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Genuine client experiences don't lie
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center">
          
          {/* Left Arrow */}
          <button 
            onClick={() => paginate(-1)}
            disabled={currentIndex === 0}
            className={`absolute left-0 z-10 -ml-4 md:-ml-12 p-3 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          {/* Cards Track Wrapper */}
          <div className="w-full overflow-hidden px-2 pb-8 pt-4">
            <motion.div 
              className="flex gap-6"
              animate={{ 
                x: `calc(-${currentIndex * (100 / cardsToShow)}% - ${currentIndex * (24 / cardsToShow)}px)` 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / cardsToShow}% - ${24 * (cardsToShow - 1) / cardsToShow}px)` }}
                >
                  
                  {/* Speech Bubble Card */}
                  <div className="relative bg-[#F4F7FB] p-8 rounded-sm mb-6 min-h-[220px]">
                    <div className="flex justify-between items-center mb-4">
                      <Stars />
                      <GoogleLogo />
                    </div>
                    <p className="text-[#334155] text-base leading-relaxed">
                      {testimonial.quote}
                    </p>
                    {/* The Triangle Tail */}
                    <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#F4F7FB] border-r-[20px] border-r-transparent"></div>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 px-2">
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-full ${testimonial.avatarBg} flex items-center justify-center text-white text-xl font-medium uppercase`}>
                        {testimonial.initials}
                      </div>
                      {/* Optional small google badge on avatar */}
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                         <svg className="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                          </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {testimonial.name}
                      </h4>
                      <span className="text-xs text-slate-400">
                        {testimonial.date}
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => paginate(1)}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 z-10 -mr-4 md:-mr-12 p-3 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors ${currentIndex === maxIndex ? 'opacity-30 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {[...Array(maxIndex + 1)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-[#00a9b5]' : 'bg-gray-200'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;