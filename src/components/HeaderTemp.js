import React from 'react';
import './Header.css';
import logo from '../assets/icon.png';
import userIcon from '../assets/icon.png';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Cihuy Kids Logo" className="navbar-logo" />
        </div>
        <div className="navbar-center">
          <a href="#home">Selamat Datang</a>
          <a href="#importance">Kenapa Konten Sesuai Usia itu Penting?</a>
          <a href="#access">Apa saja yang Bisa Diakses?</a>
        </div>
        <div className="navbar-right">
          <img src={userIcon} alt="User Icon" className="navbar-user-icon" />
          <button className="navbar-button">Jelajahi</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
