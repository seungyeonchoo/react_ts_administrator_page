const UserCreateButton = ({ handleModalToggle }: { handleModalToggle: () => void }) => {
  return <button onClick={() => handleModalToggle()}>add</button>;
};

export default UserCreateButton;
