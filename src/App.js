import React from 'react';
import Header from './components/HeaderTemp';
import HeroSection from './components/HeroSection';
import './App.css';
import './tailwind.css'; 
import PremiumContent from './components/PremiumContent';
import Footer from './components/Footer'

function App() {
  return (
    <><div className="App">
      <Header />
      <HeroSection />
    </div>
    <div>
        <PremiumContent />
        <Footer/>
      </div></>
  );
}

export default App;
