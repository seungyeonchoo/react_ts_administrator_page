import React, { useState } from 'react';

const useInput = <Type,>(initialInput: Type) => {
  const [inputValue, setInputValue] = useState(initialInput);

  const handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void = e => {
    const { name, value } = e.target;

    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void = e => {
    const { name, value } = e.target;

    setInputValue({ ...inputValue, [name]: value });
  };

  const handleCheckInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void = e => {
    const { name, checked } = e.target;

    setInputValue({ ...inputValue, [name]: checked });
  };

  const handleSetInput: (input: Type) => void = input => {
    setInputValue(input);
  };

  const reset = () => {
    setInputValue(initialInput);
  };

  return {
    inputValue,
    handleInputChange,
    handleSelectChange,
    handleCheckInputChange,
    handleSetInput,
    reset,
  };
};

export default useInput;
