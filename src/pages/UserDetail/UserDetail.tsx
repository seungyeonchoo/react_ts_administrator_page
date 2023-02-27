import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import { ReducerType } from '../../store';
import convertDate from '../../utils/convertData';
import convertGender from '../../utils/convertGender';
import convertPhoneNumber from '../../utils/convertPhoneNumber';
import useToggle from '../../hooks/useToggle';
import useInput from '../../hooks/useInput';
import useMutate from '../../hooks/useMutate';

const UserDetail = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const { userParams } = useSelector((state: ReducerType) => state.params);
  const { toggle, handleToggle } = useToggle(false);
  const { data, isError, isLoading } = useFetch(`/users/${id}`, userParams);
  const { inputValue, handleInputChange, handleSetInput } = useInput({ name: '' });
  const { mutate } = useMutate(`users/${id}`, 'patch', inputValue);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

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
      {toggle ? (
        <input type="text" name="name" value={inputValue.name} onChange={handleInputChange} />
      ) : (
        <div>{data?.name}</div>
      )}
      {toggle ? (
        <>
          <button
            onClick={() => {
              mutate(inputValue);
              handleToggle();
            }}
          >
            저장
          </button>
          <button onClick={handleToggle}>취소</button>
        </>
      ) : (
        <button
          onClick={() => {
            handleSetInput({ name: data?.name });
            handleToggle();
          }}
        >
          변경
        </button>
      )}
      <div>{data?.allow_marketing_push ? 'allow' : 'not allow'}</div>
      <div>{data?.allow_invest_push ? 'allow' : 'not allow'}</div>
      <div>{data?.is_staff ? 'staff' : 'customer'}</div>
      <div>{data?.is_active ? 'active' : 'inactive'}</div>
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
