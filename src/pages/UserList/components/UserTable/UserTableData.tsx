const UserTableData = ({ data, onClick }: { data: string | number; onClick?: () => void }) => {
  return (
    <td className="border-b p-3.5" onClick={onClick ? onClick : undefined}>
      {data}
    </td>
  );
};

export default UserTableData;
