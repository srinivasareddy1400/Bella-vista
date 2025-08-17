import { useEffect, useState } from 'react';
import { CheckCircle2, X, AlertCircle } from 'lucide-react';

type ToastType = 'success' | 'error';

interface CustomToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
  duration?: number;
}

export function CustomToast({ message, type, onClose, duration = 5000 }: CustomToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for fade out animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const icon = type === 'success' ? (
    <CheckCircle2 className="h-5 w-5 text-white" />
  ) : (
    <AlertCircle className="h-5 w-5 text-white" />
  );

  return (
    <div
      className={`fixed top-6 right-6 z-50 transform transition-all duration-300 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div
        className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-md`}
      >
        <div className="flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">
            {type === 'success' ? 'Success!' : 'Error!'}
          </p>
          <p className="text-sm">{message}</p>
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          className="text-white hover:text-gray-200 focus:outline-none"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
