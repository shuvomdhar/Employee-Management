import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import './App.css';

import Dashboard from './pages/Dashboard';

import Discover from './pages/Discover';

import CultureHub from './pages/CultureHub';

import KnowledgeBase from './pages/KnowledgeBase';

import Forums from './pages/Forums';

import Calendar from './pages/Calendar';

import Gallery from './pages/Gallery';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="discover" element={<Discover />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="culture" element={<CultureHub />} />
          <Route path="knowledge" element={<KnowledgeBase />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="forums" element={<Forums />} />
          <Route path="about" element={<About />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
