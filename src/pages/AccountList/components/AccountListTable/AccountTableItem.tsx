import { useNavigate } from 'react-router-dom';
import ACCOUNT_STATUS from '../../../../fixture/AccountStatus';
import BROKER_LIST from '../../../../fixture/BrokerList';
import { TAccount } from '../../../../types/user_types';
import addComma from '../../../../utils/addComma';
import convertDate from '../../../../utils/convertData';
import AccountTableData from './AccountTableData';

const AccountTableItem = ({ account }: { account: TAccount }) => {
  const nav = useNavigate();
  return (
    <tr>
      <AccountTableData onClick={() => nav(`/accounts/${account?.id}`)} data={account?.number} />
      <AccountTableData data={account?.name} />
      <AccountTableData data={ACCOUNT_STATUS[account?.status]} />
      <AccountTableData data={BROKER_LIST[account?.broker_id]} />
      <AccountTableData
        onClick={() => nav(`/users/${account?.userId}`)}
        data={account?.user?.name as string}
      />
      <AccountTableData data={addComma(account?.payments)} />
      <AccountTableData data={addComma(account?.assets)} />
      <AccountTableData
        data={`${(((+account?.assets - +account?.payments) / +account?.payments) * 100).toFixed(
          2
        )}%`}
      />
      <AccountTableData data={addComma((+account.assets - +account.payments).toString())} />
      <AccountTableData data={account?.is_active ? 'active' : 'inactive'} />
      <AccountTableData data={convertDate(account?.created_at)} />
      <AccountTableData data={convertDate(account?.updated_at)} />
    </tr>
  );
};

export default AccountTableItem;
