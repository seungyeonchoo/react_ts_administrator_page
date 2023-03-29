import { TUser } from '../../../../types/user_types';

import convertDate from '../../../../utils/convertDate';
import convertGender from '../../../../utils/convertGender';
import convertPhoneNumber from '../../../../utils/convertPhoneNumber';

import UserInfoName from './UserInfoName';

const UserBasicInfo = ({ id, data }: { id: string; data: TUser }) => {
  return (
    <>
      <div className="p-2 col-span-2 bg-slate-500 text-white">Name</div>
      <div className="p-2 bg-slate-500 text-white">Gender</div>
      <div className="p-2 bg-slate-500 text-white">Age</div>
      <div className="p-2 bg-slate-500 text-white">Birth Date</div>
      <div className="p-2 bg-slate-500 text-white">Email</div>
      <div className="p-2 bg-slate-500 text-white">Contact</div>
      <UserInfoName id={id} data={data} />
      <div className="table_cell bg-slate-100">{convertGender(data?.gender_origin)}</div>
      <div className="table_cell bg-slate-100">{data?.age}</div>
      <div className="table_cell bg-slate-100">{convertDate(data?.birth_date)}</div>
      <div className="table_cell bg-slate-100">{data?.email}</div>
      <div className="table_cell bg-slate-100">{convertPhoneNumber(data?.phone_number)}</div>
      <div className="font-normal p-2 col-span-7 bg-slate-500 text-white">Address</div>
      <div className="col-span-7 table_cell bg-slate-100">
        {data?.address} {data?.detail_address}
      </div>
    </>
  );
};

export default UserBasicInfo;
