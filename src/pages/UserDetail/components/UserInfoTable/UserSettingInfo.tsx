import { TUser } from '../../../../types/user_types';
import convertDate from '../../../../utils/convertData';

const UserSettingInfo = ({ data }: { data: TUser }) => {
  return (
    <>
      {/* <tr className="text-center bg-slate-500 text-white">
        <th className="font-normal p-2">Marketing Push</th>
        <th className="font-normal p-2">Invest Push</th>
        <th className="font-normal p-2">Staff</th>
        <th className="font-normal p-2">Active</th>
        <th className="font-normal p-2">Created At</th>
        <th className="font-normal p-2">Updated At</th>
        <th className="font-normal p-2">Last Login</th>
      </tr>
      <tr className="text-center">
        <td className="p-5 bg-slate-100">{data?.allow_marketing_push ? 'allow' : 'not allow'}</td>
        <td className="p-5 bg-slate-100">{data?.allow_invest_push ? 'allow' : 'not allow'}</td>
        <td className="p-5 bg-slate-100">{data?.is_staff ? 'staff' : 'customer'}</td>
        <td className="p-5 bg-slate-100">{data?.is_active ? 'active' : 'inactive'}</td>
        <td className="p-5 bg-slate-100">{convertDate(data?.created_at)}</td>
        <td className="p-5 bg-slate-100">{convertDate(data?.updated_at)}</td>
        <td className="p-5 bg-slate-100">{convertDate(data?.last_login)}</td>
      </tr> */}
      <div className="font-normal p-2 bg-slate-500 text-white">Marketing Push</div>
      <div className="font-normal p-2 bg-slate-500 text-white">Invest Push</div>
      <div className="font-normal p-2 bg-slate-500 text-white">Staff</div>
      <div className="font-normal p-2 bg-slate-500 text-white">Active</div>
      <div className="font-normal p-2 bg-slate-500 text-white">Created At</div>
      <div className="font-normal p-2 bg-slate-500 text-white">Updated At</div>
      <div className="font-normal p-2 bg-slate-500 text-white">Last Login</div>

      <div className="p-5 bg-slate-100">{data?.allow_marketing_push ? 'allow' : 'not allow'}</div>
      <div className="p-5 bg-slate-100">{data?.allow_invest_push ? 'allow' : 'not allow'}</div>
      <div className="p-5 bg-slate-100">{data?.is_staff ? 'staff' : 'customer'}</div>
      <div className="p-5 bg-slate-100">{data?.is_active ? 'active' : 'inactive'}</div>
      <div className="p-5 bg-slate-100">{convertDate(data?.created_at)}</div>
      <div className="p-5 bg-slate-100">{convertDate(data?.updated_at)}</div>
      <div className="p-5 bg-slate-100">{convertDate(data?.last_login)}</div>
      {/* </tr> */}
    </>
  );
};

export default UserSettingInfo;
