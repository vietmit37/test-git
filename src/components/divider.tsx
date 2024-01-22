import React, { FC } from 'react';

export const Divider: FC<{ size?: number; className?: string }> = ({
  size = 8,
  ...props
}) => (
  <div
    style={{
      minHeight: size,
      backgroundColor: '#f4f5f6',
    }}
    {...props}
  />
);
