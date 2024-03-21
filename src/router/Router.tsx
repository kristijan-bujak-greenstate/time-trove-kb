import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

import { Layout } from '../layout/Layout';
import { Home } from '../pages/protected/home/Home';
import { Login } from '../pages/public/login/Login';
import { NotFound } from '../pages/public/not-found/NotFound';
import { SingUp } from '../pages/public/sign-up/SingUp';

import { routes } from './routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={routes.login} element={<Login />} />
      <Route path={routes.signUp} element={<SingUp />} />
      <Route path={routes.root} element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);
