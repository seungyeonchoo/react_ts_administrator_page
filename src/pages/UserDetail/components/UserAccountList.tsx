import { TAccount, TUser } from '../../../types/user_types';

import UserAccountListBody from './UserAccountList/UserAccountListBody';
import UserAccountListHead from './UserAccountList/UserAccountListHead';

const UserAccountList = ({ data }: { data: TUser }) => {
  return (
    <section className="h-1/2 overflow-auto">
      <table className="w-full text-center text-xs m-auto table table-auto">
        <UserAccountListHead />
        <UserAccountListBody accountList={data?.accounts as TAccount[]} />
      </table>
    </section>
  );
};

export default UserAccountList;
