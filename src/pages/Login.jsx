// src/pages/Login.jsx

import React, { useState } from 'react';
import logoPng from '../assets/images/logo.png';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Isi username dan password');
      return;
    }
    
    // Validasi sederhana - bisa disesuaikan dengan kebutuhan
    const validCredentials = {
      username: 'admin',
      password: 'admin123'
    };
    
    if (username === validCredentials.username && password === validCredentials.password) {
      localStorage.setItem('maq_admin_logged', '1');
      onLogin();
    } else {
      setError('Username atau password salah');
    }
  };

  return (
    <div className="admin-auth-wrap">
      <button
        type="button"
        className="btn btn-outline small"
        onClick={() => { window.location.hash=''; }}
        style={{ position: 'fixed', top: 16, left: 16, zIndex: 50 }}
        aria-label="Kembali"
      >
        ← Kembali
      </button>
      <div className="admin-auth-card">
        <img src={logoPng} alt="MaQCourse" className="admin-logo" />
        <h2 className="admin-auth-title">Admin Login</h2>
        <form onSubmit={handleSubmit} className="admin-auth-form">
          <label>
            <span>Username / Email</span>
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="admin" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="admin123" />
          </label>
          {error && <div className="admin-auth-error">{error}</div>}
          <button type="submit" className="btn btn-primary" style={{height:'44px'}}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;


