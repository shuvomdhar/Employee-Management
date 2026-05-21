import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import './Login.css';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = register({ name, email, password });
    if (!res.ok) {
      setError(res.message);
      return;
    }
    navigate('/', { replace: true });
  };

  return (
    <div className="auth-page glass-card">
      <h2>Create account</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label>Full name</label>
        <input value={name} onChange={e => setName(e.target.value)} required />
        <label>Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        {error && <div className="auth-error">{error}</div>}
        <button className="btn primary" type="submit">Register</button>
      </form>
      <div className="auth-footer">Already registered? <Link to="/login">Sign in</Link></div>
    </div>
  );
};

export default Register;
