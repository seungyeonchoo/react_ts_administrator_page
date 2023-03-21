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
    <section className="mt-10 p-5 w-1/2 grid grid-cols-2 gap-6 text-sm text-white">
      <button
        className="h-9 bg-slate-600 rounded-md cursor-pointer disabled:cursor-default disabled:bg-slate-400"
        onClick={handleCreateUser}
        disabled={!inputValidation}
      >
        create
      </button>
      <button className="h-9 bg-slate-600 rounded-md cursor-pointer" onClick={handleShowModal}>
        cancel
      </button>
    </section>
  );
};

export default UserModalButton;
