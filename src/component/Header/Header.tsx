interface Props {
  handleToggle: () => void;
}

const Header = ({ handleToggle }: Props) => {
  return (
    <header className="h-20 bg-slate-500 flex justify-between p-4" onClick={handleToggle}>
      header
    </header>
  );
};

export default Header;
