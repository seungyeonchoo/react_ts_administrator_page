import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, ReducerType } from '../../../store';
import { updateUserParams } from '../../../store/slices/paramSlice';
import UserSearchInput from './UserFilter/UserSearchInput';
import UserFilterStaff from './UserFilter/UserFilterStaff';
import UserFilterActive from './UserFilter/UserFilterActive';
import { ReactComponent as Filter } from '../../../assets/filter-solid.svg';
import { ReactComponent as Search } from '../../../assets/magnifying-glass-solid.svg';
import { ReactComponent as Cancel } from '../../../assets/circle-xmark-solid.svg';
import useToggle from '../../../hooks/useToggle';

const UserFilter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userParams } = useSelector((state: ReducerType) => state.params);
  const { toggle: filterToggle, handleToggle: handleFilterToggle } = useToggle();
  const { toggle: searchToggle, handleToggle: handleSearchToggle } = useToggle();

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (value === 'all') dispatch(updateUserParams({ ...userParams, [name]: null }));
    else dispatch(updateUserParams({ ...userParams, [name]: value }));
  };

  return (
    <section className="flex w-3/5 items-center">
      {filterToggle ? (
        <section className="flex w-1/3 justify-between">
          <UserFilterStaff handleFilter={handleFilter} is_staff={userParams.is_staff} />
          <UserFilterActive handleFilter={handleFilter} is_active={userParams.is_active} />
          <Cancel className="w-[15px]" onClick={handleFilterToggle} />
        </section>
      ) : (
        <Filter className="hover:fill-red-500" onClick={handleFilterToggle} />
      )}
      {searchToggle ? (
        <UserSearchInput handleSearchToggle={handleSearchToggle} />
      ) : (
        <Search className="w-4 hover:fill-red-500 ml-5" onClick={handleSearchToggle} />
      )}
    </section>
  );
};

export default UserFilter;
