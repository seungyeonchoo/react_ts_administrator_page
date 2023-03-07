import useInput from '../../../hooks/useInput';
import useMutate from '../../../hooks/useMutate';

import UserModalInput from './UserModal/UserModalInput';
import InitialUser from '../../../fixture/InitailUserInput';
import UserModalButton from './UserModal/UserModalButton';

interface Props {
  showModal: boolean;
  handleShowModal: () => void;
}

const UserModal = ({ showModal, handleShowModal }: Props) => {
  const {
    inputValue: userInput,
    handleInputChange: handleUserInputChange,
    handleCheckInputChange: handleSettingInputChange,
    handleSelectChange,
    reset,
  } = useInput(InitialUser);

  return (
    <dialog open={showModal}>
      <UserModalInput
        userInput={userInput}
        handleUserInputChange={handleUserInputChange}
        handleSettingInputChange={handleSettingInputChange}
        handleSelectChange={handleSelectChange}
      />
      <UserModalButton userInput={userInput} handleShowModal={handleShowModal} reset={reset} />
    </dialog>
  );
};

export default UserModal;
