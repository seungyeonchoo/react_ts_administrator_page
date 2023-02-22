import useInput from '../../../hooks/useInput';
import UserModalInput from './UserModalInput';

interface InitailCreateNewUser {
  photo: string | null;
  name: string;
  email: string;
  age: number;
  gender_origin: number;
  birth_date: string;
  phone_number: string;
  address: string;
  detail_address: string;
  last_login: string;
  created_at: string;
  updated_at: string;
}

const UserModal = ({
  showModal,
  handleShowModal,
}: {
  showModal: boolean;
  handleShowModal: () => void;
}) => {
  const {} = useInput({});

  return (
    <dialog open={showModal}>
      <h1>create new user</h1>
      <UserModalInput />
      <div>
        <button>create</button>
        <button onClick={() => handleShowModal()}>cancel</button>
      </div>
    </dialog>
  );
};

export default UserModal;
