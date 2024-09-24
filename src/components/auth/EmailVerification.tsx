import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import useAuthStore from '../../store/authStore';
import { useToast } from '../../hooks/useToast';

const EmailVerification: React.FC = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const navigate = useNavigate();
  const setEmailVerified = useAuthStore((state) => state.setEmailVerified);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/api/accounts/verify-email/', { code: verificationCode });
      setEmailVerified(true);
      showToast('Email verified successfully', 'success');
      navigate('/home');
    } catch (error) {
      showToast('Email verification failed. Please try again.', 'error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background-light">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-heading font-semibold text-center mb-6 text-primary">Verify Email</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="verificationCode" className="block text-sm font-medium text-text-dark mb-1">Verification Code</label>
            <input
              id="verificationCode"
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Enter your verification code"
              required
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <button 
            type="submit" 
            className="w-full p-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors duration-200"
          >
            Verify Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;