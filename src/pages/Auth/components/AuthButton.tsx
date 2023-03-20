import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import { updateUserEmail } from '../../../store/slices/currUserSlice';

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
  const dispatch = useDispatch<AppDispatch>();
  const inputIsValid = !loginInput.email.includes('@') || loginInput.password.length < 8;

  const handleLogin = () => {
    handleSignin(loginInput, {
      onSuccess: (data: SigninResponse) => {
        nav('/users');
        sessionStorage.setItem('access_token', data.accessToken);
        sessionStorage.setItem('user_id', data.user.id);
        dispatch(updateUserEmail(data.user.email));
      },
      onSettled: () => {
        reset();
      },
    });
  };

  return (
    <button
      className="h-9 w-full p-3 m-3 bg-gray-600 rounded-md text-sm leading-3 text-white disabled:bg-gray-300 disabled:cursor-auto cursor-pointer hover:bg-gray-800"
      disabled={inputIsValid}
      onClick={handleLogin}
    >
      Sign In
    </button>
  );
};

export default AuthButton;
