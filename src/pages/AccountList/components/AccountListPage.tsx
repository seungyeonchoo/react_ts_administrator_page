import { useDispatch } from 'react-redux';
import { updateAccountParams } from '../../../store/slices/paramSlice';

interface Props {
  page: number;
  length: number;
}

const AccountListPage = ({ page, length }: Props) => {
  const dispatch = useDispatch();

  const handleToPrev = () => {
    dispatch(updateAccountParams({ _page: page - 1 }));
  };

  const handleToNext = () => {
    dispatch(updateAccountParams({ _page: page + 1 }));
  };

  return (
    <div>
      <button onClick={handleToPrev} disabled={page === 1}>
        prev
      </button>
      <span>{page}</span>
      <button onClick={handleToNext} disabled={length < 20}>
        next
      </button>
    </div>
  );
};

export default AccountListPage;
