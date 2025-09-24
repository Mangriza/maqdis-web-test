// src/components/TestimonialSection.jsx

import React from 'react';

const items = [
  { id: 1, name: 'Aulia Ramadhan', role: 'Frontend Dev', text: 'Materinya to the point dan langsung bisa dipakai di kerjaan.', avatar: 'https://i.pravatar.cc/80?img=5' },
  { id: 2, name: 'Siti Rahma', role: 'UI/UX Designer', text: 'Mentornya responsif banget. Portofolio jadi naik kelas!', avatar: 'https://i.pravatar.cc/80?img=11' },
  { id: 3, name: 'Dimas Wibowo', role: 'Backend Engineer', text: 'Belajar nyaman, banyak praktek, hasilnya nyata.', avatar: 'https://i.pravatar.cc/80?img=22' },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section" id="testimoni">
      <div className="section-head">
        <h3>Apa Kata Mereka</h3>
        <p>Pengalaman nyata dari learner MaQCourse.</p>
      </div>
      <div className="testimonial-grid">
        {items.map((t) => (
          <figure className="testimonial-card" key={t.id}>
            <img className="avatar" src={t.avatar} alt={t.name} />
            <blockquote>“{t.text}”</blockquote>
            <figcaption>
              <div className="name">{t.name}</div>
              <div className="role">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;


