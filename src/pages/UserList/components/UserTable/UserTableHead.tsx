import UserTableHeadCell from './UserTableHeadCell';

const UserTableHead = () => {
  return (
    <thead>
      <tr>
        <UserTableHeadCell cell="Name" />
        <UserTableHeadCell cell="Accounts" />
        <UserTableHeadCell cell="E-mail" />
        <UserTableHeadCell cell="Gender" />
        <UserTableHeadCell cell="Birth Date" />
        <UserTableHeadCell cell="Phone Number" />
        <UserTableHeadCell cell="Last Login" />
        <UserTableHeadCell cell="Created Date" />
        <UserTableHeadCell cell="Marketing Push" />
        <UserTableHeadCell cell="Status" />
      </tr>
    </thead>
  );
};

export default UserTableHead;
