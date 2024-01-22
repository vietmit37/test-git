'use client';

import React from 'react';

import { ThemeProviderProps } from 'next-themes/dist/types';
import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import LayoutClient from '@/layouts/LayoutClient/LayoutClient';
import LayoutCourse from '@/layouts/LayoutClient/LayoutCourse';

// eslint-disable-next-line react/function-component-definition
const ThemeClient: React.FC<ThemeProviderProps> = ({ children, ...props }) => {
  const isAuthLayout = usePathname().includes('auth');
  const isCourseLayout = usePathname().includes('/course-media');
  const LayoutComponent = isCourseLayout ? LayoutCourse : LayoutClient;

  return (
    <ThemeProvider {...props}>
      {isAuthLayout ? (
        children
      ) : (
        <LayoutComponent>
          {children}
        </LayoutComponent>
      )}
    </ThemeProvider>
  );
};

export default ThemeClient;
