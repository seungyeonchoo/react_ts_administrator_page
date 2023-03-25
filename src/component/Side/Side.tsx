import { useNavigate } from 'react-router-dom';

const Side = () => {
  const nav = useNavigate();

  const email = sessionStorage.getItem('user_email');

  const handleLogout = () => {
    sessionStorage.clear();
    nav('/');
  };

  return (
    <aside className="list-none text-xs w-48 flex flex-col justify-center items-center absolute top-40">
      <div className="flex flex-col justify-between h-60 rounded-r-md bg-slate-300 w-full py-3 shadow-md">
        <div className="grid grid-cols-1 gap-5 justify-between w-full text-center">
          <li
            className="cursor-pointer p-2 mt-1 hover:bg-slate-100 hover:font-bold"
            onClick={() => nav('/users')}
          >
            Users
          </li>
          <li
            className="cursor-pointer p-2 mt-1 hover:bg-slate-100 hover:font-bold"
            onClick={() => nav('/accounts')}
          >
            Accounts
          </li>
        </div>
        <div className="grid grid-cols-1 gap-5 justify-between w-full text-center">
          <li className="font-normal text-gray-500">{email}</li>
          <li
            className="cursor-pointer pb-3 hover:text-red-500 hover:font-bold "
            onClick={handleLogout}
          >
            Logout
          </li>
        </div>
      </div>
    </aside>
  );
};

export default Side;
