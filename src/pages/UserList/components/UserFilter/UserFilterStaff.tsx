import LabelWithInput from '../../../../component/Common/LabelWithInput';

interface Props {
  is_staff: null | 'true' | 'false';
  handleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const UserFilterStaff = ({ is_staff, handleFilter }: Props) => {
  return (
    <label className="flex flex-col text-center text-xs">
      Staff
      <select
        name="is_staff"
        onChange={handleFilter}
        value={is_staff || 'all'}
        className="text-center p-1 border border-slate-500 mt-1"
      >
        <option value="all">all</option>
        <option value="true">staff</option>
        <option value="false">non-staff</option>
      </select>
    </label>
  );
};

export default UserFilterStaff;
