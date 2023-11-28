import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import useMutate from '../../hooks/useMutate';
import useInput from '../../hooks/useInput';

import AuthInput from './components/AuthInput';
import AuthButton from './components/AuthButton';
import AuthErrorAlert from './components/AuthErrorAlert';
import useFetch from '../../hooks/useFetch';

interface InitialInput {
  email: string;
  password: string;
}

const ADMIN_USER = {
  email: 'admin@gmail.com',
  password: 'admin1234!@#$',
};

const Auth = () => {
  const nav = useNavigate();
  const initialInput = { email: '', password: '' };
  const { inputValue: loginInput, handleInputChange, reset } = useInput<InitialInput>(initialInput);
  const { mutate, isError, error } = useMutate('/signin', 'post', loginInput);
  const { mutate: handleSignup } = useMutate('/users', 'post', ADMIN_USER);

  useEffect(() => {
    if (sessionStorage.getItem('access_token')) nav('/users');
  }, []);

  return (
    <main className="flex flex-col justify-center items-center h-screen bg-slate-700 ">
      {isError && <AuthErrorAlert signinError={error} />}
      <section className="relative w-96 h-80 p-8 flex flex-col justify-between items-center border border-gray-300 bg-white rounded-md">
        <AuthInput loginInput={loginInput} handleInputChange={handleInputChange} />
        <AuthButton loginInput={loginInput} handleSignin={mutate} reset={reset} />
        <button
          onClick={handleSignup}
          className="absolute bg-red-200 hover:bg-red-500 text-[0.75rem] text-white p-2 rounded-[0.75rem] top-[1rem] right-[2rem]"
        >
          회원가입
        </button>
      </section>
    </main>
  );
};

export default Auth;
