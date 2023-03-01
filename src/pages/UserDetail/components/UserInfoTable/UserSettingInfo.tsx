import { TUser } from '../../../../types/user_types';
import UserInfoTableData from './components/UserInfoTableData';
import UserInfoTableHead from './components/UserInfoTableHead';
import UserInfoTableRow from './components/UserInfoTableRow';

const UserSettingInfo = ({ data }: { data: TUser }) => {
  return (
    <UserInfoTableRow>
      <UserInfoTableHead headTitle="marketing push allow" />
      <UserInfoTableData>{data?.allow_marketing_push ? 'allow' : 'not allow'}</UserInfoTableData>
      <UserInfoTableHead headTitle="invest push allow" />
      <UserInfoTableData>{data?.allow_invest_push ? 'allow' : 'not allow'}</UserInfoTableData>
      <UserInfoTableHead headTitle="staff" />
      <UserInfoTableData>{data?.is_staff ? 'staff' : 'customer'}</UserInfoTableData>
      <UserInfoTableHead headTitle="active" />
      <UserInfoTableData>{data?.is_active ? 'active' : 'inactive'}</UserInfoTableData>
    </UserInfoTableRow>
  );
};

export default UserSettingInfo;
