import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ error }: { error: any }) => {
  const nav = useNavigate();

  if (error?.response?.data === 'jwt expired') {
    sessionStorage.clear();
    nav('/');
  }

  return (
    <main data-testid="error-component">Error : {error?.response?.data || error?.message}</main>
  );
};

export default ErrorPage;
