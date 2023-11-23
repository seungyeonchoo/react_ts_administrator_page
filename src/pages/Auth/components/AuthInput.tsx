import React from 'react';

interface Props {
  loginInput: { email: string; password: string };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput = ({ loginInput, handleInputChange }: Props) => {
  return (
    <>
      <label className="flex flex-col p-3 text-sm w-full font-bold text-gray-700">
        email
        <input
          className="h-9 mt-3 p-4 font-normal rounded-md border border-gray-400 outline-blue-800"
          type="email"
          name="email"
          aria-label="email"
          value={loginInput.email}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </label>
      <label className="flex flex-col p-3 text-sm w-full font-bold text-gray-700">
        password
        <input
          className="h-9 mt-3 p-4 font-normal rounded-md border border-gray-400 outline-blue-800"
          type="password"
          name="password"
          aria-label="password"
          value={loginInput.password}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </label>
    </>
  );
};

export default AuthInput;
