interface Props {
  is_active: null | 'true' | 'false';
  handleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const UserFilterActive = ({ is_active, handleFilter }: Props) => {
  return (
    <label className="flex flex-col text-center text-xs">
      Active
      <select
        name="is_active"
        onChange={handleFilter}
        value={is_active || 'all'}
        className="text-center p-1 border border-slate-500 mt-1"
      >
        <option value="all">all</option>
        <option value="true">active</option>
        <option value="false">inactive</option>
      </select>
    </label>
  );
};

export default UserFilterActive;
