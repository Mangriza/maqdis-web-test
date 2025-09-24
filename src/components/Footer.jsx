// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">MaQCourse</div>
          <p>Kembangkan skill digitalmu dengan pembelajaran terarah, praktis, dan relevan industri.</p>
          <div className="social-links" aria-label="Social media">
            <a href="#" aria-label="Facebook" title="Facebook" className="icon-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 4.97 3.63 9.1 8.38 9.94v-7.03H7.9v-2.9h2.36V9.86c0-2.33 1.39-3.62 3.52-3.62.72 0 1.68.12 2.1.18v2.42h-1.18c-1.16 0-1.53.72-1.53 1.45v1.8h2.61l-.42 2.9h-2.2V22c4.75-.84 8.38-4.97 8.38-9.94Z" fill="currentColor"/></svg>
            </a>
            <a href="#" aria-label="Instagram" title="Instagram" className="icon-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.25-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" fill="currentColor"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" title="LinkedIn" className="icon-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4v14h-4v-14ZM8.5 8.5h3.84v1.92h.06c.54-1.02 1.86-2.1 3.84-2.1 4.1 0 4.86 2.7 4.86 6.2v7.98h-4v-7.08c0-1.68-.04-3.84-2.34-3.84-2.34 0-2.7 1.82-2.7 3.7v7.22h-4v-14Z" fill="currentColor"/></svg>
            </a>
            <a href="#" aria-label="Twitter" title="Twitter" className="icon-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.75.33-1.56.55-2.4.65a4.19 4.19 0 0 0 1.84-2.31 8.4 8.4 0 0 1-2.66 1.02 4.18 4.18 0 0 0-7.12 3.81A11.86 11.86 0 0 1 3.16 4.9a4.17 4.17 0 0 0 1.3 5.58c-.62-.02-1.21-.19-1.73-.47v.05c0 2.02 1.44 3.7 3.36 4.08-.35.1-.73.15-1.11.15-.27 0-.54-.03-.8-.08.54 1.68 2.1 2.9 3.95 2.93A8.39 8.39 0 0 1 2 19.54a11.84 11.84 0 0 0 6.41 1.88c7.69 0 11.9-6.37 11.9-11.9 0-.18 0-.35-.01-.53.82-.6 1.53-1.35 2.1-2.2Z" fill="currentColor"/></svg>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <div className="footer-title">Perusahaan</div>
            <a href="#tentang">Tentang Kami</a>
            <a href="#karir">Karir</a>
            <a href="#blog">Blog</a>
          </div>
          <div>
            <div className="footer-title">Bantuan</div>
            <a href="#faq">FAQ</a>
            <a href="#dukungan">Dukungan</a>
            <a href="#panduan">Panduan</a>
          </div>
          <div>
            <div className="footer-title">Legal</div>
            <a href="#privasi">Kebijakan Privasi</a>
            <a href="#syarat">Syarat & Ketentuan</a>
          </div>
        </div>
        <div className="footer-contact">
          <div className="footer-title">Kontak</div>
          <p>Jl. Contoh No. 123, Jakarta</p>
          <p>+62 812-3456-7890</p>
          <p>support@maqcourse.com</p>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} MaQCourse. All rights reserved.</div>
    </footer>
  );
};

export default Footer;


