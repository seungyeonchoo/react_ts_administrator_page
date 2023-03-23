import { useNavigate } from 'react-router-dom';
import ACCOUNT_STATUS from '../../../../fixture/AccountStatus';
import BROKER_LIST from '../../../../fixture/BrokerList';
import { TAccount } from '../../../../types/user_types';
import addComma from '../../../../utils/addComma';
import convertDate from '../../../../utils/convertData';

const UserAccountItem = ({ account, idx }: { account: TAccount; idx: number }) => {
  const nav = useNavigate();

  return (
    <tr className="bg-slate-100">
      <td className="border-b p-4">{idx + 1}</td>
      <td className="border-b p-4" onClick={() => nav(`/accounts/${account.id}`)}>
        {account.number}
      </td>
      <td className="border-b p-4">{BROKER_LIST[account.broker_id]}</td>
      <td className="border-b p-4">{ACCOUNT_STATUS[account.status.toString()]}</td>
      <td className="border-b p-4">{account.name}</td>
      <td className="border-b p-4">{addComma(account.payments)}</td>
      <td className="border-b p-4">{addComma(account.assets)}</td>
      <td className="border-b p-4">
        {(((+account.assets - +account.payments) / +account.payments) * 100).toFixed(2)}%
      </td>
      <td className="border-b p-4">{addComma((+account.assets - +account.payments).toString())}</td>
      <td className="border-b p-4">{account.is_active ? 'active' : 'inactive'}</td>
    </tr>
  );
};

export default UserAccountItem;
