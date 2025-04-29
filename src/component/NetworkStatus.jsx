import { useEffect, useState } from 'react';

const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOnline = () => {
    setIsOnline(true);
    document.body.classList.remove('offline');
  };

  const handleOffline = () => {
    setIsOnline(false);
    document.body.classList.add('offline');
  };

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial check
    if (!navigator.onLine) {
      document.body.classList.add('offline');
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="flex items-center justify-center gap-2 text-center py-3 font-semibold transition-all duration-300 bg-red-100 text-red-700">
      <div className="animate-spin rounded-full h-5 w-5 border-2 border-red-500 border-t-transparent"></div>
      ⚠️ You are offline. Please check your connection...
    </div>
  );
};

export default NetworkStatus;
