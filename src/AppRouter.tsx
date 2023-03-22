import { Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Side from './component/Side/Side';
import AccountDetail from './pages/AccountDetail/AccountDetail';
import AccountList from './pages/AccountList/AccountList';
import UserDetail from './pages/UserDetail/UserDetail';
import UserList from './pages/UserList/UserList';

const AppRouter = () => {
  return (
    <>
      <Header />
      <main className="flex justify-between w-full h-11/12">
        <Side />
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
