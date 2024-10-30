import React from 'react';
import Header from './components/HeaderTemp';
import HeroSection from './components/HeroSection';
import './App.css';
import './tailwind.css'; 
import PremiumContent from './components/PremiumContent';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <PremiumContent />
    </div>
  );
}

export default App;
