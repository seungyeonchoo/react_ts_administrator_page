import useFetch from '../../hooks/useFetch';

import { useSelector } from 'react-redux';
import { ReducerType } from '../../store';

import AccountFilter from './components/AccountFilter';
import AccountListPage from './components/AccountListPage';
import AccountListTable from './components/AccountTable';

const AccountList = () => {
  const { accountParams } = useSelector((state: ReducerType) => state.params);
  const { data, isError, isLoading } = useFetch('/accounts', accountParams);

  if (isError) return <span>Error...</span>;

  if (isLoading) return <span>Loading...</span>;

  return (
    <>
      <AccountFilter />
      <AccountListTable accounts={data} />
      <AccountListPage page={accountParams._page} length={data?.length} />
    </>
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
