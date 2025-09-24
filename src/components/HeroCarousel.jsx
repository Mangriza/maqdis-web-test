// src/components/HeroCarousel.jsx

import React, { useEffect, useState } from 'react';

const slides = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
    title: 'Belajar Skill Digital dengan Mentor Berpengalaman',
    subtitle: 'Kursus praktis, kurikulum terkini, dan komunitas suportif.',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    title: 'Bangun Karier Teknologi yang Kamu Impikan',
    subtitle: 'Dari dasar hingga advance, semua ada di MaQCourse.',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop',
    title: 'Belajar Fleksibel, Kapan Saja, Di Mana Saja',
    subtitle: 'Materi ringkas, proyek nyata, progress terukur.',
  },
];

const INTERVAL_MS = 4500;

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const goTo = (i) => setIndex(i);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  const active = slides[index];

  return (
    <section id="beranda" className="hero-carousel">
      <div className="carousel-viewport fullscreen">
        <img className="carousel-image" src={active.image} alt={active.title} />
        <div className="carousel-overlay">
          <div className="overlay-shade" />
          <div className="hero-composition">
            <div className="hero-left">
              <h2 className="hero-title">Bangun Karier Teknologi yang Kamu Impikan</h2>
              <p className="hero-subtitle">MaQCourse adalah platform pembelajaran praktis dengan mentor industri, kurikulum terkini, dan komunitas suportif. Belajar fleksibel, bangun portofolio, dan majukan kariermu.</p>
              <div className="hero-cta">
                <a href="#kursus" className="btn btn-primary">Mulai Belajar</a>
                <a href="#tentang" className="btn btn-outline">Jelajahi Kursus</a>
              </div>
            </div>
            <div className="hero-right">
              <div className="visual-card">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop"
                  alt="Lulusan merayakan kelulusan"
                />
              </div>
            </div>
          </div>
          <a href="#tentang" className="scroll-indicator" aria-label="Scroll ke bawah">⌄</a>
        </div>
        <button className="carousel-nav left" aria-label="Sebelumnya" onClick={prev}>‹</button>
        <button className="carousel-nav right" aria-label="Berikutnya" onClick={next}>›</button>
        <div className="carousel-dots" role="tablist" aria-label="Slide selector">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`dot ${i === index ? 'active' : ''}`}
              aria-label={`Slide ${i + 1}`}
              aria-selected={i === index}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;


