import { TUser } from '../../../types/user_types';
import UserBasicInfo from './UserInfoTable/UserBasicInfo';
import UserSettingInfo from './UserInfoTable/UserSettingInfo';

const UserInfoTable = ({ data, id }: { data: TUser; id: string }) => {
  return (
    <section className="w-11/12 text-xs text-center m-auto">
      <section className="flex items-center py-5 w-full m-auto text-left h-fit">
        <img src={data?.photo} alt="../../assets/user-solid.svg" className="rounded-full" />
        <section className="grid grid-cols-7 text-center items-center w-full ml-10">
          <UserBasicInfo id={id} data={data} />
          <UserSettingInfo data={data} />
        </section>
      </section>
    </section>
  );
};

export default UserInfoTable;
