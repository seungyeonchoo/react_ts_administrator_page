import { TAccount } from '../../../../types/user_types';
import UserAccountItem from './UserAccountItem';

const UserAccountListBody = ({ accountList }: { accountList: TAccount[] }) => {
  return (
    <tbody>
      {accountList.map((account: TAccount, idx: number) => (
        <UserAccountItem key={account.id} account={account} idx={idx} />
      ))}
    </tbody>
  );
};

export default UserAccountListBody;
