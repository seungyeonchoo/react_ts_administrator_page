import { TUser } from '../../../../types/user_types';

const UserSettingInfo = ({ data }: { data: TUser }) => {
  return (
    <div className="grid grid-cols-4 gap-5 col-span-4 px-2">
      <div>
        <div>Marketing Push</div>
        <div>{data?.allow_marketing_push ? 'allow' : 'not allow'}</div>
      </div>
      <div>
        <div>Invest Push</div>
        <div>{data?.allow_invest_push ? 'allow' : 'not allow'}</div>
      </div>
      <div>
        <div>Staff</div>
        <div>{data?.is_staff ? 'staff' : 'customer'}</div>
      </div>
      <div>
        <div>Active</div>
        <div>{data?.is_active ? 'active' : 'inactive'}</div>
      </div>
    </div>
  );
};

export default UserSettingInfo;
