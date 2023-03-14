import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { ReducerType } from '../../store';

import useFetch from '../../hooks/useFetch';
import useToggle from '../../hooks/useToggle';

import UserModal from './components/UserModal';
import UserFilter from './components/UserFilter';
import UserTable from './components/UserTable';
import UserListPage from './components/UseListPage';
import ErrorPage from '../../component/ErrorPage/ErrorPage';
import LoadingPage from '../../component/LoadingPage/LoadingPage';

const UserList = () => {
  const nav = useNavigate();
  const { userParams } = useSelector((state: ReducerType) => state.params);
  const { toggle: modalToggle, handleToggle: handleModalToggle } = useToggle(false);
  const { data, error, isLoading, isError } = useFetch('/users', userParams);

  useEffect(() => {
    if (!sessionStorage.getItem('access_token')) nav('/');
  }, []);

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage error={error} />;

  return (
    <main data-testid="data-component">
      <UserFilter />
      <button onClick={() => handleModalToggle()}>add</button>
      <UserModal showModal={modalToggle} handleShowModal={handleModalToggle} />
      {/* {modalToggle && <UserModal showModal={modalToggle} handleShowModal={handleModalToggle} />} */}
      <UserTable users={data} />
      <UserListPage page={userParams._page} length={data?.length} />
    </main>
  );
};

export default UserList;
