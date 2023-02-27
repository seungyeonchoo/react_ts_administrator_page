import { useDispatch, useSelector } from 'react-redux';

import useFetch from '../../hooks/useFetch';
import useToggle from '../../hooks/useToggle';
import useInput from '../../hooks/useInput';

import { TUser } from '../../types/user_types';
import { AppDispatch, ReducerType } from '../../store';

import UserTableItem from './components/UserTableItem';
import UserModal from './components/UserModal';
import UserTableHead from './components/UserTableHead';
import { useEffect } from 'react';
import { updateUserParams } from '../../store/slices/paramSlice';
import UserFilter from './components/UserFilter';

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userParams } = useSelector((state: ReducerType) => state.params);
  const { toggle: modalToggle, handleToggle: handleModalToggle } = useToggle();
  const { inputValue: searchInput, handleInputChange: handleSearchInputChange } = useInput({
    q: '',
  });

  useEffect(() => {
    const debounceHandler = setTimeout(() => dispatch(updateUserParams(searchInput)), 500);
    return () => clearTimeout(debounceHandler);
  }, [searchInput]);

  const {
    data: users,
    error: usersError,
    isLoading: usersIsLoading,
    isError: usersIsError,
  } = useFetch('/users', userParams);

  if (usersIsLoading) return <div>Loading...</div>;

  if (usersIsError) return <div>{`Error: ${usersError?.response?.data}`}</div>;

  return (
    <>
      <input type="text" name="q" value={searchInput.q} onChange={handleSearchInputChange} />
      <UserFilter />
      <button onClick={() => handleModalToggle()}>add</button>
      <UserModal showModal={modalToggle} handleShowModal={handleModalToggle} />
      <table>
        <UserTableHead />
        <tbody>
          {users?.map((user: TUser) => {
            return <UserTableItem key={user.id} user={user} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
