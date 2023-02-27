import { AxiosError } from 'axios';
import { MutateFunction, UseMutateAsyncFunction } from 'react-query';
import { useNavigate } from 'react-router-dom';

interface Props {
  loginInput: { email: string; password: string };
  handleSignin: any;
  reset: () => void;
}

interface SigninResponse {
  accessToken: string;
  user: { email: string; id: string };
}

const AuthButton = ({ loginInput, handleSignin, reset }: Props) => {
  const nav = useNavigate();
  const inputIsValid = !loginInput.email.includes('@') || loginInput.password.length < 8;

  const handleLogin = () => {
    handleSignin(loginInput, {
      onSuccess: (data: SigninResponse) => {
        nav('/users');
        sessionStorage.setItem('access_token', data.accessToken);
        sessionStorage.setItem('user_id', data.user.id);
      },
      onSettled: () => {
        reset();
      },
    });
  };

  return (
    <button disabled={inputIsValid} onClick={handleLogin}>
      login
    </button>
  );
};

export default AuthButton;
