import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { ReducerType } from '../../store';

import useFetch from '../../hooks/useFetch';
import useToggle from '../../hooks/useToggle';

import UserModal from './components/UserModal';
import UserFilter from './components/UserFilter';
import UserTable from './components/UserTable';
import ErrorPage from '../../component/ErrorPage/ErrorPage';
import LoadingPage from '../../component/LoadingPage/LoadingPage';
import UserCreateButton from './components/UserCreateButton';
import NoResult from '../../component/ErrorPage/NoResult';

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
    <section data-testid="data-component" className="my-1 px-5 w-11/12 h-[33.5rem] m-auto">
      {modalToggle && <UserModal showModal={modalToggle} handleShowModal={handleModalToggle} />}
      <section className="w-full h-24 flex items-center justify-between text-sm py-5 px-10 m-auto ">
        <UserFilter />
        <UserCreateButton handleModalToggle={handleModalToggle} />
      </section>
      {data?.length === 0 ? <NoResult /> : <UserTable page={userParams._page} users={data} />}
    </section>
  );
};

export default UserList;
