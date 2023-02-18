import useMutate from '../../hooks/useMutate';
import useInput from '../../hooks/useInput';

type InitialInput = { email: string; password: string };

const Auth = () => {
  const { inputValue: loginInput, handleInputChange } = useInput<InitialInput>({
    email: '',
    password: '',
  });

  const { mutate } = useMutate('/signin', 'post', loginInput);

  const isValidInput = !loginInput.email.includes('@') || loginInput.password.length < 8;

  return (
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
      <button disabled={isValidInput} onClick={mutate}>
        login
      </button>
    </div>
  );
};

export default Auth;
