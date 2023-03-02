import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, ReducerType } from '../../../store';
import { updateUserParams } from '../../../store/slices/paramSlice';
import LabelWithInput from '../../../component/Common/LabelWithInput';

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
    <div>
      <LabelWithInput labelTitle="staff">
        <select name="is_staff" onChange={handleFilter} value={userParams.is_staff || 'all'}>
          <option value="all">all</option>
          <option value="true">staff</option>
          <option value="false">non-staff</option>
        </select>
      </LabelWithInput>
      <LabelWithInput labelTitle="active">
        <select name="is_active" onChange={handleFilter} value={userParams.is_active || 'all'}>
          <option value="all">all</option>
          <option value="true">active</option>
          <option value="false">inactive</option>
        </select>
      </LabelWithInput>
    </div>
  );
};

export default UserFilter;
