import useInput from '../../../hooks/useInput';
import useMutate from '../../../hooks/useMutate';
import UserModalInput from './UserModalInput';

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

const initialUser = {
  photo: '',
  name: '',
  password: '12345678',
  email: '',
  age: 1,
  gender_origin: 0,
  birth_date: '',
  phone_number: '', //
  address: '',
  detail_address: '',
  last_login: '',
  created_at: new Date().toString(), // new Date()
  updated_at: new Date().toString(), // new Date()
};

let userId = 101;

const initialUserSetting = {
  userId: ++userId,
  allow_marketing_push: false,
  allow_invest_push: false,
  is_active: false,
  is_staff: false,
  created_at: new Date().toString(), // new Date()
  updated_at: new Date().toString(), // new Date()
};

const UserModal = ({
  showModal,
  handleShowModal,
}: {
  showModal: boolean;
  handleShowModal: () => void;
}) => {
  const { inputValue: userInput, handleInputChange: handleUserInputChange } =
    useInput<InitialUser>(initialUser);

  const { inputValue: settingInput, handleCheckInputChange: handleSettingInputChage } =
    useInput<InitialUserSetting>(initialUserSetting);

  const { mutate: createUser } = useMutate('/signup', 'post', userInput);

  return (
    <dialog open={showModal}>
      <h1>create new user</h1>
      <UserModalInput
        userInput={userInput}
        settingInput={settingInput}
        handleUserInputChange={handleUserInputChange}
        handleSettingInputChange={handleSettingInputChage}
      />
      <div>
        <button
          onClick={() => {
            createUser(userInput);
            handleShowModal();
          }}
        >
          create
        </button>
        <button onClick={() => handleShowModal()}>cancel</button>
      </div>
    </dialog>
  );
};

export default UserModal;
