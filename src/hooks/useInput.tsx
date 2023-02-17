import React, { useState } from 'react';

const useInput = <Type,>(initialInput: Type) => {
  const [inputValue, setInputValue] = useState(initialInput);

  const handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return { inputValue, handleInputChange };
};

export default useInput;
