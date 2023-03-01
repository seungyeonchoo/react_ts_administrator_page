import { useNavigate } from 'react-router-dom';
import { TAccount, TUser } from '../../../types/user_types';
import convertDate from '../../../utils/convertData';

const UserAccountList = ({ data }: { data: TUser }) => {
  const nav = useNavigate();
  return (
    <table>
      <thead>
        <tr>
          <th>no.</th>
          <th>account number</th>
          <th>broker</th>
          <th>status</th>
          <th>name</th>
          <th>assets</th>
          <th>payments</th>
          <th>active</th>
          <th>created date</th>
          <th>updated date</th>
        </tr>
      </thead>
      <tbody>
        {data?.accounts.map((account: TAccount, idx: number) => {
          return (
            <tr key={account.id}>
              <td>{idx + 1}</td>
              <td onClick={() => nav(`/accounts/${account.id}`)}>{account.number}</td>
              <td>{account.broker_id}</td>
              <td>{account.status}</td>
              <td>{account.name}</td>
              <td>{account.assets}</td>
              <td>{account.payments}</td>
              <td>{account.is_active ? 'active' : 'inactive'}</td>
              <td>{convertDate(account.created_at)}</td>
              <td>{convertDate(account.updated_at)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserAccountList;
