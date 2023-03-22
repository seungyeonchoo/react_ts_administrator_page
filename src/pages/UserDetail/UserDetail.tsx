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
    <section data-testid="data-component" className="my-1 px-10 w-11/12 h-[33.5rem]">
      <UserInfoTable data={data} id={id as string} />
      <UserAccountList data={data} />
    </section>
  );
};

export default UserDetail;
