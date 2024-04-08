import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

import { ProtectedLayout } from '../layout/protected/ProtectedLayout';
import { ProtectedRoute } from '../layout/protected/ProtectedRoute';
import { PublicLayout } from '../layout/public/PublicLayout';
import { PublicRoute } from '../layout/public/PublicRoute';
import { Home } from '../pages/protected/home/Home';
import { Login } from '../pages/public/login/Login';
import { NotFound } from '../pages/public/not-found/NotFound';
import { SignUp } from '../pages/public/sign-up/SingUp';

import { routes } from './routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={
          <PublicRoute>
            <PublicLayout />
          </PublicRoute>
        }
      >
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signUp} element={<SignUp />} />
      </Route>

      <Route
        path={routes.root}
        element={
          <ProtectedRoute>
            <ProtectedLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </>
  )
);
