// src/components/Hero.jsx

import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <img
        src="/src/assets/images/placeholder.jpg"
        alt="Person coding"
        className="hero-image"
      />
      <div className="hero-text">
        <h2 className="hero-title">Membangun Pengalaman Web Terbaik</h2>
        <p className="hero-subtitle">
          Antarmuka modern, cepat, dan interaktif untuk kebutuhan digital Anda.
        </p>
        <div className="hero-cta">
          <a href="#get-started" className="btn btn-primary">Mulai Sekarang</a>
          <a href="#learn-more" className="btn btn-outline">Pelajari Lebih Lanjut</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;


