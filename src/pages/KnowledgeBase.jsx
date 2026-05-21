import React, { useState } from 'react';
import { FileText, Folder, Search, Download, ExternalLink, ChevronRight } from 'lucide-react';
import './KnowledgeBase.css';

const mockDocs = [
  { id: '1', title: 'Employee Handbook 2023', category: 'HR Policies', size: '2.4 MB', type: 'PDF' },
  { id: '2', title: 'Remote Work Guidelines', category: 'HR Policies', size: '1.1 MB', type: 'PDF' },
  { id: '3', title: 'Brand Guidelines v2.0', category: 'Marketing', size: '15.6 MB', type: 'PDF' },
  { id: '4', title: 'Q3 Financial Review', category: 'Finance', size: '4.2 MB', type: 'PPTX' },
  { id: '5', title: 'Engineering Onboarding', category: 'Engineering', size: 'N/A', type: 'Link' },
  { id: '6', title: 'Security Best Practices', category: 'IT & Security', size: '800 KB', type: 'PDF' },
];

const categories = ['All', 'HR Policies', 'Marketing', 'Finance', 'Engineering', 'IT & Security'];

const KnowledgeBase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDocs = mockDocs.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || doc.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="knowledge-container animate-fade-in">
      <div className="page-header">
        <h1>Knowledge & Reference Hub</h1>
        <p>Your central repository for policies, handbooks, and important documents.</p>
      </div>

      <div className="knowledge-layout">
        <aside className="knowledge-sidebar glass-card">
          <h3>Categories</h3>
          <ul className="category-list">
            {categories.map(cat => (
              <li 
                key={cat} 
                className={activeCategory === cat ? 'active' : ''}
                onClick={() => setActiveCategory(cat)}
              >
                <Folder size={18} className={activeCategory === cat ? 'text-primary' : 'text-secondary'} />
                {cat}
              </li>
            ))}
          </ul>
        </aside>

        <div className="knowledge-content">
          <div className="search-box glass-panel mb-4">
            <Search size={18} className="text-secondary" />
            <input 
              type="text" 
              placeholder="Search documents by title..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="docs-list glass-card">
            <div className="docs-header">
              <div className="col-name">Document Name</div>
              <div className="col-category">Category</div>
              <div className="col-size">Size</div>
              <div className="col-actions"></div>
            </div>
            
            {filteredDocs.length > 0 ? filteredDocs.map(doc => (
              <div key={doc.id} className="doc-row">
                <div className="col-name">
                  <FileText size={20} className="text-primary" />
                  <span>{doc.title}</span>
                  <span className="doc-badge">{doc.type}</span>
                </div>
                <div className="col-category">{doc.category}</div>
                <div className="col-size">{doc.size}</div>
                <div className="col-actions">
                  {doc.type === 'Link' ? (
                    <button className="btn btn-ghost btn-sm" title="Open Link"><ExternalLink size={18} /></button>
                  ) : (
                    <button className="btn btn-ghost btn-sm" title="Download"><Download size={18} /></button>
                  )}
                </div>
              </div>
            )) : (
              <div className="no-docs">No documents found in this category.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
