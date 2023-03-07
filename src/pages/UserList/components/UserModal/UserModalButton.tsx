import useMutate from '../../../../hooks/useMutate';
import { InitialUser } from './UserModalInput';

interface Props {
  userInput: InitialUser;
  handleShowModal: () => void;
  reset: () => void;
}

const UserModalButton = ({ userInput, handleShowModal, reset }: Props) => {
  const { mutate: createUser } = useMutate('/signup', 'post', userInput);
  const { name, email, birth_date, phone_number, address, detail_address } = userInput;

  const handleCreateUser = () => {
    createUser(userInput);
    reset();
    handleShowModal();
  };

  const inputValidation = name && email && birth_date && phone_number && address && detail_address;

  return (
    <div>
      <button onClick={handleCreateUser} disabled={!inputValidation}>
        create
      </button>
      <button onClick={() => handleShowModal()}>cancel</button>
    </div>
  );
};

export default UserModalButton;
