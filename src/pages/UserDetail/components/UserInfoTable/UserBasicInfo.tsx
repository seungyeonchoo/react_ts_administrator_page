import { TUser } from '../../../../types/user_types';
import convertDate from '../../../../utils/convertData';
import convertGender from '../../../../utils/convertGender';
import convertPhoneNumber from '../../../../utils/convertPhoneNumber';
import UserInfoName from './UserInfoName';

const UserBasicInfo = ({ id, data }: { id: string; data: TUser }) => {
  return (
    <>
      <tr className="text-center bg-slate-500 text-white">
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
      </tr>
    </>
  );
};

export default UserBasicInfo;
