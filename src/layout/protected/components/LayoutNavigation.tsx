import { useCallback, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';

import { Dialog, Navigation } from '../../../components';
import { CreateTaskForm } from '../../../components-logic/CreateTask';
import { usePaginationContext } from '../../../context/PaginationContext';
import { useToastContext } from '../../../context/ToastContext';
import { getQueryKey } from '../../../helpers/getQueryKey';
import { removeAccessToken, removeRefreshToken } from '../../../helpers/tokenHelpers';
import { useDebounce } from '../../../hooks/useDebounce';
import { usePagination } from '../../../hooks/usePagination';
import { useTranslation } from '../../../hooks/useTranslation';
import { LogoutIcon } from '../../../icons';
import { routes } from '../../../router/routes';
import { PriorityLevel } from '../../../shared/enums/priorityLevel';
import { QueryKeys } from '../../../shared/enums/queryKeys';
import { useAuthStore } from '../../../store/useAuthStore';

export const LayoutNavigation = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const queryClient = useQueryClient();

  const { clearQueue } = useToastContext();

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);

  const { setSearchParams, setSearchInputValue, searchInputValue } = usePaginationContext();

  const { setCurrentPage, setPriority } = usePagination();

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
    setPriority(PriorityLevel.ALL_OPTIONS);
    navigate(routes.login);
  };

  const handleSearchParamChanged = useCallback(() => {
    if (searchInputValue !== undefined) {
      setSearchParams(searchInputValue);
      setCurrentPage(1);
      queryClient.removeQueries(getQueryKey(QueryKeys.TASKS));
      queryClient.invalidateQueries(getQueryKey(QueryKeys.TASKS));
    }
  }, [searchInputValue, setSearchParams, setCurrentPage, queryClient]);

  const handleOnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  useDebounce({ delay: 650, callback: handleSearchParamChanged });

  return (
    <>
      <CreateTaskForm closeCreateTaskModal={closeCreateTaskModal} isOpen={isCreateTaskModalOpen} />

      <Dialog
        isOpen={isLogoutDialogOpen}
        status={'error'}
        title={t('dialog.logout.title')}
        description={t('dialog.logout.description')}
        primaryButtonText={t('dialog.logout.primaryButton')}
        secondaryButtonText={t('dialog.logout.secondaryButton')}
        onOverlayClick={closeLogoutDialog}
        onPrimaryButtonClick={handleLogout}
        onSecondaryButtonClick={closeLogoutDialog}
      />

      <Navigation
        title={t('navigation.title')}
        icon={LogoutIcon}
        buttonText={t('navigation.buttonText')}
        onButtonClick={openCreateTaskModal}
        onIconButtonClick={openLogoutDialog}
        inputValue={searchInputValue}
        inputPlaceholder={t('navigation.searchInputPlaceholder')}
        handleOnChangeInput={handleOnChangeInput}
      />
    </>
  );
};
