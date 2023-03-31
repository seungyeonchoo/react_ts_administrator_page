import useInput from '../../../../hooks/useInput';
import useMutate from '../../../../hooks/useMutate';
import useToggle from '../../../../hooks/useToggle';

import { TUser } from '../../../../types/user_types';

import { ReactComponent as Update } from '../../../../assets/pencil-solid.svg';
import { ReactComponent as Save } from '../../../../assets/circle-check-regular.svg';
import { ReactComponent as Cancel } from '../../../../assets/circle-xmark-solid.svg';

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
    <div className="flex items-center justify-around col-span-2 bg-slate-100 h-full">
      <input
        type="text"
        name="name"
        value={inputValue.name}
        onChange={handleInputChange}
        className="text-center h-1/2 border border-slate-500 rounded-sm bg-slate-100"
      />
      <div className="flex justify-between w-1/5">
        <Save data-testid="save-icon" onClick={handleSaveChange} className="icon" />
        <Cancel data-testid="cancel-icon" onClick={handleToggle} className="icon" />
      </div>
    </div>
  ) : (
    <div className="col-span-2 bg-slate-100 h-full flex items-center justify-around">
      <div>{data?.name}</div>
      <Update
        data-testid="update-icon"
        onClick={handleUpdateName}
        className="w-3 fill-slate-600 cursor-pointer hover:fill-slate-700"
      />
    </div>
  );
};

export default UserInfoName;
