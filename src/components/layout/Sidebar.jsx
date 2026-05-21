import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Calendar, Award, BookOpen, Image, MessageSquare, X } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ isOpen, closeMenu }) => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Discover', path: '/discover', icon: <Users size={20} /> },
    { name: 'Calendar', path: '/calendar', icon: <Calendar size={20} /> },
    { name: 'Culture Hub', path: '/culture', icon: <Award size={20} /> },
    { name: 'Knowledge', path: '/knowledge', icon: <BookOpen size={20} /> },
    { name: 'Gallery', path: '/gallery', icon: <Image size={20} /> },
    { name: 'Forums', path: '/forums', icon: <MessageSquare size={20} /> },
  ];

  return (
    <aside className={`sidebar glass-panel ${isOpen ? 'mobile-open' : ''}`}>
      <div className="sidebar-brand">
        <div className="brand-logo"></div>
        <h2>Nexus</h2>
        <button className="mobile-close-btn" onClick={closeMenu}>
          <X size={24} />
        </button>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={closeMenu}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <div className="system-status">
          <span className="status-dot online"></span>
          <span>All systems operational</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
