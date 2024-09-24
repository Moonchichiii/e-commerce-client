import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';

interface HeaderProps {
  isAuthenticated: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-secondary shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading font-bold text-primary">E-commerce</Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-primary hover:text-accent1 transition-colors duration-300">Home</Link>
          <Link to="/products" className="text-primary hover:text-accent1 transition-colors duration-300">Products</Link>
          {isAuthenticated ? (
            <Link to="/account" className="text-primary hover:text-accent1 transition-colors duration-300">
              <User className="inline-block mr-1" size={20} />
              Account
            </Link>
          ) : (
            <div className="space-x-4">
              <Link to="/signin" className="btn bg-primary text-secondary hover:bg-primary-light transition-colors duration-300">Sign In</Link>
              <Link to="/signup" className="btn bg-accent2 text-primary hover:bg-accent2-dark transition-colors duration-300">Sign Up</Link>
            </div>
          )}
          <Link to="/cart" className="text-primary hover:text-accent1 transition-colors duration-300">
            <ShoppingCart className="inline-block mr-1" size={20} />
            Cart
          </Link>
        </nav>
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-secondary py-4">
          <Link to="/" className="block px-4 py-2 text-primary hover:bg-accent1-light transition-colors duration-300">Home</Link>
          <Link to="/products" className="block px-4 py-2 text-primary hover:bg-accent1-light transition-colors duration-300">Products</Link>
          {isAuthenticated ? (
            <Link to="/account" className="block px-4 py-2 text-primary hover:bg-accent1-light transition-colors duration-300">Account</Link>
          ) : (
            <>
              <Link to="/signin" className="block px-4 py-2 text-primary hover:bg-accent1-light transition-colors duration-300">Sign In</Link>
              <Link to="/signup" className="block px-4 py-2 text-primary hover:bg-accent1-light transition-colors duration-300">Sign Up</Link>
            </>
          )}
          <Link to="/cart" className="block px-4 py-2 text-primary hover:bg-accent1-light transition-colors duration-300">Cart</Link>
        </div>
      )}
    </header>
  );
};

export default Header;