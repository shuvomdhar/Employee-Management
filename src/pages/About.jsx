import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Compass, Award, Shield, ArrowLeft, TrendingUp, Users, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      {/* Back Button */}
      <div className="about-header-nav animate-fade-in delay-100">
        <button className="btn btn-outline btn-sm back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={16} /> Back to Dashboard
        </button>
      </div>

      {/* Strategic Hub Hero */}
      <section className="about-hero glass-card animate-fade-in delay-100">
        <div className="about-hero-content">
          <span className="badge badge-primary">Corporate Strategy</span>
          <h1>Nexus Alignment & Strategy Hub</h1>
          <p className="lead-text">
            Welcome to the central command for our organizational vision. Here, we outline the roadmap, focus areas, 
            and core cultural pillars that drive the Nexus ecosystem. Our alignment is our power.
          </p>
        </div>
        <div className="about-hero-visual">
          <Compass size={130} className="about-hero-icon animate-pulse" />
        </div>
      </section>

      {/* Detailed Q3 Strategy */}
      <div className="about-grid">
        {/* Core Vision & Mission */}
        <section className="strategy-card glass-card animate-fade-in delay-200">
          <h2>Our Core Mandate</h2>
          <p className="strategy-p">
            Nexus was established not just as an intranet, but as a living bridge between all departments, verticals, and employees. 
            Our focus is built upon three pillars: <strong>Visibility, Engagement, and Alignment</strong>.
          </p>
          <div className="value-list">
            <div className="value-item">
              <TrendingUp className="value-icon text-primary" size={24} />
              <div>
                <h4>Accelerated Visibility</h4>
                <p>Ensuring every project win, major footprint milestone, and departmental update is visible to all, celebrating achievements globally.</p>
              </div>
            </div>
            <div className="value-item">
              <Users className="value-icon text-secondary" size={24} />
              <div>
                <h4>Unified Engagement</h4>
                <p>Bridging geographical and departmental silos through active discussion forums, centralized events calendars, and gamified recognition.</p>
              </div>
            </div>
            <div className="value-item">
              <Zap className="value-icon text-warning" size={24} />
              <div>
                <h4>Strategic Alignment</h4>
                <p>Keeping every team member working towards the same core objectives, providing transparent executive insights and monthly townhall outcomes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Q3 Strategic Pillars */}
        <section className="strategy-card glass-card animate-fade-in delay-300">
          <h2>Q3 Execution Roadmap</h2>
          <div className="roadmap-timeline">
            <div className="timeline-step">
              <div className="step-badge">Pillar 1</div>
              <div className="step-content">
                <h4>Scale & Platform Consolidation</h4>
                <p>Enhancing technical architecture to support organization-wide scalability while keeping page load speeds under 1.2s globally.</p>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-badge">Pillar 2</div>
              <div className="step-content">
                <h4>Dynamic Department Spaces</h4>
                <p>Enabling custom, secure hubs for each vertical, ensuring functional team isolation while retaining centralized search discoverability.</p>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-badge">Pillar 3</div>
              <div className="step-content">
                <h4>Aesthetic Excellence & UX</h4>
                <p>Introducing premium dark-mode default glassmorphism, making communication not just informative but beautiful and engaging.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Leadership Statement */}
      <section className="leadership-quote glass-card animate-fade-in delay-300">
        <div className="quote-icon">“</div>
        <div className="quote-content">
          <p className="quote-text">
            Our goal for this quarter is to accelerate active employee engagement on our intranet by 25%. We do this by 
            empowering individual and peer-to-peer recognition, fostering transparent forum discussions, and open-sourcing 
            our project pipelines. Alignment isn't just about reading strategy; it's about owning a part of it.
          </p>
          <div className="quote-author">
            <strong>Elena Rodriguez</strong>
            <span>Chief Executive Officer</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
