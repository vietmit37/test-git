import React from 'react';
import HeaderCourse from '@/components/headers/headerCourse';

interface Layout {
  children: React.ReactNode;
}
// eslint-disable-next-line react/function-component-definition
const LayoutCourse: React.FC<Layout> = ({
  children,
}) => (
  <div className="h-screen overflow-hidden">
    <HeaderCourse />
    {children}
  </div>
);

export default LayoutCourse;
