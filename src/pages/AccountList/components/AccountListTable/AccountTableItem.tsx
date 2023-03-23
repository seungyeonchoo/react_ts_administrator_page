import { useNavigate } from 'react-router-dom';
import ACCOUNT_STATUS from '../../../../fixture/AccountStatus';
import BROKER_LIST from '../../../../fixture/BrokerList';
import { TAccount } from '../../../../types/user_types';
import addComma from '../../../../utils/addComma';
import calcEarningRate from '../../../../utils/calcEarningRate';

const AccountTableItem = ({ account }: { account: TAccount }) => {
  const nav = useNavigate();

  const profit = calcEarningRate(account?.payments, account?.assets);

  const navAccountDetail = () => {
    nav(`/accounts/${account?.id}`);
  };

  const navUserDetail = () => {
    nav(`/users/${account?.userId}`);
  };

  return (
    <tr className="bg-slate-100">
      <td className="border-b p-4" onClick={navAccountDetail}>
        {account?.number}
      </td>
      <td className="border-b p-4">{account?.name}</td>
      <td className="border-b p-4">{ACCOUNT_STATUS[account?.status]}</td>
      <td className="border-b p-4">{BROKER_LIST[account?.broker_id]}</td>
      <td className="border-b p-4" onClick={navUserDetail}>
        {account?.user?.name}
      </td>
      <td className="border-b p-4">{addComma(account?.payments)}</td>
      <td className="border-b p-4">{addComma(account?.assets)}</td>
      <td className="border-b p-4">{profit.earningRate}</td>
      <td className="border-b p-4">{profit.profit}</td>
      <td className="border-b p-4">{account?.is_active ? 'active' : 'inactive'}</td>
    </tr>
  );
};

export default AccountTableItem;
