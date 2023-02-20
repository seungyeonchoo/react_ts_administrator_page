import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { TUser, TUserSetting } from '../../../types/user_types';

const convertDate: (date: string) => string = date => {
  const getDate = new Date(date);
  const getFullYear = getDate.getFullYear();
  const getMonth =
    getDate.getMonth() + 1 < 10 ? `0${getDate.getMonth() + 1}` : getDate.getMonth() + 1;
  const getDay = getDate.getDate() < 10 ? `0${getDate.getDate()}` : getDate.getDate();

  return `${getFullYear}-${getMonth}-${getDay}`;
};

const convertGender: (num: number) => 'male' | 'female' = num => {
  return num === 1 || num === 3 ? 'male' : 'female';
};

const convertPhoneNumber: (phoneNum: string) => string = phoneNum => {
  return phoneNum
    ?.split('-')
    .map((e, i) => (i === 1 ? '****' : e))
    .join('-');
};

const UserItem = ({ user, setting }: { user: TUser; setting: TUserSetting }) => {
  const nav = useNavigate();
  return (
    <tr>
      <td onClick={() => nav(`/users/${user.id}`)}>{user?.name}</td>
      <td>{user?.accounts.length}</td>
      <td>{user?.email}</td>
      <td>{convertGender(user?.gender_origin)}</td>
      <td>{convertDate(user?.birth_date)}</td>
      <td>{convertPhoneNumber(user?.phone_number)}</td>
      <td>{convertDate(user?.last_login)}</td>
      <td>{convertDate(user?.created_at)}</td>
      <td>{setting?.allow_marketing_push ? 'allow' : 'not allow'}</td>
      <td>{setting?.is_active ? 'active' : 'inactive'}</td>
    </tr>
  );
};

export default UserItem;
