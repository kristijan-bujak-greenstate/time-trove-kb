import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import { Spinner } from '../../components';
import { useControlNavigationRoutes } from '../../hooks/useControlNavigationRoutes';
import { useIsAuthenticated } from '../../hooks/useIsAuthenticated';
import { routes } from '../../router/routes';
import { StyledSpinnerWrapperFullPage } from '../../shared/styles/fullPageWrapper.styles';

type PublicRouteProps = {
  children: ReactNode;
};

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const { tasks, isLoadingTasks, token } = useIsAuthenticated();

  useControlNavigationRoutes();

  if (isLoadingTasks && token) {
    return (
      <StyledSpinnerWrapperFullPage>
        <Spinner size={'large'} />
      </StyledSpinnerWrapperFullPage>
    );
  }

  if (tasks && token) {
    return <Navigate to={routes.root} />;
  }

  return <>{children}</>;
};
