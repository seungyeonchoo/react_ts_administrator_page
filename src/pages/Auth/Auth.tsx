import useMutate from '../../hooks/useMutate';
import useInput from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AuthInput from './components/AuthInput';
import AuthButton from './components/AuthButton';
import AuthErrorAlert from './components/AuthErrorAlert';

interface InitialInput {
  email: string;
  password: string;
}

const Auth = () => {
  const nav = useNavigate();
  const initialInput = { email: '', password: '' };
  const { inputValue: loginInput, handleInputChange, reset } = useInput<InitialInput>(initialInput);
  const { mutate, isError, error } = useMutate('/signin', 'post', loginInput);

  useEffect(() => {
    if (sessionStorage.getItem('access_token')) nav('/users');
  }, []);

  return (
    <>
      {isError && <AuthErrorAlert signinError={error} />}
      <div>
        <AuthInput loginInput={loginInput} handleInputChange={handleInputChange} />
        <AuthButton loginInput={loginInput} handleSignin={mutate} reset={reset} />
      </div>
    </>
  );
};

export default Auth;
