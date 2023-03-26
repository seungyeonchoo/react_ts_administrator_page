const UserAccountListHead = () => {
  return (
    <thead>
      <tr className="bg-slate-500 text-white">
        <th className="table_cell">No.</th>
        <th className="table_cell">Number</th>
        <th className="table_cell">Broker</th>
        <th className="table_cell">Status</th>
        <th className="table_cell">Name</th>
        <th className="table_cell">Payment</th>
        <th className="table_cell">Assets</th>
        <th className="table_cell">Earning Rate</th>
        <th className="table_cell">Profit</th>
        <th className="table_cell">Active</th>
      </tr>
    </thead>
  );
};

export default UserAccountListHead;
