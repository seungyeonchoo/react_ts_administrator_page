import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, ReducerType } from '../../../../store';
import { updateUserParams } from '../../../../store/slices/paramSlice';

import UserFilterActive from './UserFilterActive';
import UserFilterStaff from './UserFilterStaff';

import { ReactComponent as Cancel } from '../../../../assets/circle-xmark-solid.svg';

interface Props {
  handleFilterToggle: () => void;
}

const UserFilter = ({ handleFilterToggle }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { userParams } = useSelector((state: ReducerType) => state.params);

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (value === 'all') dispatch(updateUserParams({ ...userParams, [name]: null }));
    else dispatch(updateUserParams({ ...userParams, [name]: value }));
  };

  return (
    <section className="box_filter">
      <UserFilterStaff handleFilter={handleFilter} is_staff={userParams.is_staff} />
      <UserFilterActive handleFilter={handleFilter} is_active={userParams.is_active} />
      <Cancel className="icon" onClick={handleFilterToggle} />
    </section>
  );
};

export default UserFilter;
