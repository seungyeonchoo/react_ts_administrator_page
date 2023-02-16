import { renderHook, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import useFetch from './useFetch';
import MockAdapter from 'axios-mock-adapter';
import instance from '../service/http';

const mock = new MockAdapter(instance, { onNoMatch: 'throwException' });

beforeAll(() => {
  mock.reset();
});

const createWrapper = () => {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('useFetch custom hook', () => {
  it('fetch data', async () => {
    mock.onGet('/users').reply(200, { users: [{ id: 1, name: 'Jonh' }] });

    const { result } = renderHook(() => useFetch('/users', ['users']), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual({ users: [{ id: 1, name: 'Jonh' }] });
  });
});

export default {};
