import { useState } from 'react';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';

import { Dialog, Navigation } from '../../../components';
import { CreateTaskForm } from '../../../components-logic/CreateTask';
import { usePaginationContext } from '../../../context/PaginationContext';
import { useToastContext } from '../../../context/ToastContext';
import { removeAccessToken, removeRefreshToken } from '../../../helpers/tokenHelpers';
import { useTranslation } from '../../../hooks/useTranslation';
import { LogoutIcon } from '../../../icons';
import { routes } from '../../../router/routes';
import { useAuthStore } from '../../../store/useAuthStore';

export const LayoutNavigation = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const queryClient = useQueryClient();

  const { setCurrentPage } = usePaginationContext();

  const { clearQueue } = useToastContext();

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
    clearQueue();
    removeAccessToken();
    removeRefreshToken();
    useAuthStore.getState().setIsLogged(false);
    queryClient.clear();
    setCurrentPage(1);
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
