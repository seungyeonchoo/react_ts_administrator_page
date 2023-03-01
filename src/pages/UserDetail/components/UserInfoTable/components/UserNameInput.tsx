import React from 'react';
interface Props {
  input: { name: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserNameInput = ({ input, handleInputChange }: Props) => {
  return <input type="text" name="name" value={input.name} onChange={handleInputChange} />;
};

export default UserNameInput;
