import { TUser } from '../../../../types/user_types';
import convertDate from '../../../../utils/convertData';
import convertGender from '../../../../utils/convertGender';
import convertPhoneNumber from '../../../../utils/convertPhoneNumber';
import UserInfoName from './UserInfoName';

const UserBasicInfo = ({ id, data }: { id: string; data: TUser }) => {
  return (
    <>
      <div className="font-normal p-2 bg-slate-500 text-white">Name</div>
      <div className="font-normal p-2 bg-slate-500 text-white">Gender</div>
      <div className="font-normal p-2 bg-slate-500 text-white">Age</div>
      <div className="font-normal p-2 bg-slate-500 text-white">Birth Date</div>
      <div className="font-normal p-2 bg-slate-500 text-white">Email</div>
      <div className="font-normal p-2 bg-slate-500 text-white">Contact</div>
      <div className="font-normal p-2 bg-slate-500 text-white">Address</div>
      <UserInfoName id={id} data={data} />
      <div className="p-1 bg-slate-100 h-full leading-[57px]">
        {convertGender(data?.gender_origin)}
      </div>
      <div className="p-1 bg-slate-100 h-full leading-[57px]">{data?.age}</div>
      <div className="p-1 bg-slate-100 h-full leading-[57px]">{convertDate(data?.birth_date)}</div>
      <div className="p-1 bg-slate-100 h-full leading-[57px]">{data?.email}</div>
      <div className="p-1 bg-slate-100 h-full leading-[57px]">
        {convertPhoneNumber(data?.phone_number)}
      </div>
      <div className="p-1 bg-slate-100 h-full leading-7">
        {data?.address}
        <br />
        {data?.detail_address}
      </div>
    </>
  );
};

export default UserBasicInfo;
