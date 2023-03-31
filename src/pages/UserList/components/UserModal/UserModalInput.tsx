import React from 'react';
export interface InitialUser {
  photo: string;
  name: string;
  password: string;
  email: string;
  age: number;
  gender_origin: number;
  birth_date: string;
  phone_number: string;
  address: string;
  detail_address: string;
  last_login: string;
  allow_marketing_push: boolean;
  allow_invest_push: boolean;
  is_active: boolean;
  is_staff: boolean;
  created_at: string;
  updated_at: string;
}

interface TProps {
  userInput: InitialUser;
  handleUserInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const UserModalInput = ({ userInput, handleUserInputChange, handleSelectChange }: TProps) => {
  return (
    <section className="grid grid-cols-2 justify-items-center w-full text-sm">
      <label className="grid grid-cols-1 col-span-2 p-3 w-full">
        name
        <input
          type="text"
          name="name"
          value={userInput.name}
          onChange={handleUserInputChange}
          className="h-8 mt-2 px-3 font-normal rounded-md border border-gray-400 outline-blue-800"
        />
      </label>

      <label className="grid grid-cols-1 p-3 w-full">
        contact
        <input
          type="text"
          name="phone_number"
          value={userInput.phone_number}
          onChange={handleUserInputChange}
          className="h-8 mt-2 px-3 font-normal rounded-md border border-gray-400 outline-blue-800"
        />
      </label>

      <label className="grid grid-cols-1 p-3 w-full">
        birth day
        <input
          type="text"
          name="birth_date"
          value={userInput.birth_date}
          onChange={handleUserInputChange}
          className="h-8 mt-2 px-3 font-normal rounded-md border border-gray-400 outline-blue-800"
        />
      </label>

      <label className="grid grid-cols-1 p-3 w-full">
        email
        <input
          type="email"
          name="email"
          value={userInput.email}
          onChange={handleUserInputChange}
          className="h-8 mt-2 px-3 font-normal rounded-md border border-gray-400 outline-blue-800"
        />
      </label>

      <label className="grid grid-cols-1 p-3 w-full">
        gender
        <select
          name="gender_origin"
          value={userInput.gender_origin}
          onChange={handleSelectChange}
          className="h-8 mt-2 text-center font-normal rounded-md border border-gray-400 outline-blue-800"
        >
          <option value={1}>Male</option>
          <option value={2}>Female</option>
        </select>
      </label>

      <label className="grid grid-cols-1 col-span-2 p-3 w-full">
        address
        <input
          type="text"
          name="address"
          value={userInput.address}
          onChange={handleUserInputChange}
          className="h-8 mt-2 px-3 font-normal rounded-md border border-gray-400 outline-blue-800"
        />
      </label>

      <label className="grid grid-cols-1 col-span-2 p-3 w-full">
        detail address
        <input
          type="text"
          name="detail_address"
          value={userInput.detail_address}
          onChange={handleUserInputChange}
          className="h-8 mt-2 px-3 font-normal rounded-md border border-gray-400 outline-blue-800"
        />
      </label>
    </section>
  );
};

export default UserModalInput;
