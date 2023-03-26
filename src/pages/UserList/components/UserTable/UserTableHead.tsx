const UserTableHead = () => {
  return (
    <thead>
      <tr className="bg-slate-500 text-white">
        <th className="table_cell font-normal">Name</th>
        <th className="table_cell font-normal">Accounts</th>
        <th className="table_cell font-normal">E-mail</th>
        <th className="table_cell font-normal">Gender</th>
        <th className="table_cell font-normal">Birth Date</th>
        <th className="table_cell font-normal">Phone Number</th>
        <th className="table_cell font-normal">Last Login</th>
        <th className="table_cell font-normal">Created Date</th>
        <th className="table_cell font-normal">Marketing Push</th>
        <th className="table_cell font-normal">Active</th>
        <th className="table_cell font-normal">Staff</th>
        <th className="table_cell font-normal">Delete</th>
      </tr>
    </thead>
  );
};

export default UserTableHead;
