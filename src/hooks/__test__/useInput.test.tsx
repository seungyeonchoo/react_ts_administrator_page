import { renderHook, act } from '@testing-library/react';
import React from 'react';
import useInput from '../useInput';

const event = { target: { name: 'name', value: 'test' } };

describe('useInput custom hook', () => {
  it('should update when input value is changed', () => {
    const { result } = renderHook(() => useInput({}));

    expect(result.current.inputValue).toEqual({});

    act(() => result.current.handleInputChange(event as React.ChangeEvent<HTMLInputElement>));

    expect(result.current.inputValue).toEqual({ name: 'test' });
  });

  it('should reset when reset function is called', () => {
    const { result } = renderHook(() => useInput({}));

    expect(result.current.inputValue).toEqual({});

    act(() => result.current.handleInputChange(event as React.ChangeEvent<HTMLInputElement>));

    expect(result.current.inputValue).toEqual({ name: 'test' });

    act(() => result.current.reset());

    expect(result.current.inputValue).toEqual({});
  });
});

export default {};
