import LabelWithInput from '../../../../component/Common/LabelWithInput';

interface Props {
  is_active: null | 'true' | 'false';
  handleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const UserFilterActive = ({ is_active, handleFilter }: Props) => {
  return (
    <LabelWithInput labelTitle="filter active">
      <select name="is_active" onChange={handleFilter} value={is_active || 'all'}>
        <option value="all">all</option>
        <option value="true">active</option>
        <option value="false">inactive</option>
      </select>
    </LabelWithInput>
  );
};

export default UserFilterActive;
