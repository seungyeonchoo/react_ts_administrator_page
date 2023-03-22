import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import useMutate from '../../../../hooks/useMutate';

import { TUser } from '../../../../types/user_types';

import convertDate from '../../../../utils/convertData';
import convertGender from '../../../../utils/convertGender';
import convertPhoneNumber from '../../../../utils/convertPhoneNumber';

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
    <tr className="bg-slate-100">
      <td
        className="border-b p-4 cursor-pointer hover:font-bold"
        onClick={() => nav(`/users/${user.id}`)}
      >
        {user?.name}
      </td>
      <td className="border-b p-4">{user?.accounts?.length as number}</td>
      <td className="border-b p-4">{user?.email}</td>
      <td className="border-b p-4">{convertGender(user?.gender_origin)}</td>
      <td className="border-b p-4">{convertDate(user?.birth_date)}</td>
      <td className="border-b p-4">{convertPhoneNumber(user?.phone_number)}</td>
      <td className="border-b p-4">{convertDate(user?.last_login)}</td>
      <td className="border-b p-4">{convertDate(user?.created_at)}</td>
      <td className="border-b p-4">{user?.allow_marketing_push ? 'allow' : 'not allow'}</td>
      <td className="border-b p-4">{user?.is_active ? 'active' : 'inactive'}</td>
      <td className="border-b p-4">{user?.is_staff ? 'staff' : '-'}</td>
      <td className="border-b p-4 cursor-pointer hover:font-bold" onClick={handleDelete}>
        Del
      </td>
    </tr>
  );
};

export default UserTableItem;
