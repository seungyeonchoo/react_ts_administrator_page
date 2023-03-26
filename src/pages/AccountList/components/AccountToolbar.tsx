import useToggle from '../../../hooks/useToggle';

import AccountSearchInput from './AccountFilter/AccountSearchInput';
import AccountFilter from './AccountFilter/AccountFilter';

import { ReactComponent as Filter } from '../../../assets/filter-solid.svg';
import { ReactComponent as Search } from '../../../assets/magnifying-glass-solid.svg';

const AccountToolBar = () => {
  const { toggle: filterToggle, handleToggle: handleFilterToggle } = useToggle();
  const { toggle: searchToggle, handleToggle: handleSearchToggle } = useToggle();

  return (
    <section className="flex w-full h-20 text-sm items-center py-5 px-10">
      {filterToggle ? (
        <AccountFilter handleFilterToggle={handleFilterToggle} />
      ) : (
        <Filter className="icon" onClick={handleFilterToggle} />
      )}
      {searchToggle ? (
        <AccountSearchInput handleSearchToggle={handleSearchToggle} />
      ) : (
        <Search className="icon ml-5" onClick={handleSearchToggle} />
      )}
    </section>
  );
};

export default AccountToolBar;
