// url, method, item? => return data, handleMutation

import { renderHook, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import useMutate from './useFetch';
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

describe('useMutate custom hook', () => {
  it('post data using custom hook', async () => {
    mock.onPost('/signin').reply(200, { access_Token: 'token', user: { name: 'Choo', id: 1 } });

    const { result } = renderHook(
      () => useMutate('/signin', 'post', { email: 'abc@abc.com', password: '12345678' }),
      { wrapper: createWrapper() }
    );

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual({ access_Token: 'token', user: { name: 'Choo', id: 1 } });
  });
});
