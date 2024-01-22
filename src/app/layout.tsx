import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/global.scss';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import ThemeClient from '@/theme/ThemeClient';
import { StoreProvider } from '@/components/providers/StoreProvider';
import TanstackProvider from '@/components/providers/TanstackProvider';
import { CookiesProvider } from 'next-client-cookies/server';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Sales Training Online',
  icons: './icon.png',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.variable} bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}>
        {/* <StoreProvider> */}
        {/*  <TanstackProvider> */}
        {/*    <StyledComponentsRegistry> */}
        {/*      <CookiesProvider> */}
        <ThemeClient attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeClient>
        {/*      </CookiesProvider> */}
        {/*    </StyledComponentsRegistry> */}
        {/*  </TanstackProvider> */}
        {/* </StoreProvider> */}
      </body>
    </html>
  );
}
