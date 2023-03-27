import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { ReducerType } from '../../store';

import useFetch from '../../hooks/useFetch';
import useToggle from '../../hooks/useToggle';

import UserModal from './components/UserModal';
import UserTable from './components/UserTable';
import UserToolBar from './components/UserToolBar';

import ErrorPage from '../../component/ErrorPage/ErrorPage';
import NoResult from '../../component/ErrorPage/NoResult';
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
    <section data-testid="data-component" className="container_main">
      <UserToolBar handleModalToggle={handleModalToggle} />
      {modalToggle ? (
        <UserModal handleShowModal={handleModalToggle} />
      ) : data?.length === 0 ? (
        <NoResult />
      ) : (
        <UserTable page={userParams._page} users={data} />
      )}
    </section>
  );
};

export default UserList;
