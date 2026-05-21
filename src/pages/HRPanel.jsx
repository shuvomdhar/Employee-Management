import React from 'react';
import { useAuth } from '../auth/AuthContext';

const HRPanel = () => {
  const { current } = useAuth();
  if (!current || current.role !== 'hr') {
    return <div className="glass-card">Access denied. HR only.</div>;
  }

  return (
    <div className="glass-card">
      <h2>HR Panel</h2>
      <p>Welcome, {current.name}. This area contains HR-only features like announcements management, onboarding carousel, and moderation tools.</p>
    </div>
  );
};

export default HRPanel;
