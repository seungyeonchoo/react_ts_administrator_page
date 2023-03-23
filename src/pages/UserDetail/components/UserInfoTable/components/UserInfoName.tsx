import useInput from '../../../../../hooks/useInput';
import useMutate from '../../../../../hooks/useMutate';
import useToggle from '../../../../../hooks/useToggle';
import { TUser } from '../../../../../types/user_types';
import UserInfoTableData from './UserInfoTableData';

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
    <div className="flex justify-between p-2">
      <input type="text" name="name" value={inputValue.name} onChange={handleInputChange} />
      <div>
        <button onClick={handleSaveChange}>save</button>
        <button onClick={handleToggle}>cancel</button>
      </div>
    </div>
  ) : (
    <div className="flex justify-between p-2">
      <div>{data?.name}</div>
      <button onClick={handleUpdateName}>update</button>
    </div>
  );
};

export default UserInfoName;
