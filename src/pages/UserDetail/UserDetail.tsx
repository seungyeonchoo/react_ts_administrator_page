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
    <main data-testid="data-component">
      <UserInfoTable data={data} id={id as string} />
      <UserAccountList data={data} />
    </main>
  );
};

export default UserDetail;
