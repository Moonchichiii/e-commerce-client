import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) return null;

  const bgColor = 
    type === 'success' ? 'bg-accent2' : 
    type === 'error' ? 'bg-accent1' : 
    'bg-accent3';

  return (
    <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 ${bgColor} text-primary px-6 py-3 rounded-full shadow-lg flex items-center`}>
      <span className="mr-4">{message}</span>
      <button onClick={onClose} className="text-primary hover:text-primary-light transition-colors duration-300">
        <X size={20} />
      </button>
    </div>
  );
};

export default Toast;