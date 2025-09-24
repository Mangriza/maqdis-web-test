// src/pages/UserLogin.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logoPng from '../assets/images/logo.png';

const UserLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = login(username, password);
    if (res.ok) {
      navigate('/dashboard');
    } else {
      setError(res.message || 'Login gagal');
    }
  };

  return (
    <div className="admin-auth-wrap">
      <button
        type="button"
        className="btn btn-outline small"
        onClick={() => navigate('/')}
        style={{ position: 'fixed', top: 16, left: 16, zIndex: 50 }}
        aria-label="Kembali"
      >
        ← Kembali
      </button>
      <div className="admin-auth-card">
        <img src={logoPng} alt="MaQCourse" className="admin-logo" />
        <h2 className="admin-auth-title">Masuk User</h2>
        <form onSubmit={handleSubmit} className="admin-auth-form">
          <label>
            <span>Username / Email</span>
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="user" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="123" />
          </label>
          {error && <div className="admin-auth-error">{error}</div>}
          <button type="submit" className="btn btn-primary" style={{height:'44px'}}>Masuk</button>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;


