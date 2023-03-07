import { TUser } from '../../../types/user_types';
import UserTableHead from './UserTable/UserTableHead';
import UserTableItem from './UserTable/UserTableItem';

interface Props {
  users: TUser[];
}

const UserTable = ({ users }: Props) => {
  return (
    <table>
      <UserTableHead />
      <tbody>
        {users?.map((user: TUser) => (
          <UserTableItem key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
