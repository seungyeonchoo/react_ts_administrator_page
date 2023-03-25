import useInput from '../../../../hooks/useInput';
import useMutate from '../../../../hooks/useMutate';
import useToggle from '../../../../hooks/useToggle';
import { TUser } from '../../../../types/user_types';

const UserInfoName = ({ id, data }: { id: string; data: TUser }) => {
  const { toggle, handleToggle } = useToggle(false);
  const { inputValue, handleInputChange, handleSetInput } = useInput({ name: '' });
  const { mutate } = useMutate(`users/${id}`, 'patch', inputValue);

  const handleSaveChange = () => {
    mutate(inputValue);
    handleToggle();
  };

  const handleUpdateName = () => {
    handleSetInput({ name: data?.name });
    handleToggle();
  };

  return toggle ? (
    <td className="p-1 bg-slate-100 h-full">
      <input
        type="text"
        name="name"
        value={inputValue.name}
        onChange={handleInputChange}
        className="text-center w-full h-6 mb-2 border border-slate-500 rounded-md"
      />
      <div className="flex justify-evenly">
        <button
          disabled={inputValue.name === data?.name}
          onClick={handleSaveChange}
          className="bg-slate-500 p-1 w-2/5 rounded-md text-white disabled:bg-slate-400 hover:bg-slate-600"
        >
          save
        </button>
        <button
          onClick={handleToggle}
          className="bg-slate-500 p-1 w-2/5 rounded-md text-white hover:bg-slate-600"
        >
          cancel
        </button>
      </div>
    </td>
  ) : (
    <td className="p-2 bg-slate-100 h-full flex-col justify-center">
      <div className="mb-2">{data?.name}</div>
      <button
        onClick={handleUpdateName}
        className="bg-slate-500 p-1 w-1/2 rounded-md text-white hover:bg-slate-600"
      >
        update
      </button>
    </td>
  );
};

export default UserInfoName;
