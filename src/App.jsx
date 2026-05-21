import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import './App.css';
import { AuthProvider, useAuth } from './auth/AuthContext';

import Dashboard from './pages/Dashboard';
import Discover from './pages/Discover';
import CultureHub from './pages/CultureHub';
import KnowledgeBase from './pages/KnowledgeBase';
import Forums from './pages/Forums';
import Calendar from './pages/Calendar';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import HRPanel from './pages/HRPanel';

const ProtectedRoute = ({ children }) => {
  const { current } = useAuth();
  if (!current) return <Navigate to="/login" replace />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hr" element={<ProtectedRoute><HRPanel /></ProtectedRoute>} />

          <Route path="/" element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="discover" element={<Discover />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="culture" element={<CultureHub />} />
            <Route path="knowledge" element={<KnowledgeBase />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="forums" element={<Forums />} />
            <Route path="about" element={<About />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
