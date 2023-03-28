import useInput from '../../../../hooks/useInput';
import useMutate from '../../../../hooks/useMutate';
import useToggle from '../../../../hooks/useToggle';

import { ReactComponent as Save } from '../../../../assets/circle-check-regular.svg';
import { ReactComponent as Cancel } from '../../../../assets/circle-xmark-solid.svg';
import { ReactComponent as Update } from '../../../../assets/pencil-solid.svg';

const AccountName = ({ name, id }: { name: string; id: string }) => {
  const { inputValue, handleInputChange, handleSetInput } = useInput({ name: '' });
  const { mutate } = useMutate(`/accounts/${id}`, 'patch', inputValue);
  const { toggle, handleToggle } = useToggle(false);

  const handleSaveChange = () => {
    mutate(inputValue);
    handleToggle();
  };

  const handleUpdateName = () => {
    handleSetInput({ name: name });
    handleToggle();
  };

  return toggle ? (
    <div className="col-span-3 table_cell bg-slate-100 flex justify-between">
      <input
        type="text"
        name="name"
        value={inputValue.name}
        onChange={handleInputChange}
        className="h-full bg-inherit outline-none text-center"
      />
      <div className="flex w-1/4 justify-around">
        <Save
          onClick={handleSaveChange}
          className="w-4 cursor-pointer fill-slate-500 hover:fill-slate-600"
        />
        <Cancel
          onClick={handleSaveChange}
          className="w-4 cursor-pointer fill-slate-500 hover:fill-slate-600"
        />
      </div>
    </div>
  ) : (
    <div className="col-span-3 table_cell bg-slate-100 flex justify-between">
      <span className="w-full text-center">{name}</span>
      <Update
        onClick={handleUpdateName}
        className="w-3 cursor-pointer fill-slate-500 hover:fill-slate-600"
      />
    </div>
  );
};

export default AccountName;
