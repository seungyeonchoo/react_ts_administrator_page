import LabelWithInput from '../../../../component/Common/LabelWithInput';

interface Props {
  is_staff: null | 'true' | 'false';
  handleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const UserFilterStaff = ({ is_staff, handleFilter }: Props) => {
  return (
    <LabelWithInput labelTitle="staff">
      <select name="is_staff" onChange={handleFilter} value={is_staff || 'all'}>
        <option value="all">all</option>
        <option value="true">staff</option>
        <option value="false">non-staff</option>
      </select>
    </LabelWithInput>
  );
};

export default UserFilterStaff;
