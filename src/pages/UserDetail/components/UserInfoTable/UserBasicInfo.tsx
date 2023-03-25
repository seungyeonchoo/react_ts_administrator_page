import { TUser } from '../../../../types/user_types';
import convertDate from '../../../../utils/convertData';
import convertGender from '../../../../utils/convertGender';
import convertPhoneNumber from '../../../../utils/convertPhoneNumber';
import UserInfoName from './UserInfoName';

const UserBasicInfo = ({ id, data }: { id: string; data: TUser }) => {
  return (
    <>
      {/* <tr className="text-center bg-slate-500 text-white">
        <th className="font-normal p-2">Name</th>
        <th className="font-normal p-2">Gender</th>
        <th className="font-normal p-2">Age</th>
        <th className="font-normal p-2">Birth Date</th>
        <th className="font-normal p-2">Email</th>
        <th className="font-normal p-2">Contact</th>
        <th className="font-normal p-2">Address</th>
      </tr>
      <tr className="text-center">
        <UserInfoName id={id} data={data} />
        <td className="p-1 bg-slate-100">{convertGender(data?.gender_origin)}</td>
        <td className="p-1 bg-slate-100">{data?.age}</td>
        <td className="p-1 bg-slate-100">{convertDate(data?.birth_date)}</td>
        <td className="p-1 bg-slate-100">{data?.email}</td>
        <td className="p-1 bg-slate-100">{convertPhoneNumber(data?.phone_number)}</td>
        <td className="p-1 bg-slate-100">
          {data?.address}
          <br />
          {data?.detail_address}
        </td>
      </tr> */}

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
