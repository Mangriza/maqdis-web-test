// src/components/CoursesSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { id: 1, title: 'React Fundamental', price: 'Rp 299.000', desc: 'Dasar React, hooks, dan state management.', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'UI/UX Design', price: 'Rp 249.000', desc: 'Prinsip desain, wireframe, dan prototyping.', image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Backend Node.js', price: 'Rp 349.000', desc: 'REST API, database, dan autentikasi.', image: 'https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=1200&auto=format&fit=crop' },
];

const CoursesSection = () => {
  return (
    <section className="courses-section" id="kursus">
      <div className="section-head">
        <h3>Kursus Terpopuler</h3>
        <p>Mulai dari dasar hingga mahir, pilih jalur yang sesuai tujuanmu.</p>
      </div>
      <div className="courses-grid">
        {courses.map((c) => (
          <article className="course-card" key={c.id}>
            <div className="course-thumb">
              <img src={c.image} alt={c.title} />
            </div>
            <div className="course-body">
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
              <div className="course-meta">
                <span className="price">{c.price}</span>
                <Link className="btn btn-primary small" to="/login">Ambil Kursus</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;


