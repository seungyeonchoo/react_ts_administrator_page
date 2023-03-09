import { useSelector, useDispatch } from 'react-redux';
import { ReducerType, AppDispatch } from '../../../store';
import { updateAccountParams } from '../../../store/slices/paramSlice';

import AccountActiveFilter from './AccountFilter/AccountActiveFilter';
import AccountBrokerFilter from './AccountFilter/AccountBrokerFilter';
import AccountSearchInput from './AccountFilter/AccountSearchInput';
import AccountStatusFilter from './AccountFilter/AccountStatusFilter';

const AccountFilter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { accountParams } = useSelector((state: ReducerType) => state.params);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (value === 'null') dispatch(updateAccountParams({ ...accountParams, [name]: null }));
    else dispatch(updateAccountParams({ ...accountParams, [name]: value }));
  };

  return (
    <div>
      <AccountSearchInput />
      <AccountActiveFilter is_active={accountParams.is_active} handleFilter={handleFilter} />
      <AccountStatusFilter status={accountParams.status} handleFilter={handleFilter} />
      <AccountBrokerFilter broker_id={accountParams.broker_id} handleFilter={handleFilter} />
    </div>
  );
};

export default AccountFilter;
