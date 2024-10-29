import React from 'react';
import './HeroSection.css';
import HeroImage from '../assets/cover.png';


function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Selamat Datang di Cihuy Kids!</h2>
        <p>Kami merupakan platform hiburan dan edukasi digital yang aman untuk anak-anak usia 4-12 tahun...</p>
      </div>
      <img src={HeroImage} alt="Gambar anak-anak dengan tablet" className="hero-image" />
    </section>
  );
}

export default HeroSection;
