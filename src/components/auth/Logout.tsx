'use client';

import {
  ACCESS_TOKEN_NAME,
  REFRESH_TOKEN_NAME,
} from '@/utils/consts/token.const';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Logout: React.FC = () => {
  const router = useRouter();
  const accessToken = getCookie(ACCESS_TOKEN_NAME);
  const refreshToken = getCookie(REFRESH_TOKEN_NAME);
  useEffect(() => {
    if (!accessToken && !refreshToken) {
      router.push('login');
    }
  }, [accessToken, refreshToken, router]);

  return <></>;
};

export default Logout;
