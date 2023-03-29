import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/linkedin-in.svg';

const Footer = () => {
  return (
    <div className="px-20 justify-between flex bg-white h-15 border-t border-slate-300 mx-5 text-xs p-5">
      <span className="text-slate-500 font-bold">© made by SeungYun Chu</span>
      <div className="flex justify-between w-12">
        <a href="https://github.com/seungyeonchoo">
          <Github className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/seungyun-chu-44b59a255/">
          <LinkedIn className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
