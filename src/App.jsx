// src/App.jsx

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserLogin from './pages/UserLogin';
import UserDashboard from './pages/UserDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
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
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<UserLogin />} />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;