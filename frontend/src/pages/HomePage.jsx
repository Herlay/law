import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
// import MediaAndVideos from '../components/MediaAndVideos';
import InfoSections from '../components/InfoSections';
import InvestmentFraud from '../components/InvestmentFraud';
import CommercialLitigation from '../components/CommercialLitigation';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

function HomePage() {
  return (
    <div className="w-full min-h-screen font-sans text-gray-800">
      <Navbar />
      <Hero />
      {/* <MediaAndVideos /> */}
      <InfoSections />
      <InvestmentFraud />
      <CommercialLitigation />
      <Testimonials />
        <ContactSection />
      
      <Footer />
    </div>
  );
}

export default HomePage;