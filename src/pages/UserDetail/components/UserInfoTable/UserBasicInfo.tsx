import { TUser } from '../../../../types/user_types';
import convertDate from '../../../../utils/convertData';
import convertGender from '../../../../utils/convertGender';
import UserInfoName from './components/UserInfoName';
import UserInfoTableData from './components/UserInfoTableData';
import UserInfoTableHead from './components/UserInfoTableHead';
import UserInfoTableRow from './components/UserInfoTableRow';

const UserBasicInfo = ({ id, data }: { id: string; data: TUser }) => {
  return (
    <UserInfoTableRow>
      <UserInfoTableHead headTitle="name" />
      <UserInfoName id={id} data={data} />
      <UserInfoTableHead headTitle="gender" />
      <UserInfoTableData>{convertGender(data?.gender_origin)}</UserInfoTableData>
      <UserInfoTableHead headTitle="age" />
      <UserInfoTableData>{data?.age}</UserInfoTableData>
      <UserInfoTableHead headTitle="birth date" />
      <UserInfoTableData>{convertDate(data?.birth_date)}</UserInfoTableData>
    </UserInfoTableRow>
  );
};

export default UserBasicInfo;
