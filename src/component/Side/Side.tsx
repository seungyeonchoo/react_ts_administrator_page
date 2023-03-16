import React from 'react';
import { useNavigate } from 'react-router-dom';

const Side = () => {
  const nav = useNavigate();
  return (
    <ul>
      <li onClick={() => nav('/users')}>Users</li>
      <li onClick={() => nav('/accounts')}>Accounts</li>
      <li
        onClick={() => {
          sessionStorage.clear();
          nav('/');
        }}
      >
        Logout
      </li>
    </ul>
  );
};

export default Side;
