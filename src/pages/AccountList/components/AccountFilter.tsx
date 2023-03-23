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
    <section className="flex w-1/2 text-sm items-center justify-between py-5">
      {/* <section className="w-full flex items-center justify-between text-sm py-5 m-auto "> */}
      <AccountActiveFilter is_active={accountParams.is_active} handleFilter={handleFilter} />
      <AccountStatusFilter status={accountParams.status} handleFilter={handleFilter} />
      <AccountBrokerFilter broker_id={accountParams.broker_id} handleFilter={handleFilter} />
      <AccountSearchInput />
    </section>
  );
};

export default AccountFilter;
