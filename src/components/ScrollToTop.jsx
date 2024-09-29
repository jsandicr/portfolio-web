import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;