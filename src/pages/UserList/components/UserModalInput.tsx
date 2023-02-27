import React from 'react';
import Input from '../../../component/Common/Input';
import LabelWithInput from '../../../component/Common/LabelWithInput';

interface InitialUser {
  photo: string;
  name: string;
  password: string;
  email: string;
  age: number; // new Date().getFullYear() - new Date(birth_date).getFullYear()
  gender_origin: number;
  birth_date: string;
  phone_number: string; //
  address: string;
  detail_address: string;
  last_login: string;
  allow_marketing_push: boolean;
  allow_invest_push: boolean;
  is_active: boolean;
  is_staff: boolean;
  created_at: string; // new Date()
  updated_at: string; // new Date()
}

interface TProps {
  userInput: InitialUser;
  handleUserInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSettingInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const UserModalInput = ({
  userInput,
  handleUserInputChange,
  handleSettingInputChange,
  handleSelectChange,
}: TProps) => {
  return (
    <form>
      <LabelWithInput labelTitle="name">
        <Input type="text" name="name" value={userInput.name} onChange={handleUserInputChange} />
      </LabelWithInput>

      <LabelWithInput labelTitle="profile image">
        <Input type="file" name="photo" value={userInput.photo} onChange={handleUserInputChange} />
      </LabelWithInput>

      <LabelWithInput labelTitle="phone number">
        <Input
          type="text"
          name="phone_number"
          value={userInput.phone_number}
          onChange={handleUserInputChange}
        />
      </LabelWithInput>

      <LabelWithInput labelTitle="birth day">
        <Input
          type="date"
          name="birth_date"
          value={userInput.birth_date}
          onChange={handleUserInputChange}
        />
      </LabelWithInput>

      <LabelWithInput labelTitle="email">
        <Input type="email" name="email" value={userInput.email} onChange={handleUserInputChange} />
      </LabelWithInput>

      <LabelWithInput labelTitle="address">
        <Input
          type="text"
          name="address"
          value={userInput.address}
          onChange={handleUserInputChange}
        />
      </LabelWithInput>

      <LabelWithInput labelTitle="detail address">
        <Input
          type="text"
          name="detail_address"
          value={userInput.detail_address}
          onChange={handleUserInputChange}
        />
      </LabelWithInput>

      <LabelWithInput labelTitle="gender">
        <select name="gender_origin" value={userInput.gender_origin} onChange={handleSelectChange}>
          <option value={1}>Male</option>
          <option value={2}>Female</option>
        </select>
      </LabelWithInput>
      <LabelWithInput labelTitle="is staff">
        <Input type="checkbox" name="is_staff" onChange={handleSettingInputChange} />
      </LabelWithInput>

      <LabelWithInput labelTitle="allow invest push">
        <Input type="checkbox" name="allow_invest_push" onChange={handleSettingInputChange} />
      </LabelWithInput>

      <LabelWithInput labelTitle="allow marketing push">
        <Input type="checkbox" name="allow_marketing_push" onChange={handleSettingInputChange} />
      </LabelWithInput>

      <LabelWithInput labelTitle="is active">
        <Input type="checkbox" name="is_active" onChange={handleSettingInputChange} />
      </LabelWithInput>
    </form>
  );
};

export default UserModalInput;

// export interface TUser {
//     id: number;
//     uuid: string;
//     photo: string;
//     name: string;
//     email: string;
//     age: number; // new Date().getFullYear() - new Date(birth_date).getFullYear()
//     gender_origin: number;
//     birth_date: string;
//     phone_number: string; //
//     address: string;
//     detail_address: string;
//     last_login: string;
//     created_at: string; // new Date()
//     updated_at: string; // new Date()
//     accounts: TAccount[];
//   }

//   export interface TUserSetting {
//     id: number;
//     uuid: string;
//     userId: number;
//     allow_marketing_push: boolean;  // checkbox
//     allow_invest_push: boolean; // checkbox
//     is_active: boolean; // checkbox
//     is_staff: boolean; // checkbox
//     created_at: string; // new Date()
//     updated_at: string; // new Date()
//   }
