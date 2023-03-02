import { useNavigate } from 'react-router-dom';
import ACCOUNT_STATUS from '../../../../fixture/AccountStatus';
import BROKER_LIST from '../../../../fixture/BrokerList';
import { TAccount } from '../../../../types/user_types';
import addComma from '../../../../utils/addComma';
import convertDate from '../../../../utils/convertData';

const UserAccountItem = ({ account, idx }: { account: TAccount; idx: number }) => {
  const nav = useNavigate();

  return (
    <tr>
      <td>{idx + 1}</td>
      <td onClick={() => nav(`/accounts/${account.id}`)}>{account.number}</td>
      <td>{BROKER_LIST[account.broker_id]}</td>
      <td>{ACCOUNT_STATUS[account.status.toString()]}</td>
      <td>{account.name}</td>
      <td>{addComma(account.payments)}</td>
      <td>{addComma(account.assets)}</td>
      <td>{(((+account.assets - +account.payments) / +account.payments) * 100).toFixed(2)}%</td>
      <td>{addComma((+account.assets - +account.payments).toString())}</td>
      <td>{account.is_active ? 'active' : 'inactive'}</td>
      <td>{convertDate(account.created_at)}</td>
      <td>{convertDate(account.updated_at)}</td>
    </tr>
  );
};

export default UserAccountItem;
