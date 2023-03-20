import TableHeadCell from '../../../../component/Table/TableHeadCell';

const UserTableHead = () => {
  return (
    <thead>
      <tr className="bg-slate-500 text-white">
        <TableHeadCell cell="Name" />
        <TableHeadCell cell="Accounts" />
        <TableHeadCell cell="E-mail" />
        <TableHeadCell cell="Gender" />
        <TableHeadCell cell="Birth Date" />
        <TableHeadCell cell="Phone Number" />
        <TableHeadCell cell="Last Login" />
        <TableHeadCell cell="Created Date" />
        <TableHeadCell cell="Marketing Push" />
        <TableHeadCell cell="Active" />
        <TableHeadCell cell="Staff" />
      </tr>
    </thead>
  );
};

export default UserTableHead;
