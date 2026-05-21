import React, { useState } from 'react';
import { users, departments } from '../data/mockData';
import { Search, Filter, Mail, MessageSquare } from 'lucide-react';
import './Discover.css';

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          user.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || user.departmentId === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="discover-container animate-fade-in">
      <div className="page-header">
        <h1>Discover Colleagues</h1>
        <p>Find and connect with people across the organization.</p>
      </div>

      <div className="controls-bar glass-panel">
        <div className="search-box">
          <Search size={18} className="text-secondary" />
          <input 
            type="text" 
            placeholder="Search by name or role..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-box">
          <Filter size={18} className="text-secondary" />
          <select 
            value={selectedDept} 
            onChange={(e) => setSelectedDept(e.target.value)}
          >
            <option value="All">All Departments</option>
            {departments.map(dept => (
              <option key={dept.id} value={dept.id}>{dept.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="users-grid">
        {filteredUsers.map(user => {
          const deptName = departments.find(d => d.id === user.departmentId)?.name;
          return (
            <div key={user.id} className="user-card glass-card">
              <div className="card-bg"></div>
              <div className="user-card-content">
                <img src={user.avatar} alt={user.name} className="user-avatar-lg" />
                <h3 className="user-name">{user.name}</h3>
                <span className="user-role">{user.role}</span>
                <span className="user-dept">{deptName}</span>
                
                {user.bio && <p className="user-bio">"{user.bio}"</p>}

                <div className="user-stats">
                  <div className="stat">
                    <span className="stat-value">{user.points}</span>
                    <span className="stat-label">Engagement Pts</span>
                  </div>
                </div>

                <div className="user-actions">
                  <button className="btn btn-outline"><MessageSquare size={16} /> Chat</button>
                  <button className="btn btn-primary"><Mail size={16} /> Email</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {filteredUsers.length === 0 && (
        <div className="no-results glass-card">
          <p>No colleagues found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Discover;
