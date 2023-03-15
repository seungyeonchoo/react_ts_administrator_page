import LabelWithInput from '../../../../component/Common/LabelWithInput';

interface Props {
  is_active: null | 'true' | 'false';
  handleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const AccountActiveFilter = ({ handleFilter, is_active }: Props) => {
  return (
    <LabelWithInput labelTitle="active">
      <select name="is_active" onChange={handleFilter} value={is_active || 'null'}>
        <option value="null">total</option>
        <option value="true">active</option>
        <option value="false">inactive</option>
      </select>
    </LabelWithInput>
  );
};

export default AccountActiveFilter;
