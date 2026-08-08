import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle } from 'lucide-react';
interface Toast {
  id: number;
  message: string;
}
interface ToastContextType {
  showToast: (message: string) => void;
}
const ToastContext = createContext<ToastContextType | undefined>(undefined);
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const showToast = useCallback((message: string) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  }, []);
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 items-end">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className="flex items-center gap-2 bg-surface border border-white/10 text-white px-5 py-3 rounded-2xl shadow-2xl animate-slide-up backdrop-blur-xl"
          >
            <CheckCircle size={18} className="text-volt flex-shrink-0" />
            <span className="text-[clamp(0.75rem,2.5cqw,0.875rem)] font-medium">{toast.message}</span>
          </div>
        ))}
      </div>
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
