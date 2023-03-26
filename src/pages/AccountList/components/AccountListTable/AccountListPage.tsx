import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store';
import { updateAccountParams } from '../../../../store/slices/paramSlice';

interface Props {
  page: number;
  length: number;
}

const AccountListPage = ({ page, length }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleToPrev = () => {
    dispatch(updateAccountParams({ _page: page - 1 }));
  };

  const handleToNext = () => {
    dispatch(updateAccountParams({ _page: page + 1 }));
  };

  return (
    <section className="flex justify-between items-center text-xs w-1/5 m-auto p-4">
      <button className="button_page hover_button" onClick={handleToPrev} disabled={page === 1}>
        prev
      </button>
      <span>{page}</span>
      <button className="button_page hover_button" onClick={handleToNext} disabled={length < 20}>
        next
      </button>
    </section>
  );
};

export default AccountListPage;
