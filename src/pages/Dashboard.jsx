import React from 'react';
import { useNavigate } from 'react-router-dom';
import { announcements, upcomingEvents, recognitions, users } from '../data/mockData';
import { Megaphone, Calendar as CalendarIcon, Award, Target, ChevronRight } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const visionPost = announcements.find(a => a.type === 'Vision');
  const otherAnnouncements = announcements.filter(a => a.type !== 'Vision');

  return (
    <div className="dashboard-container">
      {/* Hero Section - Management Vision */}
      <section className="hero-section glass-card animate-fade-in delay-100">
        <div className="hero-content">
          <span className="badge badge-primary">Q3 Vision</span>
          <h1>{visionPost?.title || 'Management Vision'}</h1>
          <p className="hero-text">{visionPost?.content}</p>
          <button className="btn btn-primary mt-4" onClick={() => navigate('/about')}>
            Read Full Strategy <ChevronRight size={16} />
          </button>
        </div>
        <div className="hero-visual">
          <Target size={120} className="hero-icon" />
        </div>
      </section>

      <div className="dashboard-grid">
        {/* Department/Company Updates */}
        <section className="widget glass-card animate-fade-in delay-200">
          <div className="widget-header">
            <h3><Megaphone size={20} className="text-primary" /> Latest Updates</h3>
            <button className="btn btn-ghost btn-sm">View All</button>
          </div>
          <div className="widget-content">
            {otherAnnouncements.map(announcement => (
              <div key={announcement.id} className="update-item">
                <div className="update-type">{announcement.type}</div>
                <h4>{announcement.title}</h4>
                <p>{announcement.content}</p>
                <div className="update-meta">
                  <span>{new Date(announcement.timestamp).toLocaleDateString()}</span>
                  <span>{announcement.likes} likes</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Culture & Recognition */}
        <section className="widget glass-card animate-fade-in delay-300">
          <div className="widget-header">
            <h3><Award size={20} className="text-secondary" /> Recognition Wall</h3>
          </div>
          <div className="widget-content">
            {recognitions.map(rec => {
              const giver = users.find(u => u.id === rec.giverId);
              const receiver = users.find(u => u.id === rec.receiverId);
              return (
                <div key={rec.id} className="recognition-card">
                  <div className="rec-header">
                    <img src={giver?.avatar} alt={giver?.name} className="avatar-sm" />
                    <span className="rec-action">recognized</span>
                    <img src={receiver?.avatar} alt={receiver?.name} className="avatar-sm" />
                    <strong>{receiver?.name}</strong>
                  </div>
                  <p className="rec-message">"{rec.message}"</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="widget glass-card animate-fade-in delay-300">
          <div className="widget-header">
            <h3><CalendarIcon size={20} className="text-warning" /> Upcoming Events</h3>
          </div>
          <div className="widget-content">
            {upcomingEvents.map(event => (
              <div key={event.id} className="event-item">
                <div className="event-date-block">
                  <span className="event-month">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                  <span className="event-day">{new Date(event.date).getDate()}</span>
                </div>
                <div className="event-info">
                  <h4>{event.title}</h4>
                  <span className="event-type">{event.type} • {event.attendees} attending</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
