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
        className="text-center w-full h-6 mb-2 border border-slate-500 rounded-sm bg-slate-100"
      />
      <div className="flex justify-evenly">
        <button
          disabled={inputValue.name === data?.name}
          onClick={handleSaveChange}
          className="button_page hover_button"
        >
          save
        </button>
        <button onClick={handleToggle} className="button_page hover_button">
          cancel
        </button>
      </div>
    </td>
  ) : (
    <td className="p-2 bg-slate-100 h-full flex-col justify-center">
      <div className="mb-2">{data?.name}</div>
      <button onClick={handleUpdateName} className="button_page hover_button">
        update
      </button>
    </td>
  );
};

export default UserInfoName;
