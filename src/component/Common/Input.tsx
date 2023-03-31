import React from 'react';

interface InputProps {
  type: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, name, value, onChange }: InputProps) => {
  return <input type={type} name={name} value={value} onChange={onChange ? onChange : undefined} />;
};

export default Input;
