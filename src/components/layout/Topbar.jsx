import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, Sun, Moon, Menu } from 'lucide-react';
import { notifications } from '../../data/mockData';
import { useAuth } from '../../auth/AuthContext';
import './Topbar.css';

const Topbar = ({ theme, toggleTheme, toggleMenu }) => {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const notifRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setIsNotifOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const { current, logout } = useAuth();
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="topbar glass-card">
      <div className="topbar-left">
        <button className="mobile-menu-btn action-btn" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
        <div className="search-container">
          <Search className="search-icon" size={18} />
          <input 
            type="text" 
            placeholder="Search colleagues, policies, announcements..." 
            className="search-input"
          />
        </div>
      </div>

      <div className="topbar-actions">
        <button className="action-btn" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <div className="notification-wrapper" ref={notifRef}>
          <button 
            className="action-btn notification-btn" 
            aria-label="Notifications"
            onClick={() => setIsNotifOpen(!isNotifOpen)}
          >
            <Bell size={20} />
            {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
          </button>
          
          {isNotifOpen && (
            <div className="notification-dropdown animate-fade-in">
              <div className="notif-header">
                <h4>Notifications</h4>
                <button className="mark-read-btn">Mark all as read</button>
              </div>
              <div className="notif-list">
                {notifications.map(notif => (
                  <div key={notif.id} className={`notif-item ${notif.unread ? 'unread' : ''}`}>
                    <div className="notif-dot"></div>
                    <div className="notif-content">
                      <p>{notif.text}</p>
                      <span className="notif-time">{notif.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="user-profile">
          {current ? (
            <>
              <div className="user-info">
                <span className="user-name">{current.name}</span>
                <span className="user-role">{current.role}</span>
              </div>
              <img src={current.avatar} alt="User avatar" className="user-avatar" />
              <button className="btn logout-btn" onClick={() => logout()}>Sign out</button>
            </>
          ) : (
            <div className="user-info">
              <span className="user-name">Guest</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
