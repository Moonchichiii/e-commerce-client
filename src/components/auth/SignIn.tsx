import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import { useToast } from '../../hooks/useToast';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      showToast('Login successful', 'success');
      navigate('/home');
    } catch (error) {
      showToast('Login failed. Please check your credentials.', 'error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background-light">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-heading font-semibold text-center mb-6 text-primary">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-1">Email</label>
            <input
  id="email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
  autoComplete="username"
/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text-dark mb-1">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className="w-full p-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors duration-200">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;