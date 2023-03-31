import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import useMutate from '../../../../hooks/useMutate';

import { TUser } from '../../../../types/user_types';

import convertDate from '../../../../utils/convertDate';
import convertGender from '../../../../utils/convertGender';
import convertPhoneNumber from '../../../../utils/convertPhoneNumber';

import { ReactComponent as Delete } from '../../../../assets/circle-minus-solid.svg';

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
      <td className="table_cell cell_hover" onClick={() => nav(`/users/${user.id}`)}>
        {user?.name}
      </td>
      <td className="table_cell">{user?.accounts?.length as number}</td>
      <td className="table_cell">{user?.email}</td>
      <td className="table_cell">{convertGender(user?.gender_origin)}</td>
      <td className="table_cell">{convertDate(user?.birth_date)}</td>
      <td className="table_cell">{convertPhoneNumber(user?.phone_number)}</td>
      <td className="table_cell">{convertDate(user?.last_login)}</td>
      <td className="table_cell">{convertDate(user?.created_at)}</td>
      <td className="table_cell">{user?.allow_marketing_push ? 'allow' : 'not allow'}</td>
      <td className="table_cell">{user?.is_active ? 'active' : 'inactive'}</td>
      <td className="table_cell">{user?.is_staff ? 'staff' : '-'}</td>
      <td className="table_cell cell_hover">
        <Delete data-testid="delete-icon" className="icon m-auto" onClick={handleDelete} />
      </td>
    </tr>
  );
};

export default UserTableItem;
