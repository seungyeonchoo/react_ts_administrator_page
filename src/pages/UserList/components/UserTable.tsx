import { TUser } from '../../../types/user_types';

import UserListPage from './UserTable/UseListPage';
import UserTableHead from './UserTable/UserTableHead';
import UserTableItem from './UserTable/UserTableItem';

interface Props {
  users: TUser[];
  page: number;
}

const UserTable = ({ users, page }: Props) => {
  return (
    <>
      <section className="h-96 overflow-auto">
        <table className="w-full text-center text-xs m-auto table table-auto">
          <UserTableHead />
          <tbody>
            {users?.map((user: TUser) => (
              <UserTableItem key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </section>
      <UserListPage page={page} length={users?.length} />
    </>
  );
};

export default UserTable;
