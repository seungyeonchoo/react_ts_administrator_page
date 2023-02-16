import { renderHook, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import useFetch from './useFetch';

const createWrapper = () => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('useFetch custom hook', () => {
  it('fetch data', async () => {
    const { result } = renderHook(() => useFetch('users', ['users']), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBeDefined();
  });
});

export default {};
