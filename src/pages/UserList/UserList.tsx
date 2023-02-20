import useFetch from '../../hooks/useFetch';
import useToggle from '../../hooks/useToggle';
import { TUser, TUserSetting } from '../../types/user_types';
import UserItem from './components/UserItem';
import UserModal from './components/UserModal';

const UserList = () => {
  const { toggle: modalToggle, handleToggle: handleModalToggle } = useToggle();
  const {
    data: users,
    error: usersError,
    isLoading: usersIsLoading,
    isError: usersIsError,
  } = useFetch('/users', { _embed: 'accounts' });

  const {
    data: settings,
    error: settingsError,
    isLoading: settingsIsLoading,
    isError: settingsIsError,
  } = useFetch('/usersetting');

  if (usersIsLoading || settingsIsLoading) return <div>Loading...</div>;

  if (usersIsError || settingsIsError)
    return <div>Error: {(usersError || settingsError)?.message}</div>;

  return (
    <>
      <button onClick={() => handleModalToggle()}>Create</button>
      {modalToggle && <UserModal showModal={modalToggle} />}
      <table>
        <tbody>
          {users?.map((user: TUser) => {
            const userSetting = settings?.filter((el: TUserSetting) => el.id === user.id)[0];
            return <UserItem key={user.id} user={user} setting={userSetting} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
