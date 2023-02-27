import { AxiosError } from 'axios';

const AuthErrorAlert = ({ signinError }: { signinError: AxiosError }) => {
  return (
    <div>{`Error status ${signinError.response?.status} : ${signinError.response?.data}`}</div>
  );
};

export default AuthErrorAlert;
