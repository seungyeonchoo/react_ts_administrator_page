import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Exclamation } from '../../assets/circle-exclamation-solid.svg';

const ErrorPage = ({ error }: { error: AxiosError }) => {
  const nav = useNavigate();

  if (error?.response?.data === 'jwt expired') {
    sessionStorage.clear();
    nav('/');
  }

  return (
    <section
      data-testid="error-component"
      className="container_main bg-gray-50 rounded-lg flex flex-col justify-center items-center"
    >
      <Exclamation className="w-24 mb-10 fill-slate-700" />
      <span className="text-5xl text-slate-500 font-bold">
        {error?.response?.status} {error?.response?.statusText}
      </span>
    </section>
  );
};

export default ErrorPage;
