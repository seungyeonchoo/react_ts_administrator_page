import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import useMutate from '../../hooks/useMutate';
import useInput from '../../hooks/useInput';

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
    <main className="flex flex-col justify-center items-center h-screen bg-slate-700">
      {isError && <AuthErrorAlert signinError={error} />}
      <section className="w-96 h-80 p-8 flex flex-col justify-between items-center border border-gray-300 bg-white rounded-md">
        <AuthInput loginInput={loginInput} handleInputChange={handleInputChange} />
        <AuthButton loginInput={loginInput} handleSignin={mutate} reset={reset} />
      </section>
    </main>
  );
};

export default Auth;
