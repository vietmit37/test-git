'use client';

import React from 'react';

interface IButtonProps {
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}

function Button(props: IButtonProps) {
  const {
    loading, disabled, className, children, onClick,
  } = props;
  return (
    <button
      disabled={disabled || loading}
      className={`w-full flex gap-2 items-center cursor-pointer ${className}`}
      onClick={() => onClick()}
    >
      {loading && (
        <svg className="-ml-1 h-5 w-5 animate-spin text-white" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path
            className="opacity-60"
            fill="white"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}

export default Button;
