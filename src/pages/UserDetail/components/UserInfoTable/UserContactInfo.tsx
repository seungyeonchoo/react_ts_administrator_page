import { TUser } from '../../../../types/user_types';
import convertPhoneNumber from '../../../../utils/convertPhoneNumber';
import UserInfoTableData from './components/UserInfoTableData';
import UserInfoTableHead from './components/UserInfoTableHead';
import UserInfoTableRow from './components/UserInfoTableRow';

const UserContactInfo = ({ data }: { data: TUser }) => {
  return (
    <UserInfoTableRow>
      <UserInfoTableHead headTitle="email" />
      <UserInfoTableData>{data?.email}</UserInfoTableData>
      <UserInfoTableHead headTitle="phone" />
      <UserInfoTableData>{convertPhoneNumber(data?.phone_number)}</UserInfoTableData>
      <UserInfoTableHead headTitle="address" />
      <UserInfoTableData>{data?.address}</UserInfoTableData>
      <UserInfoTableHead headTitle="detail" />
      <UserInfoTableData>{data?.detail_address}</UserInfoTableData>
    </UserInfoTableRow>
  );
};

export default UserContactInfo;
