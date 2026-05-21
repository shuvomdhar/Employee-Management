import React from 'react';
import { users } from '../data/mockData';
import { MessageSquare, Users, Clock, Plus } from 'lucide-react';
import './Forums.css';

const mockTopics = [
  { id: 't1', title: 'Ideas for Next Team Offsite', category: 'General', authorId: 'u2', replies: 24, views: 156, lastActive: '2h ago' },
  { id: 't2', title: 'Feedback on New Remote Work Policy', category: 'HR', authorId: 'u4', replies: 89, views: 412, lastActive: '5m ago' },
  { id: 't3', title: 'React 19 Upgrade Guide & Discussion', category: 'Engineering', authorId: 'u5', replies: 12, views: 88, lastActive: '1d ago' },
  { id: 't4', title: 'Q3 Marketing Campaign Brainstorm', category: 'Marketing', authorId: 'u3', replies: 45, views: 210, lastActive: '3h ago' },
];

const Forums = () => {
  return (
    <div className="forums-container animate-fade-in">
      <div className="page-header forums-header">
        <div>
          <h1>Discussion Forums</h1>
          <p>Join the conversation, ask questions, and share ideas.</p>
        </div>
        <button className="btn btn-primary"><Plus size={18} /> New Topic</button>
      </div>

      <div className="forums-grid">
        {/* Categories Sidebar */}
        <aside className="forums-sidebar glass-card">
          <h3>Categories</h3>
          <ul className="forum-categories">
            <li className="active"><span className="cat-color bg-primary"></span> All Topics</li>
            <li><span className="cat-color bg-gray"></span> General</li>
            <li><span className="cat-color bg-warning"></span> HR & Culture</li>
            <li><span className="cat-color bg-danger"></span> Engineering</li>
            <li><span className="cat-color bg-success"></span> Marketing</li>
          </ul>
        </aside>

        {/* Topics List */}
        <div className="topics-list glass-panel">
          <div className="topics-header">
            <div className="col-topic">Topic</div>
            <div className="col-stats">Stats</div>
            <div className="col-activity">Last Activity</div>
          </div>
          
          <div className="topics-body">
            {mockTopics.map(topic => {
              const author = users.find(u => u.id === topic.authorId);
              return (
                <div key={topic.id} className="topic-row">
                  <div className="col-topic">
                    <img src={author?.avatar} alt={author?.name} className="avatar-sm" />
                    <div className="topic-info">
                      <h4>{topic.title}</h4>
                      <div className="topic-meta">
                        <span className="topic-category">{topic.category}</span>
                        <span>•</span>
                        <span>Posted by {author?.name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-stats">
                    <div className="stat-item" title="Replies">
                      <MessageSquare size={14} /> {topic.replies}
                    </div>
                    <div className="stat-item" title="Views">
                      <Users size={14} /> {topic.views}
                    </div>
                  </div>
                  <div className="col-activity">
                    <div className="activity-info">
                      <Clock size={14} className="text-secondary" />
                      <span>{topic.lastActive}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forums;
