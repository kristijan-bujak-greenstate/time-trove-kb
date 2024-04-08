import { Outlet, useNavigate } from 'react-router-dom';

import { Navigation } from '../../components';
import { removeToken } from '../../helpers/tokenHelpers';
import { useTranslation } from '../../hooks/useTranslation';
import { LogoutIcon } from '../../icons';
import { routes } from '../../router/routes';

export const ProtectedLayout = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleLogout = () => {
    removeToken();
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
      <Outlet />
    </>
  );
};
