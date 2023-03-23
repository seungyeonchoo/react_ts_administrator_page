import TableHeadCell from '../../../../component/Table/TableHeadCell';

const AccountTableHead = () => {
  return (
    <thead>
      <tr className="bg-slate-500 text-white">
        <TableHeadCell cell="Account Number" />
        <TableHeadCell cell="Account Name" />
        <TableHeadCell cell="Status" />
        <TableHeadCell cell="Broker" />
        <TableHeadCell cell="User Name" />
        <TableHeadCell cell="Payments" />
        <TableHeadCell cell="Assests" />
        <TableHeadCell cell="Earnings rate" />
        <TableHeadCell cell="Profit" />
        <TableHeadCell cell="Active" />
      </tr>
    </thead>
  );
};

export default AccountTableHead;
