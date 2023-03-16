import { TAccount } from '../../../types/user_types';
import AccountTableHead from './AccountListTable/AccountTableHead';
import AccountTableItem from './AccountListTable/AccountTableItem';

interface Props {
  accounts: TAccount[];
}

const AccountListTable = ({ accounts }: Props) => {
  return (
    <table>
      <AccountTableHead />
      <tbody>
        {accounts?.map((account: TAccount) => (
          <AccountTableItem key={account.uuid} account={account} />
        ))}
      </tbody>
    </table>
  );
};

export default AccountListTable;
