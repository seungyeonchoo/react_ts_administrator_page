import { useDispatch, useSelector } from 'react-redux';

import AccountActiveFilter from './AccountActiveFilter';
import AccountBrokerFilter from './AccountBrokerFilter';
import AccountStatusFilter from './AccountStatusFilter';

import { ReactComponent as Cancel } from '../../../../assets/circle-xmark-solid.svg';
import { AppDispatch, ReducerType } from '../../../../store';
import { updateAccountParams } from '../../../../store/slices/paramSlice';

interface Props {
  handleFilterToggle: () => void;
}

const AccountFilter = ({ handleFilterToggle }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { accountParams } = useSelector((state: ReducerType) => state.params);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (value === 'null') dispatch(updateAccountParams({ ...accountParams, [name]: null }));
    else dispatch(updateAccountParams({ ...accountParams, [name]: value }));
  };

  return (
    <section className="flex justify-between w-1/3">
      <AccountActiveFilter is_active={accountParams.is_active} handleFilter={handleFilter} />
      <AccountStatusFilter status={accountParams.status} handleFilter={handleFilter} />
      <AccountBrokerFilter broker_id={accountParams.broker_id} handleFilter={handleFilter} />
      <Cancel className="icon" onClick={handleFilterToggle} />
    </section>
  );
};

export default AccountFilter;
