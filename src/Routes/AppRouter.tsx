import { Routes, Route } from 'react-router-dom';
import { Login } from '../Views/Auth/Login';
import { Register } from '../Views/Auth/Register';
import { ErrorPage } from '../Views/Error';
import { Events } from '../Views/Events';
import { Event } from '../Views/Event';
import { Home } from '../Views/Home';
import { ForgotPassword } from '../Views/Auth/ForgotPassword';
import { ResetPassword } from '../Views/Auth/ResetPassword';
import { Account } from '../Views/Profile/Account';
import { WishList } from '../Views/Profile/WishList';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'*'} element={<ErrorPage />} />

      <Route path={'/events'} element={<Events />}>
        <Route path={'/:id'} element={<Event />} />
      </Route>
      <Route path={'/profile'}>
        <Route path={'/account'} element={<Account />} />
        <Route path={'/wishlist'} element={<WishList />} />
      </Route>

      <Route path={'/register'} element={<Register />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/forgot-password'} element={<ForgotPassword />} />
      <Route path={'/reset-password/:id/:token/'} element={<ResetPassword />} />
    </Routes>
  );
};

