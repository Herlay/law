import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage';
import Attorneys from './pages/Attorneys'; 
import ContactUs from './pages/ContactUs';
import Arbitation from './pages/Arbitation';
import CaseResults from './pages/CaseResults'
import PracticeAreas from './pages/PracticeAreas';
import Finra from './pages/Finra';
import Lawsuits from './pages/Lawsuits';

const App = () => {
  return (
    <div>
   
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

    </div>
  );
}

export default App;