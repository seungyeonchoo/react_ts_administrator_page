import useInput from '../../../hooks/useInput';
import UserModalInput from './UserModal/UserModalInput';
import InitialUser from '../../../fixture/InitailUserInput';
import UserModalButton from './UserModal/UserModalButton';
import UserSettingInput from './UserModal/UserSettingInput';

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
    <dialog
      open={showModal}
      data-testid="create-user-modal"
      className="flex flex-col items-center p-8 w-2/5 h-[30rem] overflow-auto border border-slate-600 rounded-md bg-slate-200"
    >
      <section className="flex flex-col items-center m-auto w-3/4">
        <UserModalInput
          userInput={userInput}
          handleUserInputChange={handleUserInputChange}
          handleSelectChange={handleSelectChange}
        />
        <UserSettingInput handleSettingInputChange={handleSettingInputChange} />
      </section>
      <UserModalButton userInput={userInput} handleShowModal={handleShowModal} reset={reset} />
    </dialog>
  );
};

export default UserModal;
