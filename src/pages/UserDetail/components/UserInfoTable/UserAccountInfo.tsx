import { TUser } from '../../../../types/user_types';
import convertDate from '../../../../utils/convertData';

const UserAccountInfo = ({ data }: { data: TUser }) => {
  return (
    <div className="grid grid-cols-4 gap-5 col-span-4 px-2">
      <div>
        <div className="p-2">Created At</div>
        <div className="p-2">{convertDate(data?.created_at)}</div>
      </div>
      <div>
        <div className="p-2">Updated At</div>
        <div className="p-2">{convertDate(data?.updated_at)}</div>
      </div>
      <div>
        <div className="p-2">Last Login</div>
        <div className="p-2">{convertDate(data?.last_login)}</div>
      </div>
    </div>
  );
};

export default UserAccountInfo;
