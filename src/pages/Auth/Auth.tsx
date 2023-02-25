import useMutate from '../../hooks/useMutate';
import useInput from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AuthInput from './components/AuthInput';

interface InitialInput {
  email: string;
  password: string;
}

const Auth = () => {
  const nav = useNavigate();
  const initialInput = { email: '', password: '' };
  const { inputValue: loginInput, handleInputChange, reset } = useInput<InitialInput>(initialInput);
  const {
    mutate: handleSignin,
    isError: isSigninError,
    error: signinError,
  } = useMutate('/signin', 'post', loginInput);

  const handleLogin = () => {
    handleSignin(loginInput, {
      onSuccess: data => {
        nav('/users');
        sessionStorage.setItem('access_token', data.accessToken);
        sessionStorage.setItem('user_id', data.user.id);
      },
      onSettled: () => {
        reset();
      },
    });
  };

  useEffect(() => {
    if (sessionStorage.getItem('access_token')) nav('/users');
  }, []);

  return (
    <>
      {isSigninError && (
        <div>{`Error status ${signinError.response?.status} : ${signinError.response?.data}`}</div>
      )}
      <div>
        <AuthInput loginInput={loginInput} handleInputChange={handleInputChange} />
        <button
          disabled={!loginInput.email.includes('@') || loginInput.password.length < 8}
          onClick={handleLogin}
        >
          login
        </button>
      </div>
    </>
  );
};

export default Auth;
