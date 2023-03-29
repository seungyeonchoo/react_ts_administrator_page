import { TUser } from '../../../../types/user_types';

import convertDate from '../../../../utils/convertDate';

const UserSettingInfo = ({ data }: { data: TUser }) => {
  return (
    <>
      <div className="p-2 bg-slate-500 text-white">Marketing Push</div>
      <div className="p-2 bg-slate-500 text-white">Invest Push</div>
      <div className="p-2 bg-slate-500 text-white">Staff</div>
      <div className="p-2 bg-slate-500 text-white">Active</div>
      <div className="p-2 bg-slate-500 text-white">Created At</div>
      <div className="p-2 bg-slate-500 text-white">Updated At</div>
      <div className="p-2 bg-slate-500 text-white">Last Login</div>

      <div className="table_cell bg-slate-100 shadow-b-md">
        {data?.allow_marketing_push ? 'allow' : 'not allow'}
      </div>
      <div className="table_cell bg-slate-100 shadow-b-md">
        {data?.allow_invest_push ? 'allow' : 'not allow'}
      </div>
      <div className="table_cell bg-slate-100 shadow-b-md">
        {data?.is_staff ? 'staff' : 'customer'}
      </div>
      <div className="table_cell bg-slate-100 shadow-b-md">
        {data?.is_active ? 'active' : 'inactive'}
      </div>
      <div className="table_cell bg-slate-100 shadow-b-md">{convertDate(data?.created_at)}</div>
      <div className="table_cell bg-slate-100 shadow-b-md">{convertDate(data?.updated_at)}</div>
      <div className="table_cell bg-slate-100 shadow-b-md">{convertDate(data?.last_login)}</div>
    </>
  );
};

export default UserSettingInfo;
