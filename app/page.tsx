'use client';

import { useState } from 'react';
import Login from '@/components/login';
import Home from '@/components/home';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('isLoggedIn') === 'true' : false
  );
  const [userName, setUserName] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('userName') || 'Usuário' : 'Usuário'
  );

  const handleLogin = (email: string, name: string) => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', name);
    setIsAuthenticated(true);
    setUserName(name);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
    setUserName('Usuário');
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return <Home userName={userName} onLogout={handleLogout} />;
}
