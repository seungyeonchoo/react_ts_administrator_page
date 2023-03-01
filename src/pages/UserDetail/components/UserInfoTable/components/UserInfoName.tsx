import useInput from '../../../../hooks/useInput';
import useMutate from '../../../../hooks/useMutate';
import useToggle from '../../../../hooks/useToggle';
import { TUser } from '../../../../types/user_types';
import UserInfoTableData from './UserInfoTableData';
import UserNameInput from './UserNameInput';

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
    <UserInfoTableData>
      <UserNameInput input={inputValue} handleInputChange={handleInputChange} />
      <button onClick={handleSaveChange}>저장</button>
      <button onClick={handleToggle}>취소</button>
    </UserInfoTableData>
  ) : (
    <UserInfoTableData>
      <span>{data?.name}</span>
      <button onClick={handleUpdateName}>변경</button>
    </UserInfoTableData>
  );
};

export default UserInfoName;
