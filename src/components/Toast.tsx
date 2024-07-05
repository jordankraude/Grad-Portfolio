// components/Toast.tsx

import React, { useState, useEffect } from 'react';

interface ToastProps {
  message: string;
  type?: 'info' | 'success' | 'error' | 'message' | 'angry'; // You can add more types as needed
  duration?: number; // Duration in milliseconds
}

const Toast: React.FC<ToastProps> = ({ message, type = 'message', duration = 5000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  const typeClasses = {
    info: 'bg-blue-500',
    success: 'bg-green-500',
    error: 'bg-red-500',
    message : 'bg-[#B5D99C]',
    angry: 'bg-red-500'

  };

  return (
    <div className={`fixed bottom-0 right-0 p-4 mb-4 mr-4 text-black rounded shadow-lg ${typeClasses[type]}`}>
      {message}
    </div>
  );
};

export default Toast;
