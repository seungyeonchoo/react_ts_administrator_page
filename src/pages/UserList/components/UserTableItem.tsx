import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import useMutate from '../../../hooks/useMutate';
import { TUser } from '../../../types/user_types';
import convertDate from '../../../utils/convertData';
import convertGender from '../../../utils/convertGender';
import convertPhoneNumber from '../../../utils/convertPhoneNumber';
import UserTableData from './UserTableData';

const UserTableItem = ({ user }: { user: TUser }) => {
  const nav = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useMutate(`/users/${user?.id}`, 'delete');

  const handleDelete = () => {
    mutate(null, {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    });
  };

  return (
    <tr>
      <UserTableData onClick={() => nav(`/users/${user.id}`)} data={user?.name} />
      <UserTableData data={user?.accounts.length} />
      <UserTableData data={user?.email} />
      <UserTableData data={convertGender(user?.gender_origin)} />
      <UserTableData data={convertDate(user?.birth_date)} />
      <UserTableData data={convertPhoneNumber(user?.phone_number)} />
      <UserTableData data={convertDate(user?.last_login)} />
      <UserTableData data={convertDate(user?.created_at)} />
      <UserTableData data={user?.allow_marketing_push ? 'allow' : 'not allow'} />
      <UserTableData data={user?.is_active ? 'active' : 'inactive'} />
      <td onClick={handleDelete}>delete</td>
    </tr>
  );
};

export default UserTableItem;
