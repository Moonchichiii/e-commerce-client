import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import { useToast } from '../../hooks/useToast';
import { EU_COUNTRIES } from '../../types/country';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirm_password: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    address: '',
    post_code: '',
    country: '',
  });
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      showToast('Passwords do not match', 'error');
      return;
    }
    try {
      const response = await api.post('/api/accounts/register/', formData);
      showToast('Registration successful. Please check your email to verify your account.', 'success');
      navigate('/email-verification');
    } catch (error: any) {
      if (error.response && error.response.data) {
        const errorMessages = Object.values(error.response.data).flat();
        showToast(errorMessages.join(' '), 'error');
      } else {
        showToast('Registration failed. Please try again.', 'error');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-heading font-semibold text-center text-primary">Sign Up</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
          <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
          autoComplete="username"
        />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
              autoComplete="new-password"
            />
            <input
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
              autoComplete="new-password"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="Phone Number (+999999999)"
              required
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <input
              type="text"
              name="post_code"
              value={formData.post_code}
              onChange={handleChange}
              placeholder="Post Code"
              required
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option value="">Select Country</option>
              {EU_COUNTRIES.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="w-full p-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors duration-200">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;