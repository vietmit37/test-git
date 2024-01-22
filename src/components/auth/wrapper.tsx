'use client';

import React, { useLayoutEffect } from 'react';
import AuthBackground from '@/components/auth/auth-background';

function AuthWrapper({ children }:any) {
  useLayoutEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);
  return (
    <div className="m-auto">
      <AuthBackground />
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="min-w-[500px] flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-10 h-10 mr-2" src="https://www.internship.edu.vn/wp-content/uploads/Logo-Marico-200x206.png" alt="logo" />
            Marico
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default AuthWrapper;
