import useInput from '../../../hooks/useInput';
import UserModalInput from './UserModal/UserModalInput';
import InitialUser from '../../../fixture/InitailUserInput';
import UserModalButton from './UserModal/UserModalButton';
import UserSettingInput from './UserModal/UserSettingInput';

interface Props {
  handleShowModal: () => void;
}

const UserModal = ({ handleShowModal }: Props) => {
  const {
    inputValue: userInput,
    handleInputChange: handleUserInputChange,
    handleCheckInputChange: handleSettingInputChange,
    handleSelectChange,
    reset,
  } = useInput(InitialUser);

  return (
    // <dialog
    //   data-testid="create-user-modal"
    //   className="flex flex-col items-center p-8 w-2/5 h-[30rem] overflow-auto border border-slate-600 rounded-md bg-slate-200"
    // >
    <>
      <section
        data-testid="create-user-modal"
        className="w-full flex flex-col items-center h-96 bg-slate-300"
      >
        <section className="flex flex-col items-center m-auto w-1/3 h-full my-5 py-5 px-10 rounded-md overflow-auto bg-slate-100">
          <UserModalInput
            userInput={userInput}
            handleUserInputChange={handleUserInputChange}
            handleSelectChange={handleSelectChange}
          />
          <UserSettingInput handleSettingInputChange={handleSettingInputChange} />
        </section>
      </section>
      <UserModalButton userInput={userInput} handleShowModal={handleShowModal} reset={reset} />
    </>
    // </dialog>
  );
};

export default UserModal;
