import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

import { Home } from '../pages/protected/home/Home';
import { Login } from '../pages/public/login/Login';
import { NotFound } from '../pages/public/not-found/NotFound';
import { SignUp } from '../pages/public/sign-up/SingUp';
import { ProtectedLayout } from '../protected-layout/ProtectedLayout';
import { PublicLayout } from '../public-layout/PublicLayout';

import { routes } from './routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PublicLayout />}>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signUp} element={<SignUp />} />
      </Route>
      <Route path={routes.root} element={<ProtectedLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);
