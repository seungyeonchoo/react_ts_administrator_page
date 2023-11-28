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

  const checkIsValidInput = (userInput: InitialUser) => {
    const regEmail = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const regContact = /^01([0|1|6|7|8|9])+-([0-9]{3,4})+-([0-9]{4})$/;

    const isValidName = userInput.name?.length > 0;
    const isValidEmail = regEmail.test(userInput.email);
    const isValidContact = regContact.test(userInput.phone_number);
    const isValidAddress = userInput.address?.length > 0;

    return isValidAddress && isValidContact && isValidEmail && isValidName;
  };

  const inputValidation = checkIsValidInput(userInput);

  return (
    <section className="mx-auto p-5 w-1/2 grid grid-cols-2 gap-6 text-sm text-white">
      <button
        className="h-9 bg-slate-500 hover_button"
        onClick={handleCreateUser}
        disabled={!inputValidation}
      >
        create
      </button>
      <button className="h-9 bg-slate-500 hover_button" onClick={handleShowModal}>
        cancel
      </button>
    </section>
  );
};

export default UserModalButton;
