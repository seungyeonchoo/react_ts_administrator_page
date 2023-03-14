import { TAccount, TUser } from '../../../types/user_types';
import UserAccountListBody from './UserAccountList/UserAccountListBody';
import UserAccountListHead from './UserAccountList/UserAccountListHead';

const UserAccountList = ({ data }: { data: TUser }) => {
  return (
    <table>
      <UserAccountListHead />
      <UserAccountListBody accountList={data?.accounts as TAccount[]} />
    </table>
  );
};

export default UserAccountList;
