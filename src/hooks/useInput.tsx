import React, { useState } from 'react';

const useInput = <Type,>(initialInput: Type) => {
  const [inputValue, setInputValue] = useState(initialInput);

  const handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void = e => {
    const { name, value } = e.target;

    setInputValue({ ...inputValue, [name]: value });
  };

  const reset = () => {
    setInputValue(initialInput);
  };

  return { inputValue, handleInputChange, reset };
};

export default useInput;
