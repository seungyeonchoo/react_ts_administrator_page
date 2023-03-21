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
import Side from '../../component/Side/Side';
import UserCreateButton from './components/UserCreateButton';

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
    <section data-testid="data-component" className="my-3 p-3 w-4/5">
      {modalToggle && <UserModal showModal={modalToggle} handleShowModal={handleModalToggle} />}
      <section className="w-full flex items-center justify-between text-sm py-5 m-auto ">
        <UserCreateButton handleModalToggle={handleModalToggle} />
        <UserFilter />
      </section>
      {data?.length === 0 ? (
        <section className="m-32 h-screen text-center">No Search Result</section>
      ) : (
        <UserTable page={userParams._page} users={data} />
      )}
    </section>
  );
};

export default UserList;
