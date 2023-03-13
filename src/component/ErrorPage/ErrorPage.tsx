import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ error }: { error: any }) => {
  const nav = useNavigate();

  if (error?.response?.data === 'jwt expired') {
    sessionStorage.clear();
    nav('/');
  }

  return <div>Error : {error?.response?.data || error?.message}</div>;
};

export default ErrorPage;
