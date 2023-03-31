import { TAccount } from '../../../types/user_types';

import AccountListPage from './AccountListTable/AccountListPage';
import AccountTableHead from './AccountListTable/AccountTableHead';
import AccountTableItem from './AccountListTable/AccountTableItem';

interface Props {
  accounts: TAccount[];
  page: number;
}

const AccountListTable = ({ accounts, page }: Props) => {
  return (
    <>
      <section className="h-96 overflow-auto">
        <table className="w-full text-center text-xs m-auto table table-auto">
          <AccountTableHead />
          <tbody>
            {accounts?.map((account: TAccount) => (
              <AccountTableItem key={account.uuid} account={account} />
            ))}
          </tbody>
        </table>
      </section>
      <AccountListPage page={page} length={accounts?.length} />
    </>
  );
};

export default AccountListTable;
