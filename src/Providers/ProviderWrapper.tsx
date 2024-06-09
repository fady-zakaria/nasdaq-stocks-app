import React, {FC, ReactNode} from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type props = {
    children: ReactNode;
};
const queryClient = new QueryClient();

const ProviderWrapper: FC<props> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ProviderWrapper;
