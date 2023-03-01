import { TUser } from '../../../../types/user_types';
import convertDate from '../../../../utils/convertData';
import UserInfoTableData from './components/UserInfoTableData';
import UserInfoTableHead from './components/UserInfoTableHead';
import UserInfoTableRow from './components/UserInfoTableRow';

const UserAccountInfo = ({ data }: { data: TUser }) => {
  return (
    <UserInfoTableRow>
      <UserInfoTableHead headTitle="created date" />
      <UserInfoTableData>{convertDate(data?.created_at)}</UserInfoTableData>
      <UserInfoTableHead headTitle="updated date" />
      <UserInfoTableData>{convertDate(data?.updated_at)}</UserInfoTableData>
      <UserInfoTableHead headTitle="last login date" />
      <UserInfoTableData>{convertDate(data?.last_login)}</UserInfoTableData>
    </UserInfoTableRow>
  );
};

export default UserAccountInfo;
