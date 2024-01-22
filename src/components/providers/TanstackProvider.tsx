'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';

const TanstackProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanstackProvider;
