import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Attorneys from './pages/Attorneys'; 
import ContactUs from './pages/ContactUs';
import Arbitation from './pages/Arbitation';
import CaseResults from './pages/CaseResults';

const App = () => {
  return (
    <div>
   
      <Routes>
  
        <Route path="/" element={<Homepage />} />
        
        <Route path="/Attorneys" element={<Attorneys />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Arbitration" element={<Arbitation />} />
        <Route path="/Case" element={<CaseResults />} />
      </Routes>
    </div>
  );
}

export default App;