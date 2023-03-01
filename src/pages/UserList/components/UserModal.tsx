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
  allow_marketing_push: boolean;
  allow_invest_push: boolean;
  is_active: boolean;
  is_staff: boolean;
  last_login: string;
  created_at: string; // new Date()
  updated_at: string; // new Date()
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
  allow_marketing_push: false,
  allow_invest_push: false,
  is_active: false,
  is_staff: false,
  created_at: new Date().toString(),
  updated_at: new Date().toString(),
};

const UserModal = ({
  showModal,
  handleShowModal,
}: {
  showModal: boolean;
  handleShowModal: () => void;
}) => {
  const {
    inputValue: userInput,
    handleInputChange: handleUserInputChange,
    handleCheckInputChange: handleSettingInputChange,
    handleSelectChange,
  } = useInput<InitialUser>(initialUser);

  const { mutate: createUser } = useMutate('/signup', 'post', userInput);

  const handleCreateUser = () => {
    createUser(userInput);
    handleShowModal();
  };

  return (
    <dialog open={showModal}>
      <h1>create new user</h1>
      <UserModalInput
        userInput={userInput}
        handleUserInputChange={handleUserInputChange}
        handleSettingInputChange={handleSettingInputChange}
        handleSelectChange={handleSelectChange}
      />
      <div>
        <button onClick={handleCreateUser}>create</button>
        <button onClick={() => handleShowModal()}>cancel</button>
      </div>
      {/* button wrapper */}
    </dialog>
  );
};

export default UserModal;
