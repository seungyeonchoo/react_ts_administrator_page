import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../../../../hooks/useInput';
import { AppDispatch } from '../../../../store';
import { updateUserParams } from '../../../../store/slices/paramSlice';

const UserSearchInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { inputValue: searchInput, handleInputChange: handleSearchInputChange } = useInput({
    q: '',
  });

  useEffect(() => {
    const debounceHandler = setTimeout(() => dispatch(updateUserParams(searchInput)), 500);
    return () => clearTimeout(debounceHandler);
  }, [searchInput]);

  return (
    <input
      type="text"
      name="q"
      value={searchInput.q}
      placeholder="search keyword"
      onChange={handleSearchInputChange}
      className="h-9 px-3 w-2/5 border border-slate-500 rounded-md"
    />
  );
};

export default UserSearchInput;
