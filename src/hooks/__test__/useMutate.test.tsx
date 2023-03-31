import { ReactNode } from 'react';

import { renderHook, waitFor, act } from '@testing-library/react';

import useMutate from '../useMutate';

import { providerWrapper, mock } from '../../service/__mock__';

const response = {
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ld2ZhY2VAZGNvLmNvbSIsImlhdCI6MTY2MDYxNjA2NCwiZXhwIjoxNjYwNjE5NjY0LCJzdWIiOiIxMDEifQ.j7LFrULPlp4AZTFGTatmWnne_P3xLRpyI2-8ko4_Xs8',
  user: {
    email: 'newface@dco.com',
    id: 101,
  },
};
const requestInput = {
  email: 'abc@abc.com',
  password: 'abcd',
};

describe('useMutate custom hook', () => {
  describe('post method', () => {
    it('with Success', async () => {
      const { result } = renderHook(() => useMutate('signin', 'post'), {
        wrapper: providerWrapper(),
      });

      mock.onPost('/signin').reply(200, response);

      act(() => result.current.mutate(requestInput));

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      expect(result.current.data).toEqual(response);
    });

    it('with Error', async () => {
      const { result } = renderHook(() => useMutate('signin', 'post'), {
        wrapper: providerWrapper(),
      });

      mock.onPost('/signin').reply(500);

      act(() => result.current.mutate(response));

      await waitFor(() => expect(result.current.isError).toBe(true));

      expect(result.current.error).toBeDefined();
    });
  });
});

export default {};
