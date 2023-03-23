import { TUser } from '../../../../types/user_types';
import convertDate from '../../../../utils/convertData';
import convertGender from '../../../../utils/convertGender';
import UserInfoName from './components/UserInfoName';

const UserBasicInfo = ({ id, data }: { id: string; data: TUser }) => {
  return (
    <div className="grid grid-cols-3 gap-5 col-span-4 px-2">
      <div>
        <div className="p-2">Name</div>
        <UserInfoName id={id} data={data} />
      </div>
      <div className="flex justify-around">
        <div>
          <div className="p-2">Gender</div>
          <div className="p-2">{convertGender(data?.gender_origin)}</div>
        </div>
        <div>
          <div className="p-2">Age</div>
          <div className="p-2">{data?.age}</div>
        </div>
      </div>
      <div>
        <div className="p-2">Birth Date</div>
        <div className="p-2">{convertDate(data?.birth_date)}</div>
      </div>
    </div>
  );
};

export default UserBasicInfo;
