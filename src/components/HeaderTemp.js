import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../assets/icon.png'; // Logo normal
import stickyLogo from '../assets/logo.png'; // Logo saat sticky
import userIcon from '../assets/profile-icon.png'; // Ikon normal
import userIconSticky from '../assets/profile-icon-sticky.png'; // Ikon saat sticky
import { BiColorFill } from 'react-icons/bi';

function Header() {
  const [isSticky, setIsSticky] = useState(false); // State untuk menentukan apakah header sticky

  const handleScroll = () => {
    const offset = window.scrollY; // Dapatkan posisi scroll
    if (offset > 50) { // Atur threshold untuk sticky
      setIsSticky(true); 
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Tambahkan event listener scroll
    return () => {
      window.removeEventListener('scroll', handleScroll); // Bersihkan listener saat komponen di-unmount
    };
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <nav className="navbar">
        <div className="navbar-left">
          <img 
            src={isSticky ? stickyLogo : logo} // Ganti logo berdasarkan state isSticky
            alt="Cihuy Kids Logo" 
            className="navbar-logo" 
          />
        </div>
        <div className="navbar-center">
          <a href="#home">Selamat Datang</a>
          <a href="#importance">Kenapa Konten Sesuai Usia itu Penting?</a>
          <a href="#access">Apa saja yang Bisa Diakses?</a>
        </div>
        <div className="navbar-right">
          <img 
            src={isSticky ? userIconSticky : userIcon} // Ganti ikon berdasarkan state isSticky
            alt="User Icon" 
            className="navbar-user-icon" 
          />
          <button className={`navbar-button ${isSticky ? 'sticky-button' : ''}`}>
            Jelajahi {/* Ganti teks tombol berdasarkan state */}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
