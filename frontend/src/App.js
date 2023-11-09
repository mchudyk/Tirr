// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import FinancialDetail1 from './components/FinancialDetail1';
import FinancialDetail2 from './components/FinancialDetail2';
import FinancialDetail3 from './components/FinancialDetail3';
import FinancialDetail4 from './components/FinancialDetail4';
import Result from './components/Result';
import './App.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/financialdetail1" element={<FinancialDetail1 />} />
        <Route path="/financialdetail2" element={<FinancialDetail2 />} />
        <Route path="/FinancialDetail3" element={<FinancialDetail3 />} />
        <Route path="/financialdetail4" element={<FinancialDetail4 />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
