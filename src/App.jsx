// src/App.jsx

import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './assets/styles/admin.css';

function App() {
  const [route, setRoute] = useState(window.location.hash || '#site');
  const [logged, setLogged] = useState(!!localStorage.getItem('maq_admin_logged'));

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '#site');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (route.startsWith('#admin')) {
    document.body.classList.add('admin');
    if (!logged) return <Login onLogin={() => setLogged(true)} />;
    return <Dashboard onLogout={() => { localStorage.removeItem('maq_admin_logged'); setLogged(false); }} />;
  }

  document.body.classList.remove('admin');
  return <HomePage />;
}

export default App;