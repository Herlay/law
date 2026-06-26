import React from 'react';
import customerReviewImg from '../assets/GoogleCustomer.png';
import PracticeAreaImg from '../assets/PIABA.svg';
import superLawyerImg from '../assets/superLawyer.png';
import whosImg from '../assets/whos.png';

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Top Footer - Offices */}
  
     {/* Bottom Footer - Dark */}
      <div className="bg-[#1A1A1A] py-12 px-6 flex flex-col items-center text-center text-white">
        
        {/* Navigation Links */}
        {/* <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs font-bold tracking-widest uppercase mb-12">
          <link to="/Practice" className="hover:text-brand-yellow transition">Practice Areas</link>
          <link to="/Attorneys" className="hover:text-brand-yellow transition">Attorneys</link>
         <link to="/ContactUs" className="hover:text-brand-yellow transition">Disclaimer</link>
         <link to="/ContactUs" className="hover:text-brand-yellow transition">Privacy Policy</link>
         <link to="/ContactUs" className="hover:text-brand-yellow transition">Accessibility</link>
        </div> */}
        
        {/* Badges Placeholder */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-8 md:gap-16 mb-12">
          <a className="hover:opacity-80 transition">
            <img 
              src={PracticeAreaImg} 
              alt="Practice Area" 
              className="h-16 md:h-20 w-auto object-contain" 
            />
          </a>

          <a className="hover:opacity-80 transition">
            <img 
              src={superLawyerImg} 
              alt="Super Lawyers" 
              className="h-16 md:h-24 w-auto object-contain" 
            />
          </a>
          
          <a className="hover:opacity-80 transition">
            <img 
              src={whosImg} 
              alt="Who's Who" 
              className="h-16 md:h-35 w-auto object-contain" 
            />
          </a>
        </div>

        {/* Disclaimer Text */}
        <p className="w-full max-w-10xl text-[13px] md:text-[15px] text-white-400 mb-10 leading-relaxed px-4">
          Please do not include any confidential or sensitive information in a contact form, text message, or voicemail. The contact form sends information by non-encrypted email, which is not secure. Submitting a contact form, sending a text message, making a phone call, or leaving a voicemail does not create an attorney-client relationship.
        </p>
        
        <p className="text-[15px] text-white-500">Illinois Securities Law of 1953</p>
        <p className="text-[15px] text-white-500 mt-1">Copyright © 2026, Stoltmann Law Offices</p>
      </div>
    </footer>
  );
};

export default Footer;