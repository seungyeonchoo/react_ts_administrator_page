import useMutate from '../../hooks/useMutate';
import useInput from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface InitialInput {
  email: string;
  password: string;
}

const Auth = () => {
  const nav = useNavigate();
  const initialInput = { email: '', password: '' };
  const { inputValue: loginInput, handleInputChange, reset } = useInput<InitialInput>(initialInput);
  const { mutate, isError, error } = useMutate('/signin', 'post', loginInput);

  const handleLogin = () => {
    mutate(loginInput, {
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
      {isError && <div>{`Error status ${error.response?.status} : ${error.response?.data}`}</div>}
      <div>
        <label>
          <span>email</span>
          <input
            type="email"
            name="email"
            aria-label="email"
            value={loginInput.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>password</span>
          <input
            type="password"
            name="password"
            aria-label="password"
            value={loginInput.password}
            onChange={handleInputChange}
          />
        </label>
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
