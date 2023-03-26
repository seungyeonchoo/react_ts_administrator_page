const AccountTableHead = () => {
  return (
    <thead>
      <tr className="bg-slate-500 text-white">
        <th className="table_cell font-normal">Account Number</th>
        <th className="table_cell font-normal">Account Name</th>
        <th className="table_cell font-normal">Status</th>
        <th className="table_cell font-normal">Broker</th>
        <th className="table_cell font-normal">User Name</th>
        <th className="table_cell font-normal">Payments</th>
        <th className="table_cell font-normal">Assests</th>
        <th className="table_cell font-normal">Earnings rate</th>
        <th className="table_cell font-normal">Profit</th>
        <th className="table_cell font-normal">Active</th>
      </tr>
    </thead>
  );
};

export default AccountTableHead;
