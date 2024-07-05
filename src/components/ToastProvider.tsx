// components/ToastProvider.tsx
'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

type ToastType = 'message' | 'angry' | 'info' | 'warning' | 'error';

interface Toast {
  text: string;
  type: ToastType;
}

interface ToastContextType {
  addToast: (text: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<Toast | null>(null);

  const addToast = useCallback((text: string, type: ToastType) => {
    setToast({ text, type });

    // Clear the toast after 3 seconds
    setTimeout(() => {
      setToast(null);
    }, 4000); // Duration for which the toast will be visible
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {toast && (
        <div
          className={`fixed bottom-4 right-4 p-4 rounded ${
            toast.type === 'error' ? 'bg-red-500' :
            toast.type === 'warning' ? 'bg-yellow-500' :
            toast.type === 'info' ? 'bg-blue-500' :
            toast.type === 'angry' ? 'bg-red-800' :
            'bg-green-500'
          } text-white`}
        >
          {toast.text}
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
