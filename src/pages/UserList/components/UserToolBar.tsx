import useToggle from '../../../hooks/useToggle';

import { ReactComponent as Filter } from '../../../assets/filter-solid.svg';
import { ReactComponent as Search } from '../../../assets/magnifying-glass-solid.svg';

import UserFilter from './UserToolBar/UserFilter';
import UserSearchInput from './UserToolBar/UserSearchInput';
import UserCreateButton from './UserToolBar/UserCreateButton';

interface Props {
  handleModalToggle: () => void;
}

const UserToolBar = ({ handleModalToggle }: Props) => {
  const { toggle: filterToggle, handleToggle: handleFilterToggle } = useToggle();
  const { toggle: searchToggle, handleToggle: handleSearchToggle } = useToggle();

  return (
    <section className="w-full h-20 flex items-center justify-between text-sm py-5 px-10 m-auto">
      <section className="flex w-3/5 items-center">
        {filterToggle ? (
          <UserFilter handleFilterToggle={handleFilterToggle} />
        ) : (
          <Filter className="icon" onClick={handleFilterToggle} />
        )}

        {searchToggle ? (
          <UserSearchInput handleSearchToggle={handleSearchToggle} />
        ) : (
          <Search className="icon ml-5" onClick={handleSearchToggle} />
        )}
      </section>
      <UserCreateButton handleModalToggle={handleModalToggle} />
    </section>
  );
};

export default UserToolBar;
