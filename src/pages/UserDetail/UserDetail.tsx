import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import { ReducerType } from '../../store';

import UserInfoTable from './components/UserInfoTable';
import UserAccountList from './components/UserAccountList';
import LoadingPage from '../../component/LoadingPage/LoadingPage';
import ErrorPage from '../../component/ErrorPage/ErrorPage';

const UserDetail = () => {
  const { id } = useParams();
  const { userParams } = useSelector((state: ReducerType) => state.params);
  const { data, isError, isLoading, error } = useFetch(`/users/${id}`, userParams);

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage error={error} />;

  return (
    <>
      <UserInfoTable data={data} id={id as string} />
      <UserAccountList data={data} />
    </>
  );
};

export default UserDetail;

// {
//   "id": 1,
//   "userId": 1,
//   "uuid": "8910b399-935d-4200-898b-bb3da7c3bfc7",
//   "broker_id": "261",
//   "status": 2,
//   "number": "375178506564",
//   "name": "Money Market Account",
//   "assets": "702487457.42",
//   "payments": "675311926.92",
//   "is_active": false,
//   "created_at": "2020-04-25T13:37:13.564Z",
//   "updated_at": "2020-11-21T06:11:57.543Z"
// },
