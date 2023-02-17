import { renderHook, waitFor } from '@testing-library/react';
import useFetch from '../useFetch';
import { createWrapper, mock } from '../../service/__mock__';

describe('useFetch custom hook', () => {
  it('with Success', async () => {
    mock.onGet('/users').reply(200, { users: [{ id: 1, name: 'John' }] });

    const { result } = renderHook(() => useFetch('/users'), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual({ users: [{ id: 1, name: 'John' }] });
  });

  it('with Error', async () => {
    mock.onGet('/users').reply(500);

    const { result } = renderHook(() => useFetch('/users'), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });
});

export default {};
