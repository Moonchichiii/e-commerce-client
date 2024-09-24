import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark text-text-light py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-xl font-heading font-semibold mb-2">MyStore</h3>
            <p className="text-sm">Your one-stop shop for amazing products.</p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-heading font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/products" className="hover:text-primary">Products</Link></li>
              <li><Link to="/cart" className="hover:text-primary">Cart</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-heading font-semibold mb-2">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary">
                Twitter
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary">
                Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-sm text-center">
          <p>&copy; 2024 MyStore. All rights reserved.</p>
          <p className="mt-2">
            Powered by <a href="https://zustand-demo.pmnd.rs/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Zustand</a> and <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stripe</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;