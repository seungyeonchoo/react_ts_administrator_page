import { useSelector, useDispatch } from 'react-redux';
import { ReducerType, AppDispatch } from '../../../store';
import { updateAccountParams } from '../../../store/slices/paramSlice';

import AccountActiveFilter from './AccountFilter/AccountActiveFilter';
import AccountBrokerFilter from './AccountFilter/AccountBrokerFilter';
import AccountSearchInput from './AccountFilter/AccountSearchInput';
import AccountStatusFilter from './AccountFilter/AccountStatusFilter';

import { ReactComponent as Filter } from '../../../assets/filter-solid.svg';
import { ReactComponent as Search } from '../../../assets/magnifying-glass-solid.svg';
import { ReactComponent as Cancel } from '../../../assets/circle-xmark-solid.svg';
import useToggle from '../../../hooks/useToggle';

const AccountFilter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { accountParams } = useSelector((state: ReducerType) => state.params);
  const { toggle: filterToggle, handleToggle: handleFilterToggle } = useToggle();
  const { toggle: searchToggle, handleToggle: handleSearchToggle } = useToggle();

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (value === 'null') dispatch(updateAccountParams({ ...accountParams, [name]: null }));
    else dispatch(updateAccountParams({ ...accountParams, [name]: value }));
  };

  return (
    <section className="flex w-full h-24 text-sm items-center py-5 px-10">
      {filterToggle ? (
        <section className="flex justify-between w-1/3">
          <AccountActiveFilter is_active={accountParams.is_active} handleFilter={handleFilter} />
          <AccountStatusFilter status={accountParams.status} handleFilter={handleFilter} />
          <AccountBrokerFilter broker_id={accountParams.broker_id} handleFilter={handleFilter} />
          <Cancel className="w-[15px]" onClick={handleFilterToggle} />
        </section>
      ) : (
        <Filter onClick={handleFilterToggle} />
      )}
      {searchToggle ? (
        <AccountSearchInput handleSearchToggle={handleSearchToggle} />
      ) : (
        <Search className="w-4 ml-5" onClick={handleSearchToggle} />
      )}
    </section>
  );
};

export default AccountFilter;
