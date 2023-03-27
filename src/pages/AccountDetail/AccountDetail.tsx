import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../store';
import useFetch from '../../hooks/useFetch';
import convertDate from '../../utils/convertData';
import addComma from '../../utils/addComma';
import ACCOUNT_STATUS from '../../fixture/AccountStatus';
import BROKER_LIST from '../../fixture/BrokerList';
import LoadingPage from '../../component/LoadingPage/LoadingPage';
import ErrorPage from '../../component/ErrorPage/ErrorPage';
import useToggle from '../../hooks/useToggle';
import useMutate from '../../hooks/useMutate';
import useInput from '../../hooks/useInput';
import calcEarningRate from '../../utils/calcEarningRate';

const AccountDetail = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const { toggle, handleToggle } = useToggle(false);
  const { accountParams } = useSelector((state: ReducerType) => state.params);
  const { data, isError, isLoading, error } = useFetch(`/accounts/${id}`, accountParams);
  const { inputValue, handleInputChange, handleSetInput } = useInput({ name: '' });
  const { mutate } = useMutate(`/accounts/${id}`, 'patch', inputValue);
  const profit = calcEarningRate(data?.payments, data?.assets);
  const isGain = data?.assets - data?.payments >= 0;

  const handleSaveChange = () => {
    mutate(inputValue);
    handleToggle();
  };

  const handleUpdateName = () => {
    handleSetInput({ name: data?.name });
    handleToggle();
  };

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage error={error} />;

  return (
    <section className="container_main flex justify-center">
      <section className="w-1/3 m-auto text-xs grid grid-cols-5 text-center bg-slate-500">
        <div className="col-span-3 table_cell text-white">Account Number</div>
        <div className="col-span-2 table_cell text-white">Broker</div>
        <div className="col-span-3 table_cell bg-slate-100">{data?.number}</div>
        <div className="col-span-2 table_cell bg-slate-100">{BROKER_LIST[data?.broker_id]}</div>
        <div className="col-span-3 table_cell text-white">Account Name</div>
        <div className="col-span-2 table_cell text-white">Status</div>
        <div className="col-span-3 table_cell bg-slate-100">
          {toggle ? (
            <>
              <input type="text" name="name" value={inputValue.name} onChange={handleInputChange} />
              <button onClick={handleSaveChange}>save</button>
              <button onClick={handleToggle}>cancel</button>{' '}
            </>
          ) : (
            <>
              {data?.name} <button onClick={handleUpdateName}>update</button>
            </>
          )}
        </div>
        <div className="col-span-2 table_cell bg-slate-100">{ACCOUNT_STATUS[data?.status]}</div>
        <div className="col-span-5 table_cell text-white">User Name</div>
        <div
          className="col-span-5 p-4 table_cell cell_hover bg-slate-100"
          onClick={() => nav(`/users/${data?.userId}`)}
        >
          {data?.user.name}
        </div>
        <div className="col-span-2 table_cell text-white">Created Date</div>
        <div className="col-span-2 table_cell text-white">Updated Date</div>
        <div className="col-span-1 table_cell text-white">Active</div>
        <div className="col-span-2 table_cell bg-slate-100">{convertDate(data?.created_at)}</div>
        <div className="col-span-2 table_cell bg-slate-100">{convertDate(data?.updated_at)}</div>
        <div className="col-span-1 table_cell bg-slate-100">
          {data?.is_active ? 'active' : 'inactive'}
        </div>
      </section>
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
      {/* <table>
        <tbody>
          <tr>
            <th>Account Number</th>
            <td>{data?.number}</td>
            <th>Account Name</th>
            {toggle ? (
              <td>
                <input
                  type="text"
                  name="name"
                  value={inputValue.name}
                  onChange={handleInputChange}
                />
                <button onClick={handleSaveChange}>save</button>
                <button onClick={handleToggle}>cancel</button>
              </td>
            ) : (
              <td>
                {data?.name} <button onClick={handleUpdateName}>update</button>
              </td>
            )}
          </tr>
          <tr>
            <th>Account status</th>
            <td>{ACCOUNT_STATUS[data?.status]}</td>
            <th>Broker</th>
            <td>{BROKER_LIST[data?.broker_id]}</td>
            <th>User Name</th>
            <td onClick={() => nav(`/users/${data?.userId}`)}>{data?.user.name}</td>
          </tr>
          <tr>
            <th>Created Date</th>
            <td>{convertDate(data?.created_at)}</td>
            <th>Updated Date</th>
            <td>{convertDate(data?.updated_at)}</td>
            <th>Active</th>
            <td>{data?.is_active ? 'active' : 'inactive'}</td>
          </tr>
          <tr>
            <th>Payments</th>
            <td>{addComma(data?.payments)}</td>
            <th>Assets</th>
            <td>{addComma(data?.assets)}</td>
          </tr>
          <tr>
            <th>Earning Rate</th>
            <td>{(((+data?.assets - +data?.payments) / +data?.payments) * 100).toFixed(2)}%</td>
            <th>Profit</th>
            <td>{addComma((+data?.assets - +data?.payments).toString())}</td>
          </tr>
        </tbody>
      </table> */}
    </section>
  );
};

export default AccountDetail;
