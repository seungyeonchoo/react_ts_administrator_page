import { TAccount } from '../../../types/user_types';

import addComma from '../../../utils/addComma';
import calcEarningRate from '../../../utils/calcEarningRate';

const AccountProfit = ({ data }: { data: TAccount }) => {
  const profit = calcEarningRate(data?.payments, data?.assets);
  const isGain = +data?.assets - +data?.payments >= 0;

  return (
    <section className="w-1/3 m-auto text-xs grid grid-cols-2 text-center bg-slate-500">
      <div className="col-span-2 table_cell text-white">Payments</div>
      <div className="col-span-2 table_cell bg-slate-100">{addComma(data?.payments)}</div>
      <div className="col-span-2 table_cell text-white">Assets</div>
      <div className="col-span-2 table_cell bg-slate-100">{addComma(data?.assets)}</div>
      <div className="col-span-2 table_cell text-white">Earning Rate</div>
      <div
        className={
          isGain
            ? 'col-span-2 table_cell bg-slate-100 gain'
            : 'col-span-2 table_cell bg-slate-100 loss'
        }
      >
        {profit.earningRate}
      </div>
      <div className="col-span-2 table_cell text-white">Profit</div>
      <div
        className={
          isGain
            ? 'col-span-2 table_cell bg-slate-100 gain'
            : 'col-span-2 table_cell bg-slate-100 loss'
        }
      >
        {profit.profit}
      </div>
    </section>
  );
};

export default AccountProfit;
