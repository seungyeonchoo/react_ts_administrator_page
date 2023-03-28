import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/linkedin-in.svg';

const Footer = () => {
  return (
    <div className="px-20 justify-between flex bg-white h-15 border-t border-slate-300 mx-5 text-xs p-5">
      <span className="text-slate-500 font-bold">© made by SeungYun Chu</span>
      <div className="flex justify-between w-12">
        <Github className="icon" />
        <LinkedIn className="icon" />
      </div>
    </div>
  );
};

export default Footer;
