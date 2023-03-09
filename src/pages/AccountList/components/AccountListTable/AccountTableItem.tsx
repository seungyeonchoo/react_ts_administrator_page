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
        data={account?.user.name}
      />
      <AccountTableData data={addComma(account?.payments)} />
      <AccountTableData data={addComma(account?.assets)} />
      <AccountTableData data={convertDate(account?.created_at)} />
      <AccountTableData data={account?.is_active ? 'active' : 'inactive'} />
      <AccountTableData data={convertDate(account?.created_at)} />
      <AccountTableData data={convertDate(account?.updated_at)} />
      {/* <td onClick={handleDelete}>delete</td> */}
      {/* 
      <TableHeadCell cell="Account Number" />
        <TableHeadCell cell="Account Name" />
        <TableHeadCell cell="Status" />
        <TableHeadCell cell="Broker" />
        <TableHeadCell cell="User Name" />
        <TableHeadCell cell="Payments" />
        <TableHeadCell cell="Assests" />
        <TableHeadCell cell="Earnings rate" />
        <TableHeadCell cell="Profit" />
        <TableHeadCell cell="Active" />
        <TableHeadCell cell="Created Date" />
        <TableHeadCell cell="Updated Date" /> */}
    </tr>
  );
};

export default AccountTableItem;
