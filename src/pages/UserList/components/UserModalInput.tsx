import React from 'react';
import LabelWithInput from '../../../component/Common/LabelWithInput';
import useInput from '../../../hooks/useInput';

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
  created_at: string; // new Date()
  updated_at: string; // new Date()
}

interface InitialUserSetting {
  userId: number;
  allow_marketing_push: boolean;
  allow_invest_push: boolean;
  is_active: boolean;
  is_staff: boolean;
  created_at: string;
  updated_at: string;
}
interface TProps {
  userInput: InitialUser;
  settingInput: InitialUserSetting;
  handleUserInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSettingInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const UserModalInput = ({
  userInput,
  settingInput,
  handleUserInputChange,
  handleSettingInputChange,
}: TProps) => {
  return (
    <form>
      <LabelWithInput labelTitle="name">
        <input type="text" name="name" value={userInput.name} onChange={handleUserInputChange} />
      </LabelWithInput>

      <LabelWithInput labelTitle="profile image">
        <input type="file" name="photo" value={userInput.photo} onChange={handleUserInputChange} />
      </LabelWithInput>

      <LabelWithInput labelTitle="phone number">
        <input
          type="text"
          name="phone_number"
          value={userInput.phone_number}
          onChange={handleUserInputChange}
        />
      </LabelWithInput>

      <LabelWithInput labelTitle="birth day">
        <input
          type="date"
          name="birth_date"
          value={userInput.birth_date}
          onChange={handleUserInputChange}
        />
      </LabelWithInput>

      <LabelWithInput labelTitle="email">
        <input type="email" name="email" value={userInput.email} onChange={handleUserInputChange} />
      </LabelWithInput>

      <LabelWithInput labelTitle="address">
        <input
          type="text"
          name="address"
          value={userInput.address}
          onChange={handleUserInputChange}
        />
      </LabelWithInput>

      <LabelWithInput labelTitle="detail address">
        <input
          type="text"
          name="detail_address"
          value={userInput.detail_address}
          onChange={handleUserInputChange}
        />
      </LabelWithInput>

      <LabelWithInput labelTitle="gender">
        <select
          name="gender_origin"
          value={userInput.gender_origin}
          onChange={handleUserInputChange}
        >
          <option value={1}>Male</option>
          <option value={2}>Female</option>
        </select>
      </LabelWithInput>
      <LabelWithInput labelTitle="is staff">
        <input type="checkbox" name="is_staff" />
      </LabelWithInput>

      <LabelWithInput labelTitle="allow invest push">
        <input type="checkbox" name="allow_invest_push" />
      </LabelWithInput>

      <LabelWithInput labelTitle="allow marketing push">
        <input type="checkbox" name="allow_marketing_push" />
      </LabelWithInput>

      <LabelWithInput labelTitle="is active">
        <input type="checkbox" name="is_active" />
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
