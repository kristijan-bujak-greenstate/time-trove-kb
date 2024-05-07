import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';

import { Dialog, Navigation } from '../../../components';
import { CreateTaskForm } from '../../../components-logic/CreateTask';
import { removeToken } from '../../../helpers/tokenHelpers';
import { useTranslation } from '../../../hooks/useTranslation';
import { LogoutIcon } from '../../../icons';
import { routes } from '../../../router/routes';

export const LayoutNavigation = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const queryClient = useQueryClient();

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);

  const openCreateTaskModal = () => {
    setIsCreateTaskModalOpen(true);
  };

  const closeCreateTaskModal = () => {
    setIsCreateTaskModalOpen(false);
  };

  const openLogoutDialog = () => {
    setIsLogoutDialogOpen(true);
  };

  const closeLogoutDialog = () => {
    setIsLogoutDialogOpen(false);
  };

  const handleLogout = () => {
    removeToken();
    queryClient.clear();
    navigate(routes.login);
  };

  return (
    <>
      <CreateTaskForm closeCreateTaskModal={closeCreateTaskModal} isOpen={isCreateTaskModalOpen} />

      <Dialog
        isOpen={isLogoutDialogOpen}
        status={'error'}
        title={t('logoutDialogTitle')}
        description={t('logoutDialogDescription')}
        primaryButtonText={t('logoutDialogPrimaryButton')}
        secondaryButtonText={t('logoutDialogSecondaryButton')}
        onOverlayClick={closeLogoutDialog}
        onPrimaryButtonClick={handleLogout}
        onSecondaryButtonClick={closeLogoutDialog}
      />

      <Navigation
        title={t('navigationTitle')}
        icon={LogoutIcon}
        buttonText={t('navigationButtonText')}
        onButtonClick={openCreateTaskModal}
        onIconButtonClick={openLogoutDialog}
      />
    </>
  );
};
