import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="bg-primary text-secondary py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-heading font-bold mb-6">Discover Your Style</h1>
        <p className="text-xl mb-8 max-w-2xl">Explore our curated collection of premium products designed to elevate your lifestyle.</p>
        <Link to="/products" className="btn bg-accent1 text-primary hover:bg-accent1-dark transition-colors duration-300 text-lg px-8 py-3">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;