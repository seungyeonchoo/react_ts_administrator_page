interface Props {
  is_active: null | 'true' | 'false';
  handleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const AccountActiveFilter = ({ handleFilter, is_active }: Props) => {
  return (
    <label className="flex flex-col text-center text-xs">
      Active
      <select
        className="text-center p-1 border border-slate-500 mt-1"
        name="is_active"
        onChange={handleFilter}
        value={is_active || 'null'}
      >
        <option value="null">total</option>
        <option value="true">active</option>
        <option value="false">inactive</option>
      </select>
    </label>
  );
};

export default AccountActiveFilter;
