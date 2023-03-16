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

const AccountDetail = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const { toggle, handleToggle } = useToggle(false);
  const { accountParams } = useSelector((state: ReducerType) => state.params);
  const { data, isError, isLoading, error } = useFetch(`/accounts/${id}`, accountParams);
  const { inputValue, handleInputChange, handleSetInput } = useInput({ name: '' });
  const { mutate } = useMutate(`/accounts/${id}`, 'patch', inputValue);

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
    <table>
      <tbody>
        <tr>
          <th>Account Number</th>
          <td>{data?.number}</td>
          <th>Account Name</th>
          {toggle ? (
            <td>
              <input type="text" name="name" value={inputValue.name} onChange={handleInputChange} />
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
    </table>
  );
};

export default AccountDetail;
