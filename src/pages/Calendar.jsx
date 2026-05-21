import React from 'react';
import { upcomingEvents } from '../data/mockData';
import { Calendar as CalendarIcon, MapPin, Users, Clock } from 'lucide-react';
import './Calendar.css';

const Calendar = () => {
  // Generate a mock month view array (just placeholders for structural UI)
  const daysInMonth = Array.from({ length: 35 }, (_, i) => i + 1);

  return (
    <div className="calendar-container animate-fade-in">
      <div className="page-header">
        <h1>Engagement Calendar</h1>
        <p>Upcoming company events, team offsites, and cultural celebrations.</p>
      </div>

      <div className="calendar-layout">
        {/* Main Calendar View (Visual representation) */}
        <div className="calendar-main glass-card">
          <div className="calendar-header">
            <h2>October 2023</h2>
            <div className="calendar-controls">
              <button className="btn btn-outline btn-sm">Prev</button>
              <button className="btn btn-outline btn-sm">Today</button>
              <button className="btn btn-outline btn-sm">Next</button>
            </div>
          </div>
          
          <div className="calendar-grid">
            <div className="weekday">Sun</div>
            <div className="weekday">Mon</div>
            <div className="weekday">Tue</div>
            <div className="weekday">Wed</div>
            <div className="weekday">Thu</div>
            <div className="weekday">Fri</div>
            <div className="weekday">Sat</div>
            
            {daysInMonth.map((day) => {
              // Mock logic to assign events to certain days
              const dateVal = day - 1; // start from 1st
              const isEventDay = dateVal === 10 || dateVal === 15 || dateVal === 24;
              
              return (
                <div key={day} className={`calendar-day ${dateVal <= 0 || dateVal > 31 ? 'empty' : ''}`}>
                  <span className="day-number">{dateVal > 0 && dateVal <= 31 ? dateVal : ''}</span>
                  {isEventDay && (
                    <div className={`event-badge ${dateVal === 10 ? 'bg-warning' : dateVal === 24 ? 'bg-secondary' : 'bg-primary'}`}>
                      {dateVal === 10 ? 'Eng Sync' : dateVal === 24 ? 'Diwali Celeb' : 'Townhall'}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar Event List */}
        <div className="calendar-sidebar">
          <h3 className="mb-4">Upcoming Events</h3>
          <div className="upcoming-list">
            {upcomingEvents.map(event => (
              <div key={event.id} className="event-detail-card glass-panel">
                <div className="event-date-box">
                  <span className="event-month">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                  <span className="event-day">{new Date(event.date).getDate()}</span>
                </div>
                <div className="event-details">
                  <h4>{event.title}</h4>
                  <div className="event-meta">
                    <Clock size={14} /> <span>{new Date(event.date).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                  </div>
                  <div className="event-meta">
                    <Users size={14} /> <span>{event.attendees} attending</span>
                  </div>
                  <button className="btn btn-primary btn-sm mt-2">RSVP</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
