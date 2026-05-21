import React, { useState } from 'react';
import { announcements, recognitions, users } from '../data/mockData';
import { Heart, MessageCircle, Share2, Award } from 'lucide-react';
import './CultureHub.css';

const CultureHub = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Combine announcements and recognitions for a unified feed
  const feedItems = [
    ...announcements.map(a => ({ ...a, feedType: 'announcement' })),
    ...recognitions.map(r => ({ ...r, feedType: 'recognition' }))
  ].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  const filteredFeed = activeTab === 'all' 
    ? feedItems 
    : feedItems.filter(item => item.feedType === activeTab);

  return (
    <div className="culture-container animate-fade-in">
      <div className="page-header">
        <h1>Culture & Recognition Hub</h1>
        <p>Celebrate wins, share updates, and appreciate peers.</p>
      </div>

      <div className="culture-layout">
        <div className="feed-main">
          {/* Post Composer Placeholder */}
          <div className="post-composer glass-card">
            <div className="composer-header">
              <img src={users[0].avatar} alt="Current User" className="avatar-sm" />
              <input type="text" placeholder="Share an update or recognize a colleague..." />
            </div>
            <div className="composer-actions">
              <button className="btn btn-ghost btn-sm"><Award size={16} /> Recognize</button>
              <button className="btn btn-primary btn-sm">Post</button>
            </div>
          </div>

          <div className="feed-tabs">
            <button 
              className={`feed-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >All Activity</button>
            <button 
              className={`feed-tab ${activeTab === 'announcement' ? 'active' : ''}`}
              onClick={() => setActiveTab('announcement')}
            >Announcements</button>
            <button 
              className={`feed-tab ${activeTab === 'recognition' ? 'active' : ''}`}
              onClick={() => setActiveTab('recognition')}
            >Recognitions</button>
          </div>

          <div className="feed-stream">
            {filteredFeed.map(item => {
              const isRecognition = item.feedType === 'recognition';
              const author = isRecognition 
                ? users.find(u => u.id === item.giverId)
                : users.find(u => u.id === item.authorId);
                
              const receiver = isRecognition ? users.find(u => u.id === item.receiverId) : null;

              return (
                <div key={item.id} className={`feed-card glass-card ${isRecognition ? 'recognition-post' : ''}`}>
                  <div className="feed-card-header">
                    <img src={author?.avatar} alt={author?.name} className="feed-avatar" />
                    <div className="feed-meta">
                      <div className="feed-author-line">
                        <strong>{author?.name}</strong>
                        {isRecognition && (
                          <>
                            <span className="action-text"> recognized </span>
                            <strong>{receiver?.name}</strong>
                          </>
                        )}
                      </div>
                      <div className="feed-time">
                        {new Date(item.timestamp).toLocaleString()} • {item.type || 'Recognition'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="feed-card-body">
                    {!isRecognition && <h4>{item.title}</h4>}
                    <p>{isRecognition ? `"${item.message}"` : item.content}</p>
                  </div>
                  
                  <div className="feed-card-footer">
                    <button className="btn btn-ghost btn-sm">
                      <Heart size={16} /> {item.likes || Math.floor(Math.random() * 20)}
                    </button>
                    <button className="btn btn-ghost btn-sm">
                      <MessageCircle size={16} /> {item.comments || Math.floor(Math.random() * 5)}
                    </button>
                    <button className="btn btn-ghost btn-sm">
                      <Share2 size={16} /> Share
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="feed-sidebar">
          <div className="leaderboard-widget glass-card">
            <h3>Top Engaged Employees</h3>
            <div className="leaderboard-list">
              {users.sort((a,b) => b.points - a.points).slice(0,5).map((u, i) => (
                <div key={u.id} className="leaderboard-item">
                  <span className="rank">#{i + 1}</span>
                  <img src={u.avatar} alt={u.name} className="avatar-xs" />
                  <span className="name">{u.name}</span>
                  <span className="pts">{u.points}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureHub;
