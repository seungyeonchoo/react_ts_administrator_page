const UserTableData = ({ data, onClick }: { data: string | number; onClick?: () => void }) => {
  return <td onClick={onClick ? onClick : undefined}>{data}</td>;
};

export default UserTableData;
