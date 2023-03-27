import { ReactComponent as Menu } from '../../assets/bars-solid.svg';

interface Props {
  handleToggle: () => void;
}

const Header = ({ handleToggle }: Props) => {
  return (
    <header className="h-20 bg-slate-300 flex justify-between p-4 shadow-md">
      <Menu onClick={handleToggle} className="icon fill-white ml-5" />
    </header>
  );
};

export default Header;
