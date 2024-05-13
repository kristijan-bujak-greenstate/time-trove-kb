import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { Spinner } from '../../components';
import { useControlNavigationRoutes } from '../../hooks/useControlNavigationRoutes';
import { useIsAuthenticated } from '../../hooks/useIsAuthenticated';
import { routes } from '../../router/routes';
import { StyledSpinnerWrapperFullPage } from '../../shared/styles/fullPageWrapper.styles';
import { useAuthStore } from '../../store/useAuthStore';

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoading, loggedUser, queryClient } = useIsAuthenticated();
  const { isLogged } = useAuthStore();

  useControlNavigationRoutes();

  if (isLoading) {
    return (
      <StyledSpinnerWrapperFullPage>
        <Spinner size={'large'} />
      </StyledSpinnerWrapperFullPage>
    );
  }

  if (!loggedUser?.id || !isLogged) {
    queryClient.clear();
    return <Navigate to={routes.login} />;
  }

  return <>{children}</>;
};
