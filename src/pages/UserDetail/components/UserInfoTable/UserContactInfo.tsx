import { TUser } from '../../../../types/user_types';
import convertPhoneNumber from '../../../../utils/convertPhoneNumber';
import UserInfoTableData from './components/UserInfoTableData';
import UserInfoTableHead from './components/UserInfoTableHead';
import UserInfoTableRow from './components/UserInfoTableRow';

const UserContactInfo = ({ data }: { data: TUser }) => {
  return (
    <div className="grid grid-cols-8 col-span-8">
      <div>Email</div>
      <div>{data?.email}</div>
      <div>Contact</div>
      <div>{convertPhoneNumber(data?.phone_number)}</div>
      <div>Address</div>
      <div>{data?.address}</div>
      <div>Detail</div>
      <div>{data?.detail_address}</div>
    </div>
  );
};

export default UserContactInfo;
