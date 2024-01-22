'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

const useResetTheme = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('light');
    }
  }, [setTheme]);

  return null;
};

export default useResetTheme;
