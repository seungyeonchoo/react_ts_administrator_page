import useFetch from '../../hooks/useFetch';

import { useSelector } from 'react-redux';
import { ReducerType } from '../../store';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LoadingPage from '../../component/LoadingPage/LoadingPage';
import ErrorPage from '../../component/ErrorPage/ErrorPage';

import AccountFilter from './components/AccountToolbar';
import AccountListTable from './components/AccountListTable';

const AccountList = () => {
  const nav = useNavigate();
  const { accountParams } = useSelector((state: ReducerType) => state.params);
  const { data, isError, isLoading, error } = useFetch('/accounts', accountParams);

  useEffect(() => {
    if (!sessionStorage.getItem('access_token')) nav('/');
  }, []);

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage error={error} />;

  return (
    <section data-testid="data-component" className="container_main">
      <AccountFilter />
      <AccountListTable page={accountParams._page} accounts={data} />
    </section>
  );
};

export default AccountList;
