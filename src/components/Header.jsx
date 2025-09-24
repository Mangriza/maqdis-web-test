// src/components/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logoPng from '../assets/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="main-header">
      <div className="logo">
        <img src={logoPng} alt="MaQCourse logo" className="logo-image" />
        <h1>MaQCourse</h1>
      </div>
      <nav className="main-nav" aria-label="Primary">
        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>

        <ul id="primary-navigation" className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#beranda">Beranda</a></li>
          <li><a href="#kursus">Kursus</a></li>
          <li><a href="#tentang">Tentang Kami</a></li>
          <li><a href="#testimoni">Testimoni</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li className="nav-actions">
            {!isLoggedIn ? (
              <>
                <Link className="btn btn-ghost small" to="/login">User</Link>
                <a className="btn btn-primary small" href="#admin">Admin</a>
              </>
            ) : (
              <Link className="btn btn-primary small" to="/dashboard">Dashboard</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


