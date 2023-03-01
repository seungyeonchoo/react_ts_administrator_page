import { useSelector } from 'react-redux';

import useFetch from '../../hooks/useFetch';
import useToggle from '../../hooks/useToggle';

import { TUser } from '../../types/user_types';
import { ReducerType } from '../../store';

import UserTableItem from './components/UserTableItem';
import UserModal from './components/UserModal';
import UserTableHead from './components/UserTableHead';
import UserFilter from './components/UserFilter';
import UserSearchInput from './components/UserSearchInput';
import UserCreateButton from './components/UserCreateButton';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const nav = useNavigate();
  const { userParams } = useSelector((state: ReducerType) => state.params);
  const { toggle: modalToggle, handleToggle: handleModalToggle } = useToggle();

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
      <UserModal showModal={modalToggle} handleShowModal={handleModalToggle} />
      <table>
        <UserTableHead />
        <tbody>
          {users?.map((user: TUser) => (
            <UserTableItem key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
