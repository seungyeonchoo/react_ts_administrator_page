import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRouter from './AppRouter';
import Auth from './pages/Auth/Auth';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
