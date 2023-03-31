import { AxiosError } from 'axios';

const AuthErrorAlert = ({ signinError }: { signinError: AxiosError }) => {
  return (
    <div className="border border-white bg-orange-300 p-3 m-3 text-xs">{`sign in error : ${signinError.response?.status} ${signinError.response?.statusText}`}</div>
  );
};

export default AuthErrorAlert;
