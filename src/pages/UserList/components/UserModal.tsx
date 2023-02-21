import UserModalInput from './UserModalInput';

const UserModal = ({
  showModal,
  handleShowModal,
}: {
  showModal: boolean;
  handleShowModal: () => void;
}) => {
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
