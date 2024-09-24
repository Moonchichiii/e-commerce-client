import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ShoppingBag, Shirt, Home } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContent(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { name: 'Electronics', icon: ShoppingBag, color: 'bg-blue-100' },
    { name: 'Fashion', icon: Shirt, color: 'bg-pink-100' },
    { name: 'Home & Living', icon: Home, color: 'bg-green-100' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="h-screen flex flex-col items-center justify-center relative bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center">
          <h1 className="text-6xl font-heading font-bold mb-4 text-white">E-commerce</h1>
          <p className="text-xl mb-8 text-gray-200">Discover our curated collection</p>
          <Link to="/home" className="btn bg-white text-gray-800 text-lg hover:bg-gray-100 transition-colors duration-300 px-8 py-3 rounded-full shadow-lg">
            Enter Store
          </Link>
        </div>
        <div className="absolute bottom-8 text-white text-center">
          <p className="mb-2">Scroll Down</p>
          <ChevronDown className="animate-bounce mx-auto" size={32} />
        </div>
      </div>
      <div ref={contentRef} className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-heading mb-12 text-center text-gray-800">Our Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={category.name} className={`p-6 rounded-lg shadow-lg ${category.color} transition-transform duration-300 hover:scale-105`}>
                <category.icon className="w-12 h-12 mb-4 text-gray-700" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{category.name}</h3>
                <p className="mb-4 text-gray-600">Explore our {category.name.toLowerCase()} collection.</p>
                <Link to="/home" className="btn bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-300 shadow">
                  Shop Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;