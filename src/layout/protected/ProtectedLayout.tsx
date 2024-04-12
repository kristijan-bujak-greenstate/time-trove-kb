import { useQueryClient } from 'react-query';
import { Outlet, useNavigate } from 'react-router-dom';

import { Navigation } from '../../components';
import { PageShell } from '../../components/page-shell/PageShell';
import { removeToken } from '../../helpers/tokenHelpers';
import { useTranslation } from '../../hooks/useTranslation';
import { LogoutIcon } from '../../icons';
import { routes } from '../../router/routes';

import { StyledPageShellWrapper } from './protectedLayout.styles';

export const ProtectedLayout = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const queryClient = useQueryClient();

  const handleLogout = () => {
    removeToken();
    queryClient.clear();
    navigate(routes.login);
  };

  const handleCreateTask = () => {
    // TO DO handle button click
  };

  return (
    <>
      <Navigation
        title={t('navigationTitle')}
        icon={LogoutIcon}
        buttonText={t('navigationButtonText')}
        onButtonClick={handleCreateTask}
        onIconButtonClick={handleLogout}
      />
      <StyledPageShellWrapper>
        <PageShell>
          <Outlet />
        </PageShell>
      </StyledPageShellWrapper>
    </>
  );
};
