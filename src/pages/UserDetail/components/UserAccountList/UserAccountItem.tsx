import { useNavigate } from 'react-router-dom';

import { TAccount } from '../../../../types/user_types';

import ACCOUNT_STATUS from '../../../../fixture/AccountStatus';
import BROKER_LIST from '../../../../fixture/BrokerList';

import addComma from '../../../../utils/addComma';
import calcEarningRate from '../../../../utils/calcEarningRate';

const UserAccountItem = ({ account, idx }: { account: TAccount; idx: number }) => {
  const nav = useNavigate();
  const profit = calcEarningRate(account.payments, account.assets);
  const isGain = +account?.assets - +account?.payments > 0;

  return (
    <tr className="bg-slate-100">
      <td className="table_cell">{idx + 1}</td>
      <td className="table_cell cell_hover" onClick={() => nav(`/accounts/${account.id}`)}>
        {account.number}
      </td>
      <td className="table_cell">{BROKER_LIST[account.broker_id]}</td>
      <td className="table_cell">{ACCOUNT_STATUS[account.status.toString()]}</td>
      <td className="table_cell">{account.name}</td>
      <td className="table_cell">{addComma(account.payments)}</td>
      <td className="table_cell">{addComma(account.assets)}</td>
      <td className={isGain ? 'table_cell gain' : 'table_cell loss'}>{profit.earningRate}</td>
      <td className={isGain ? 'table_cell gain' : 'table_cell loss'}>{profit.profit}</td>
      <td className="table_cell">{account.is_active ? 'active' : 'inactive'}</td>
    </tr>
  );
};

export default UserAccountItem;
