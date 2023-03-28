import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as Menu } from '../../assets/bars-solid.svg';

interface Props {
  handleToggle: () => void;
}

const Header = ({ handleToggle }: Props) => {
  const location = useLocation();
  const nav = useNavigate();

  const currLocation = location.pathname.split('/')[1];

  return (
    <header>
      <section className="h-15 bg-slate-300 flex justify-between p-4 shadow-md">
        <Menu onClick={handleToggle} className="icon fill-white ml-5" />
      </section>
      <section className="pl-20 p-3 text-xs bg-slate-50 font-bold">
        <span
          className="text-slate-600 hover:text-slate-800 cursor-pointer"
          onClick={() => nav(`/${currLocation}`)}
        >
          {currLocation}
        </span>
      </section>
    </header>
  );
};

export default Header;
