import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../store';
import useFetch from '../../hooks/useFetch';
import convertDate from '../../utils/convertData';
import addComma from '../../utils/addComma';
import ACCOUNT_STATUS from '../../fixture/AccountStatus';
import BROKER_LIST from '../../fixture/BrokerList';

const AccountDetail = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { accountParams } = useSelector((state: ReducerType) => state.params);
  const { data, isError, isLoading } = useFetch(`/accounts/${id}`, accountParams);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <table>
      <tr>
        <th>Account Number</th>
        <td>{data?.number}</td>
        <th>Account Name</th>
        <td>{data?.name}</td>
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
        <th>수익률</th>
        <td>{(((+data?.assets - +data?.payments) / +data?.payments) * 100).toFixed(2)}%</td>
        <th>수익금액</th>
        <td>{addComma((+data?.assets - +data?.payments).toString())}</td>
      </tr>
    </table>
  );
};

export default AccountDetail;

// {
//   id: 1,
//   userId: 1,
//   uuid: '8910b399-935d-4200-898b-bb3da7c3bfc7',
//   broker_id: '261',
//   status: 2,
//   number: '375178506564',
//   name: 'Money Market Account',
//   assets: '702487457.42',
//   payments: '675311926.92',
//   is_active: false,
//   created_at: '2020-04-25T13:37:13.564Z',
//   updated_at: '2020-11-21T06:11:57.543Z',
//   user: {
//     id: 1,
//     uuid: 'c0100979-9b0d-4aff-aeb0-68e11bcc0e92',
//     photo:
//       'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/475.jpg',
//     name: 'Joey 성',
//     email: '.28@yahoo.co.kr',
//     age: 46,
//     gender_origin: 3,
//     birth_date: '1967-07-16T09:33:18.562Z',
//     phone_number: '010-5924-0873',
//     address: 'Tunisia 고창시',
//     detail_address: '71971 장유읍 Apt. 997',
//     last_login: '2022-07-31T16:12:53.915Z',
//     created_at: '2021-03-11T06:47:36.909Z',
//     updated_at: '2020-10-05T22:18:37.408Z',
//     allow_marketing_push: false,
//     allow_invest_push: false,
//     is_active: false,
//     is_staff: false,
//   },
// },
