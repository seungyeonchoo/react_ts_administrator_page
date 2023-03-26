import { Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Side from './component/Side/Side';
import useToggle from './hooks/useToggle';
import AccountDetail from './pages/AccountDetail/AccountDetail';
import AccountList from './pages/AccountList/AccountList';
import UserDetail from './pages/UserDetail/UserDetail';
import UserList from './pages/UserList/UserList';

const AppRouter = () => {
  const { toggle, handleToggle } = useToggle();

  return (
    <>
      <Header handleToggle={handleToggle} />
      <main className="relative flex justify-between w-full h-11/12">
        {toggle && <Side handleSideToggle={handleToggle} />}
        <Routes>
          <Route path="/accounts" element={<AccountList />} />
          <Route path="/accounts/:id" element={<AccountDetail />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default AppRouter;
