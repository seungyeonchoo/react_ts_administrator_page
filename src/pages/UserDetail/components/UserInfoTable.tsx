import { TUser } from '../../../types/user_types';
import UserAccountInfo from './UserInfoTable/UserAccountInfo';
import UserBasicInfo from './UserInfoTable/UserBasicInfo';
import UserContactInfo from './UserInfoTable/UserContactInfo';
import UserSettingInfo from './UserInfoTable/UserSettingInfo';

const UserInfoTable = ({ data, id }: { data: TUser; id: string }) => {
  return (
    <section className="w-4/5 text-xs text-center m-auto">
      <span>user information</span>
      <section className="grid gap-2 grid-cols-5 grid-rows-4 items-center py-5 px-10 text-left h-fit">
        <img src={data?.photo} alt="img" className="row-span-4 rounded-full m-auto w-4/5" />
        <UserBasicInfo id={id} data={data} />
        <UserContactInfo data={data} />
        <UserSettingInfo data={data} />
        <UserAccountInfo data={data} />
      </section>
    </section>
  );
};

export default UserInfoTable;
