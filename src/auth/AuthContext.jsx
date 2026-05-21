import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AuthContext = createContext(null);

const USERS_KEY = 'empm_users_v1';
const CURRENT_KEY = 'empm_current_v1';
const HR_EMAIL = 'hr@corporate.com';

const seedUsers = () => {
  const hrUser = {
    id: uuidv4(),
    name: 'HR Admin',
    email: HR_EMAIL,
    password: 'hrpassword', // demo only; in real apps hash & use backend
    role: 'hr',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HR',
  };
  const sampleUser = {
    id: uuidv4(),
    name: 'Alex Rivera',
    email: 'alex@corporate.com',
    password: 'password123',
    role: 'employee',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
  };
  return [hrUser, sampleUser];
};

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    try {
      const raw = localStorage.getItem(USERS_KEY);
      if (raw) return JSON.parse(raw);
      const seeded = seedUsers();
      localStorage.setItem(USERS_KEY, JSON.stringify(seeded));
      return seeded;
    } catch (e) {
      return seedUsers();
    }
  });

  const [current, setCurrent] = useState(() => {
    try {
      const raw = localStorage.getItem(CURRENT_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (current) localStorage.setItem(CURRENT_KEY, JSON.stringify(current));
    else localStorage.removeItem(CURRENT_KEY);
  }, [current]);

  const register = ({ name, email, password }) => {
    const normalized = email.trim().toLowerCase();
    if (normalized === HR_EMAIL) {
      return { ok: false, message: 'Cannot register HR email.' };
    }
    if (users.find(u => u.email === normalized)) {
      return { ok: false, message: 'Email already registered.' };
    }
    const newUser = {
      id: uuidv4(),
      name,
      email: normalized,
      password,
      role: 'employee',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`,
    };
    const next = [...users, newUser];
    setUsers(next);
    setCurrent({ id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role, avatar: newUser.avatar });
    return { ok: true, user: newUser };
  };

  const login = ({ email, password }) => {
    const normalized = email.trim().toLowerCase();
    const user = users.find(u => u.email === normalized && u.password === password);
    if (!user) return { ok: false, message: 'Invalid credentials.' };
    setCurrent({ id: user.id, name: user.name, email: user.email, role: user.role, avatar: user.avatar });
    return { ok: true, user };
  };

  const logout = () => {
    setCurrent(null);
  };

  return (
    <AuthContext.Provider value={{ users, current, register, login, logout, HR_EMAIL }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
