import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Companylogo from './Components/Companylogo';
import Statistics from './Components/Statistics';
import Workflow from './Components/Workflow';
import Interactive from './Components/Interactive';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Companylogo />
      <Statistics />
      <Workflow />
      <Interactive />
    </div>
  );
}

export default App;