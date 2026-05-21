import React, { useState } from 'react';
import { Play, Image as ImageIcon } from 'lucide-react';
import './Gallery.css';

const mockMedia = [
  { id: '1', type: 'image', url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800', title: 'Q3 Team Offsite', category: 'Events' },
  { id: '2', type: 'image', url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800', title: 'Brainstorming Session', category: 'Work' },
  { id: '3', type: 'video', url: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800', title: 'CEO Townhall Highlights', category: 'Videos' },
  { id: '4', type: 'image', url: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800', title: 'Diwali Celebrations', category: 'Culture' },
  { id: '5', type: 'image', url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800', title: 'Annual Hackathon Winners', category: 'Events' },
  { id: '6', type: 'video', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800', title: 'New Office Walkthrough', category: 'Videos' },
];

const categories = ['All', 'Events', 'Work', 'Culture', 'Videos'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMedia = activeCategory === 'All' 
    ? mockMedia 
    : mockMedia.filter(m => m.category === activeCategory);

  return (
    <div className="gallery-container animate-fade-in">
      <div className="page-header">
        <h1>Media Gallery</h1>
        <p>Relive our best moments, events, and celebrations.</p>
      </div>

      <div className="gallery-tabs">
        {categories.map(cat => (
          <button 
            key={cat}
            className={`gallery-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="masonry-grid">
        {filteredMedia.map(media => (
          <div key={media.id} className="gallery-item glass-card">
            <div className="media-wrapper">
              <img src={media.url} alt={media.title} className="gallery-img" />
              {media.type === 'video' && (
                <div className="video-overlay">
                  <Play size={40} className="play-icon" />
                </div>
              )}
            </div>
            <div className="gallery-item-info">
              <h4>{media.title}</h4>
              <div className="item-meta">
                {media.type === 'video' ? <Play size={14} /> : <ImageIcon size={14} />}
                <span>{media.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
