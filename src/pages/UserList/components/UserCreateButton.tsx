interface Props {
  handleModalToggle: () => void;
}

const UserCreateButton = ({ handleModalToggle }: Props) => {
  return (
    <button
      onClick={handleModalToggle}
      className="cursor-pointer text-xs w-24 h-1/2 rounded-md text-white bg-slate-600"
    >
      New User
    </button>
  );
};

export default UserCreateButton;
