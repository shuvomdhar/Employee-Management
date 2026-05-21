import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import './Login.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = login({ email, password });
    if (!res.ok) {
      setError(res.message);
      return;
    }
    navigate('/', { replace: true });
  };

  return (
    <div className="auth-page glass-card">
      <h2>Sign in</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        {error && <div className="auth-error">{error}</div>}
        <button className="btn primary" type="submit">Sign in</button>
      </form>
      <div className="auth-footer">Don't have an account? <Link to="/register">Register</Link></div>
    </div>
  );
};

export default Login;
