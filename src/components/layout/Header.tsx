import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    isAuthenticated: boolean;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-heading font-bold text-primary">MyStore</Link>
                
                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-4">
                    <Link to="/" className="text-text-dark hover:text-primary">Home</Link>
                    <Link to="/products" className="text-text-dark hover:text-primary">Products</Link>
                    {isAuthenticated && <Link to="/cart" className="text-text-dark hover:text-primary">Cart</Link>}
                </nav>
                
                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-text-dark"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? 'Close' : 'Menu'}
                </button>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white py-2">
                    <Link to="/" className="block px-4 py-2 text-text-dark hover:bg-primary hover:text-white">Home</Link>
                    <Link to="/products" className="block px-4 py-2 text-text-dark hover:bg-primary hover:text-white">Products</Link>
                    {isAuthenticated && <Link to="/cart" className="block px-4 py-2 text-text-dark hover:bg-primary hover:text-white">Cart</Link>}
                </div>
            )}
        </header>
    );
};

export default Header;
