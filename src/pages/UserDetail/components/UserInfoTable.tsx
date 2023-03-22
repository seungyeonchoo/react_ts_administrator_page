import { TUser } from '../../../types/user_types';
import UserAccountInfo from './UserInfoTable/UserAccountInfo';
import UserBasicInfo from './UserInfoTable/UserBasicInfo';
import UserContactInfo from './UserInfoTable/UserContactInfo';
import UserSettingInfo from './UserInfoTable/UserSettingInfo';

const UserInfoTable = ({ data, id }: { data: TUser; id: string }) => {
  return (
    <section className="w-full py-10 px-15   text-sm text-center">
      <span>user information</span>
      <section>
        <section className="grid grid-cols-10 grid-rows-4">
          <img src={data?.photo} alt="img" className="col-span-2 row-span-4 rounded-full" />
          <UserBasicInfo id={id} data={data} />
          <UserContactInfo data={data} />
          <UserAccountInfo data={data} />
          <UserSettingInfo data={data} />
        </section>
      </section>
    </section>
  );
};

export default UserInfoTable;
