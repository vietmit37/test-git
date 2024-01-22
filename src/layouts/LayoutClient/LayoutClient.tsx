'use client';

import React from 'react';
import Header from '@/components/headers/header';
import Footer from '@/components/footer';

interface LayoutAdminProps {
  children: React.ReactNode;
}

// eslint-disable-next-line react/function-component-definition
const LayoutAdmin: React.FC<LayoutAdminProps> = ({
  children,
}) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>

);

export default LayoutAdmin;
