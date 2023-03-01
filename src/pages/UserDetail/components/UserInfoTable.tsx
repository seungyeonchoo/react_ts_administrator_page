import { TUser } from '../../../types/user_types';
import UserAccountInfo from './UserInfoTable/UserAccountInfo';
import UserBasicInfo from './UserInfoTable/UserBasicInfo';
import UserContactInfo from './UserInfoTable/UserContactInfo';
import UserSettingInfo from './UserInfoTable/UserSettingInfo';

const UserInfoTable = ({ data, id }: { data: TUser; id: string }) => {
  return (
    <table>
      <tbody>
        <img src={data?.photo} alt="img" />
        <td>
          <UserBasicInfo id={id} data={data} />
          <UserContactInfo data={data} />
          <UserAccountInfo data={data} />
          <UserSettingInfo data={data} />
        </td>
      </tbody>
    </table>
  );
};

export default UserInfoTable;
