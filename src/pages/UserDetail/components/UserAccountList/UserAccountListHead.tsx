import TableHeadCell from '../../../../component/Table/TableHeadCell';

const UserAccountListHead = () => {
  return (
    <thead>
      <tr className="bg-slate-500 text-white">
        <TableHeadCell cell="No." />
        <TableHeadCell cell="Number" />
        <TableHeadCell cell="Broker" />
        <TableHeadCell cell="Status" />
        <TableHeadCell cell="Name" />
        <TableHeadCell cell="Payment" />
        <TableHeadCell cell="Assets" />
        <TableHeadCell cell="Earning Rate" />
        <TableHeadCell cell="Profit" />
        <TableHeadCell cell="Active" />
      </tr>
    </thead>
  );
};

export default UserAccountListHead;
