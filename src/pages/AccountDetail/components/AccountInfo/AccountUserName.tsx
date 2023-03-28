import { useNavigate } from 'react-router-dom';

const AccountUserName = ({ userId, userName }: { userId: number; userName: string }) => {
  const nav = useNavigate();
  return (
    <div
      className="col-span-5 p-4 table_cell cell_hover bg-slate-100"
      onClick={() => nav(`/users/${userId}`)}
    >
      {userName}
    </div>
  );
};

export default AccountUserName;
