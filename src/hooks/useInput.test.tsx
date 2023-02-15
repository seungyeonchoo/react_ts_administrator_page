import { renderHook, act } from '@testing-library/react';
import React from 'react';
import useInput from './useInput';

describe('useInput custom hook', () => {
  it('update input value from empty object to name: test', () => {
    const { result } = renderHook(() => useInput());
    const event = { target: { name: 'name', value: 'test' } };

    expect(result.current.inputValue).toStrictEqual({});

    act(() => result.current.handleInputChange(event as React.ChangeEvent<HTMLInputElement>));

    expect(result.current.inputValue).toStrictEqual({ name: 'test' });
  });
});

export default {};
