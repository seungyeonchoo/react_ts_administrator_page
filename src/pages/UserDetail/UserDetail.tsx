import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import { ReducerType } from '../../store';
import convertDate from '../../utils/convertData';
import convertGender from '../../utils/convertGender';
import convertPhoneNumber from '../../utils/convertPhoneNumber';

const UserDetail = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const { userParams } = useSelector((state: ReducerType) => state.params);
  const { data, isError, isLoading, error } = useFetch(`/users/${id}`, userParams);
  console.log(data);
  return (
    <>
      {/* user info */}
      <div>{data?.address}</div>
      <div>{data?.detail_address}</div>
      <div>{convertGender(data?.gender_origin)}</div>
      <div>{convertDate(data?.birth_date)}</div>
      <div>{convertDate(data?.created_at)}</div>
      <div>{convertDate(data?.last_login)}</div>
      <div>{convertDate(data?.updated_at)}</div>
      <div>{data?.email}</div>
      <div>{data?.age}</div>
      <img src={data?.photo} alt="img" />
      <div>{data?.name}</div>
      <div>{convertPhoneNumber(data?.phone_number)}</div>
      {/* user account */}
      <ul>
        {data?.accounts.map((el: any) => {
          return (
            <li key={el.id} onClick={() => nav(`/accounts/${el.id}`)}>
              {el.number}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserDetail;

// accounts: [];
// address: 'Cuba 전주시';
// age: 30;
// birth_date: '1996-09-01T23:57:26.832Z';
// created_at: '2019-11-07T06:07:10.243Z';
// detail_address: '8996 연산읍 Suite 615';
// email: '_@gmail.com';
// gender_origin: 4;
// id: 1;
// last_login: '2022-02-03T23:35:12.985Z';
// name: 'Kim 오';
// phone_number: '010-3710-9083';
// photo: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/969.jpg';
// updated_at: '2021-11-16T19:15:44.490Z';
// uuid: 'e7b5d524-7d32-40b7-b2b6-a88ae6bff1ac';
