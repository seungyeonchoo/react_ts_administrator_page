import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import useFetch from '../../hooks/useFetch';
import useToggle from '../../hooks/useToggle';

import { TUser } from '../../types/user_types';
import { AppDispatch, ReducerType } from '../../store';

import UserTableItem from './components/UserTableItem';
import UserModal from './components/UserModal';
import UserTableHead from './components/UserTableHead';
import UserFilter from './components/UserFilter';
import UserSearchInput from './components/UserSearchInput';
import UserCreateButton from './components/UserCreateButton';
import { updateUserParams } from '../../store/slices/paramSlice';

const UserList = () => {
  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { userParams } = useSelector((state: ReducerType) => state.params);
  const { toggle: modalToggle, handleToggle: handleModalToggle } = useToggle(false);

  const {
    data: users,
    error: usersError,
    isLoading: usersIsLoading,
    isError: usersIsError,
  } = useFetch('/users', userParams);

  useEffect(() => {
    if (!sessionStorage.getItem('access_token')) nav('/');
  }, []);

  if (usersIsLoading) return <div>Loading...</div>;

  if (usersIsError) {
    if (usersError?.response?.data === 'jwt expired') {
      sessionStorage.clear();
      nav('/');
    } else return <div>{`Error: ${usersError?.response?.data}`}</div>;
  }

  return (
    <>
      <UserSearchInput />
      <UserFilter />
      <UserCreateButton handleModalToggle={handleModalToggle} />
      {modalToggle && <UserModal showModal={modalToggle} handleShowModal={handleModalToggle} />}
      <table>
        <UserTableHead />
        <tbody>
          {users?.map((user: TUser) => (
            <UserTableItem key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={() => {
            dispatch(updateUserParams({ _page: userParams._page - 1 }));
          }}
          disabled={userParams._page === 1}
        >
          prev
        </button>
        <button
          onClick={() => {
            dispatch(updateUserParams({ _page: userParams._page + 1 }));
          }}
          disabled={users?.length < 20}
        >
          next
        </button>
      </div>
    </>
  );
};

export default UserList;
