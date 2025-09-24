// src/components/FAQSection.jsx

import React, { useState } from 'react';

const faqs = [
  { q: 'Bagaimana alur belajar di MaQCourse?', a: 'Kamu akan mengikuti modul step-by-step, tugas praktis, dan review mentor.' },
  { q: 'Apakah ada sertifikat?', a: 'Ya, sertifikat diberikan setelah menyelesaikan evaluasi akhir kursus.' },
  { q: 'Apakah materi bisa diakses selamanya?', a: 'Akses materi berlaku seumur hidup untuk kursus yang telah dibeli.' },
  { q: 'Metode pembayaran apa saja yang tersedia?', a: 'Kami mendukung transfer bank, e-wallet populer, dan kartu kredit.' },
];

const FAQItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-question" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-answer">
        <p>{a}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="faq-section" id="faq">
      <div className="section-head">
        <h3>Pertanyaan yang Sering Diajukan</h3>
        <p>Temukan jawaban cepat untuk pertanyaan umum.</p>
      </div>
      <div className="faq-list">
        {faqs.map((f, i) => (
          <FAQItem key={i} q={f.q} a={f.a} index={i} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;


