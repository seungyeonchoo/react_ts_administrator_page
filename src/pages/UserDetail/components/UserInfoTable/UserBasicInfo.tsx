import { TUser } from '../../../../types/user_types';
import convertDate from '../../../../utils/convertData';
import convertGender from '../../../../utils/convertGender';
import UserInfoName from './components/UserInfoName';
import UserInfoTableData from './components/UserInfoTableData';
import UserInfoTableHead from './components/UserInfoTableHead';
import UserInfoTableRow from './components/UserInfoTableRow';

const UserBasicInfo = ({ id, data }: { id: string; data: TUser }) => {
  return (
    <div className="grid grid-cols-8 col-span-8">
      <div>Name</div>
      <UserInfoName id={id} data={data} />
      <div>Gender</div>
      <div>{convertGender(data?.gender_origin)}</div>
      <div>Age</div>
      <div>{data?.age}</div>
      <div>Birth Date</div>
      <div>{convertDate(data?.birth_date)}</div>
    </div>
  );
};

export default UserBasicInfo;
