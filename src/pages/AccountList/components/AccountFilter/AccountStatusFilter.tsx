import LabelWithInput from '../../../../component/Common/LabelWithInput';
import ACCOUNT_STATUS from '../../../../fixture/AccountStatus';

type status_key = null | '9999' | '1' | '2' | '3' | '4';

interface Props {
  status: status_key;
  handleFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const AccountStatusFilter = ({ status, handleFilter }: Props) => {
  return (
    <LabelWithInput labelTitle="status">
      <select name="status" onChange={handleFilter} value={status || 'null'}>
        <option value="null">total</option>
        {Object.keys(ACCOUNT_STATUS).map((status: string) => (
          <option key={status} value={status}>
            {ACCOUNT_STATUS[status]}
          </option>
        ))}
      </select>
    </LabelWithInput>
  );
};

export default AccountStatusFilter;
