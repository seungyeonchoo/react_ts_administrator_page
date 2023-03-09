import TableHeadCell from '../../../../component/Table/TableHeadCell';

const AccountTableHead = () => {
  return (
    <thead>
      <tr>
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
        <TableHeadCell cell="Created Date" />
        <TableHeadCell cell="Updated Date" />
      </tr>
    </thead>
  );
};

export default AccountTableHead;

// {
//     id: 1,
//     userId: 1,
//     uuid: '8910b399-935d-4200-898b-bb3da7c3bfc7',
//     broker_id: '261',
//     status: 2,
//     number: '375178506564',
//     name: 'Money Market Account',
//     assets: '702487457.42',
//     payments: '675311926.92',
//     is_active: false,
//     created_at: '2020-04-25T13:37:13.564Z',
//     updated_at: '2020-11-21T06:11:57.543Z',
//   },
