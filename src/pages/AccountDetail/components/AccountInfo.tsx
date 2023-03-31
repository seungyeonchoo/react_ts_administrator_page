import { TAccount } from '../../../types/user_types';

import ACCOUNT_STATUS from '../../../fixture/AccountStatus';
import BROKER_LIST from '../../../fixture/BrokerList';

import convertDate from '../../../utils/convertDate';
import AccountName from './AccountInfo/AccountName';
import AccountUserName from './AccountInfo/AccountUserName';

const AccountInfo = ({ data, id }: { data: TAccount; id: string }) => {
  return (
    <section className="w-1/3 m-auto text-xs grid grid-cols-5 text-center bg-slate-500">
      <div className="col-span-3 table_cell text-white">Account Number</div>
      <div className="col-span-2 table_cell text-white">Broker</div>
      <div className="col-span-3 table_cell bg-slate-100">{data?.number}</div>
      <div className="col-span-2 table_cell bg-slate-100">{BROKER_LIST[data?.broker_id]}</div>
      <div className="col-span-3 table_cell text-white">Account Name</div>
      <div className="col-span-2 table_cell text-white">Status</div>
      <AccountName name={data?.name} id={id as string} />
      <div className="col-span-2 table_cell bg-slate-100">{ACCOUNT_STATUS[data?.status]}</div>
      <div className="col-span-5 table_cell text-white">User Name</div>
      <AccountUserName userId={data?.userId} userName={data?.user?.name as string} />
      <div className="col-span-2 table_cell text-white">Created Date</div>
      <div className="col-span-2 table_cell text-white">Updated Date</div>
      <div className="col-span-1 table_cell text-white">Active</div>
      <div className="col-span-2 table_cell bg-slate-100">{convertDate(data?.created_at)}</div>
      <div className="col-span-2 table_cell bg-slate-100">{convertDate(data?.updated_at)}</div>
      <div className="col-span-1 table_cell bg-slate-100">
        {data?.is_active ? 'active' : 'inactive'}
      </div>
    </section>
  );
};

export default AccountInfo;
