import { useState, useCallback } from 'react';
import { CustomToast } from '@/components/ui/custom-toast';

type ToastType = 'success' | 'error';

export function useCustomToast() {
  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
    isVisible: boolean;
  } | null>(null);

  const showToast = useCallback((message: string, type: ToastType = 'success') => {
    setToast({ message, type, isVisible: true });
  }, []);

  const hideToast = useCallback(() => {
    setToast(prev => prev ? { ...prev, isVisible: false } : null);
    // Remove toast from DOM after animation
    setTimeout(() => setToast(null), 300);
  }, []);

  const Toast = () => {
    if (!toast) return null;
    
    return (
      <CustomToast
        message={toast.message}
        type={toast.type}
        onClose={hideToast}
        isVisible={toast.isVisible}
      />
    );
  };

  return { showToast, Toast };
}
