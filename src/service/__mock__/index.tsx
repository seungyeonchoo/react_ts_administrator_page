import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { QueryClient, QueryClientProvider } from 'react-query';
import MockAdapter from 'axios-mock-adapter';

import instance from '../http';
import { rootReducer } from '../../store';

export const mock = new MockAdapter(instance, { onNoMatch: 'throwException' });

export const providerWrapper = () => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  const mockStore = configureStore({
    reducer: rootReducer,
  });
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <Provider store={mockStore}>{children}</Provider>
    </QueryClientProvider>
  );
};

export const mockNav = jest.fn();
