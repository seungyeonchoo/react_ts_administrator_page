import TableHeadCell from '../../../../component/Table/TableHeadCell';

const UserTableHead = () => {
  return (
    <thead>
      <tr>
        <TableHeadCell cell="Name" />
        <TableHeadCell cell="Accounts" />
        <TableHeadCell cell="E-mail" />
        <TableHeadCell cell="Gender" />
        <TableHeadCell cell="Birth Date" />
        <TableHeadCell cell="Phone Number" />
        <TableHeadCell cell="Last Login" />
        <TableHeadCell cell="Created Date" />
        <TableHeadCell cell="Marketing Push" />
        <TableHeadCell cell="Status" />
      </tr>
    </thead>
  );
};

export default UserTableHead;
