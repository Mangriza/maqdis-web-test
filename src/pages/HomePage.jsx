// src/pages/HomePage.jsx

import React from 'react';
import '../assets/styles/main.css'; // Import file CSS
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import FeatureSection from '../components/FeatureSection';
import CoursesSection from '../components/CoursesSection';
import TestimonialSection from '../components/TestimonialSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Header />
      <main className="main-content">
        <HeroCarousel />
        <FeatureSection />
        <CoursesSection />
        <TestimonialSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;