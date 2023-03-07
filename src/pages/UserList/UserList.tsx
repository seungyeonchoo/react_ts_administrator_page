import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import useFetch from '../../hooks/useFetch';
import useToggle from '../../hooks/useToggle';

import { AppDispatch, ReducerType } from '../../store';

import UserModal from './components/UserModal';
import UserFilter from './components/UserFilter';
import { updateUserParams } from '../../store/slices/paramSlice';
import UserTable from './components/UserTable';
import UserModalButton from './components/UserModal/UserModalButton';

const UserList = () => {
  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { userParams } = useSelector((state: ReducerType) => state.params);
  const { toggle: modalToggle, handleToggle: handleModalToggle } = useToggle(false);

  const { data, error, isLoading, isError } = useFetch('/users', userParams);

  useEffect(() => {
    if (!sessionStorage.getItem('access_token')) nav('/');
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (isError) {
    if (error?.response?.data === 'jwt expired') {
      sessionStorage.clear();
      nav('/');
    } else return <div>{`Error: ${error?.response?.data}`}</div>;
  }

  return (
    <>
      <UserFilter />
      <button onClick={() => handleModalToggle()}>add</button>
      {modalToggle && <UserModal showModal={modalToggle} handleShowModal={handleModalToggle} />}
      <UserTable users={data} />
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
          disabled={data?.length < 20}
        >
          next
        </button>
      </div>
    </>
  );
};

export default UserList;
