import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../../../../hooks/useInput';
import { AppDispatch } from '../../../../store';
import { initialUserParams, updateUserParams } from '../../../../store/slices/paramSlice';
import { ReactComponent as Cancel } from '../../../../assets/circle-xmark-solid.svg';

interface Props {
  handleSearchToggle: () => void;
}

const UserSearchInput = ({ handleSearchToggle }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { inputValue: searchInput, handleInputChange: handleSearchInputChange } = useInput({
    q: '',
  });

  useEffect(() => {
    const debounceHandler = setTimeout(() => dispatch(updateUserParams(searchInput)), 500);
    return () => clearTimeout(debounceHandler);
  }, [searchInput]);

  const handleCancel = () => {
    handleSearchToggle();
    dispatch(updateUserParams(initialUserParams));
  };

  return (
    <section className="ml-5 flex">
      <input
        type="text"
        name="q"
        value={searchInput.q}
        placeholder="search keyword"
        onChange={handleSearchInputChange}
        className="h-9 px-3 w-48 border border-slate-500 rounded-md"
      />
      <Cancel className="icon -m-6" onClick={handleCancel} />
    </section>
  );
};

export default UserSearchInput;
