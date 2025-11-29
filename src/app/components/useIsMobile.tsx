import { useState, useEffect } from 'react';

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () =>
      window.removeEventListener('resize', check);
  }, []);

  return isMobile;
};

export default useIsMobile;
