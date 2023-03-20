import React from 'react';
import LabelWithInput from '../../../component/Common/LabelWithInput';

interface Props {
  loginInput: { email: string; password: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput = ({ loginInput, handleInputChange }: Props) => {
  return (
    <>
      <LabelWithInput labelTitle="email">
        <input
          type="email"
          name="email"
          aria-label="email"
          value={loginInput.email}
          onChange={handleInputChange}
        />
      </LabelWithInput>
      <LabelWithInput labelTitle="password">
        <input
          type="password"
          name="password"
          aria-label="password"
          value={loginInput.password}
          onChange={handleInputChange}
        />
      </LabelWithInput>
    </>
  );
};

export default AuthInput;
