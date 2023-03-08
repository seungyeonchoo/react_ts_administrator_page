import { useNavigate } from 'react-router-dom';
import ACCOUNT_STATUS from '../../fixture/AccountStatus';
import BROKER_LIST from '../../fixture/BrokerList';
import useFetch from '../../hooks/useFetch';
import { AppDispatch, ReducerType } from '../../store';
import { TAccount } from '../../types/user_types';
import { useDispatch, useSelector } from 'react-redux';
import LabelWithInput from '../../component/Common/LabelWithInput';
import { updateAccountParams } from '../../store/slices/paramSlice';

const AccountList = () => {
  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { accountParams } = useSelector((state: ReducerType) => state.params);
  const { data, isError, isLoading } = useFetch('/accounts', accountParams);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (value === 'null') dispatch(updateAccountParams({ ...accountParams, [name]: null }));
    else dispatch(updateAccountParams({ ...accountParams, [name]: value }));
  };

  if (isError) return <span>Error...</span>;

  if (isLoading) return <span>Loading...</span>;

  return (
    <>
      <LabelWithInput labelTitle="is active">
        <select name="is_active" onChange={handleFilter} value={accountParams.is_active || 'null'}>
          <option value="null">all</option>
          <option value="true">active</option>
          <option value="false">inactive</option>
        </select>
      </LabelWithInput>

      <LabelWithInput labelTitle="account status">
        <select name="status" onChange={handleFilter} value={accountParams.status || 'null'}>
          {Object.keys(ACCOUNT_STATUS).map((status: string) => (
            <option key={status} value={status}>
              {ACCOUNT_STATUS[status]}
            </option>
          ))}
        </select>
      </LabelWithInput>

      <table>
        <tbody>
          {data?.map((account: TAccount) => {
            return (
              <tr key={account.uuid}>
                <td>{account.name}</td>
                <td>{BROKER_LIST[account.broker_id]}</td>
                <td>{ACCOUNT_STATUS[account.status]}</td>
                <td onClick={() => nav(`/accounts/${account.id}`)}>{account.number}</td>
                <td onClick={() => nav(`/users/${account.user.id}`)}>{account.user.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
