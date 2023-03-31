import { useDispatch } from 'react-redux';
import { updateUserParams } from '../../../../store/slices/paramSlice';

interface Props {
  page: number;
  length: number;
}

const UserListPage = ({ page, length }: Props) => {
  const dispatch = useDispatch();

  const handleToPrev = () => {
    dispatch(updateUserParams({ _page: page - 1 }));
  };

  const handleToNext = () => {
    dispatch(updateUserParams({ _page: page + 1 }));
  };

  return (
    <section className="flex justify-between items-center text-xs w-1/5 m-auto p-4">
      <button className="hover_button button_page" onClick={handleToPrev} disabled={page === 1}>
        prev
      </button>
      <span>{page}</span>
      <button className="hover_button button_page" onClick={handleToNext} disabled={length < 20}>
        next
      </button>
    </section>
  );
};

export default UserListPage;
