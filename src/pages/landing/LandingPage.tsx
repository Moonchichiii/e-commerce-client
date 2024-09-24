import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <div className="min-h-screen">
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-primary-500 to-secondary-500">
        <h1 className="text-5xl font-heading text-white text-shadow">Welcome to MyStore</h1>
      </div>
      <div ref={contentRef} className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container py-16">
          <h2 className="text-3xl font-heading mb-8">Discover Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             
          </div>
          <div className="mt-12 text-center">
            <Link to="/home" className="btn btn-primary">Enter Store</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;