import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import useFetch from '../../hooks/useFetch';

import { ReducerType } from '../../store';

import LoadingPage from '../../component/LoadingPage/LoadingPage';
import ErrorPage from '../../component/ErrorPage/ErrorPage';

import AccountInfo from './components/AccountInfo';
import AccountProfit from './components/AccountProfit';

const AccountDetail = () => {
  const { id } = useParams();
  const { accountParams } = useSelector((state: ReducerType) => state.params);
  const { data, isError, isLoading, error } = useFetch(`/accounts/${id}`, accountParams);

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage error={error} />;

  return (
    <section className="container_main flex justify-center">
      <AccountInfo data={data} id={id as string} />
      <AccountProfit data={data} />
    </section>
  );
};

export default AccountDetail;
