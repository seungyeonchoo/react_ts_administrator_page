import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, ReducerType } from '../../../store';
import { updateUserParams } from '../../../store/slices/paramSlice';
import UserSearchInput from './UserFilter/UserSearchInput';
import UserFilterStaff from './UserFilter/UserFilterStaff';
import UserFilterActive from './UserFilter/UserFilterActive';

const UserFilter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userParams } = useSelector((state: ReducerType) => state.params);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (value === 'all') dispatch(updateUserParams({ ...userParams, [name]: null }));
    else dispatch(updateUserParams({ ...userParams, [name]: value }));
  };

  return (
    <section className="flex w-2/5 justify-around items-center">
      <UserFilterStaff handleFilter={handleFilter} is_staff={userParams.is_staff} />
      <UserFilterActive handleFilter={handleFilter} is_active={userParams.is_active} />
      <UserSearchInput />
    </section>
  );
};

export default UserFilter;
