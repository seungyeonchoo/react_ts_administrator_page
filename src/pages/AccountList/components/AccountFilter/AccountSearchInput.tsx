import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../../../../hooks/useInput';
import { AppDispatch } from '../../../../store';
import { updateAccountParams } from '../../../../store/slices/paramSlice';

const AccountSearchInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { inputValue: searchInput, handleInputChange: handleSearchInputChange } = useInput({
    number_like: '',
  });

  useEffect(() => {
    const debounceHandler = setTimeout(() => dispatch(updateAccountParams(searchInput)), 500);
    return () => clearTimeout(debounceHandler);
  }, [searchInput]);

  return (
    <input
      type="text"
      name="number_like"
      placeholder="search account number"
      value={searchInput.number_like}
      onChange={handleSearchInputChange}
    />
  );
};

export default AccountSearchInput;
