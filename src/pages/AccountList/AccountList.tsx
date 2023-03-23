import useFetch from '../../hooks/useFetch';

import { useSelector } from 'react-redux';
import { ReducerType } from '../../store';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LoadingPage from '../../component/LoadingPage/LoadingPage';
import ErrorPage from '../../component/ErrorPage/ErrorPage';

import AccountFilter from './components/AccountFilter';
import AccountListPage from './components/AccountListPage';
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
    <section data-testid="data-component" className="my-1 px-5 w-11/12 h-[33.5rem]">
      <AccountFilter />
      <AccountListTable page={accountParams._page} accounts={data} />
    </section>
  );
};

export default AccountList;

// {
//     id: 1,
//     userId: 1,
//     uuid: '8910b399-935d-4200-898b-bb3da7c3bfc7',
//     broker_id: '261',
//     status: 2,
//     number: '375178506564',
//     name: 'Money Market Account',
//     assets: '702487457.42',
//     payments: '675311926.92',
//     is_active: false,
//     created_at: '2020-04-25T13:37:13.564Z',
//     updated_at: '2020-11-21T06:11:57.543Z',
//   },
