import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useToggle from './useToggle';

describe('useToggle custom hook', () => {
  it('update state from false to true when it is called', () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.toggle).toBe(false);

    act(() => result.current.handleToggle());

    expect(result.current.toggle).toBe(true);
  });
});

export default {};
