// src/context/AuthContext.jsx

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext({ isLoggedIn: false, login: () => {}, logout: () => {} });

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('maq_user_logged'));

  useEffect(() => {
    if (isLoggedIn) localStorage.setItem('maq_user_logged', '1');
    else localStorage.removeItem('maq_user_logged');
  }, [isLoggedIn]);

  const login = useCallback((username, password) => {
    if (username === 'user' && password === '123') {
      setIsLoggedIn(true);
      return { ok: true };
    }
    return { ok: false, message: 'Username atau Password salah.' };
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const value = useMemo(() => ({ isLoggedIn, login, logout }), [isLoggedIn, login, logout]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


