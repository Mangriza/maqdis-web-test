// src/components/FeatureSection.jsx

import React from 'react';

const FeatureSection = () => {
  return (
    <section className="feature-section" id="tentang">
      <div className="feature-inner">
        <div className="feature-image-wrap">
          <img
            className="feature-image"
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop"
            alt="Belajar kolaboratif"
          />
        </div>
        <div className="feature-content">
          <h3 className="feature-title">Belajar Efektif dengan Kurikulum Terarah</h3>
          <p className="feature-desc">
            MaQCourse menghadirkan pengalaman belajar yang fokus pada praktik dengan studi kasus
            nyata. Dapatkan feedback dari mentor dan bangun portofolio yang mengesankan.
          </p>
          <ul className="feature-list">
            <li>Kurikulum up-to-date</li>
            <li>Mentor industri</li>
            <li>Komunitas aktif</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;


