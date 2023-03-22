import React from 'react';
import { useNavigate } from 'react-router-dom';

const Side = () => {
  const nav = useNavigate();

  const email = sessionStorage.getItem('user_email');

  const handleLogout = () => {
    sessionStorage.clear();
    nav('/');
  };

  return (
    <aside className="list-none p-5 text-sm bg-slate-200 w-48 flex flex-col justify-between items-center">
      <div className="grid grid-cols-1 gap-5 justify-between w-full text-center">
        <li
          className="cursor-pointer p-2 mt-3 hover:bg-slate-100 rounded-md hover:font-bold"
          onClick={() => nav('/users')}
        >
          Users
        </li>
        <li
          className="cursor-pointer p-2 mt-3 hover:bg-slate-100 rounded-md hover:font-bold"
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
    </aside>
  );
};

export default Side;
