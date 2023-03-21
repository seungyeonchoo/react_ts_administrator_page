import { useSelector } from 'react-redux';
import { ReducerType } from '../../store';
const Header = () => {
  const { currEmail } = useSelector((state: ReducerType) => state.current);
  return (
    <header className="h-24 bg-slate-500 flex justify-between p-4 ">
      <section>header</section>
      <section>{currEmail}</section>
    </header>
  );
};

export default Header;
