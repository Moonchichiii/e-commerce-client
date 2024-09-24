import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-primary text-secondary py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-xl font-heading font-semibold mb-4">E-commerce</h3>
          <p className="text-sm">Your one-stop shop for premium products.</p>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><Link to="/" className="hover:text-accent1 transition-colors duration-300">Home</Link></li>
            <li><Link to="/products" className="hover:text-accent1 transition-colors duration-300">Products</Link></li>
            <li><Link to="/cart" className="hover:text-accent1 transition-colors duration-300">Cart</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h4 className="text-lg font-heading font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent1 transition-colors duration-300">
              <Twitter size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent1 transition-colors duration-300">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent1 transition-colors duration-300">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-secondary-dark text-sm text-center">
        <p>&copy; 2024 E-commerce. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
