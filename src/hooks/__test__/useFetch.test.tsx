import { renderHook, waitFor } from '@testing-library/react';
import useFetch from '../useFetch';
import { providerWrapper, mock } from '../../service/__mock__';

describe('useFetch custom hook', () => {
  it('with Success', async () => {
    const { result } = renderHook(() => useFetch('/users'), {
      wrapper: providerWrapper(),
    });

    mock.onGet('/users').reply(200, { users: [{ id: 1, name: 'John' }] });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual({ users: [{ id: 1, name: 'John' }] });
  });

  it('with Error', async () => {
    const { result } = renderHook(() => useFetch('/users'), {
      wrapper: providerWrapper(),
    });

    mock.onGet('/users').reply(500);

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });
});

export default {};
