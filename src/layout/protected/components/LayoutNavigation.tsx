import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';

import { axiosInstance } from '../../../api/axiosInstance';
import { endpoints } from '../../../api/endpoints/endpoints';
import { PostTaskResponse } from '../../../api/types/responses/postTaskResponse';
import { Dialog, Modal, Navigation, OptionSelectPriority, TaskForm } from '../../../components';
import { removeToken } from '../../../helpers/tokenHelpers';
import { useToastQueue } from '../../../hooks/useToastQueue';
import { useTranslation } from '../../../hooks/useTranslation';
import { EditIcon, LogoutIcon } from '../../../icons';
import { routes } from '../../../router/routes';
import { ChipStatus } from '../../../shared/enums/chipStatus';
import { QueryKeys } from '../../../shared/enums/queryKeys';
import { TaskData, taskFieldNames } from '../../../shared/schemas/taskSchema';

const mockedSelectOptionsItems: OptionSelectPriority[] = [
  {
    id: '1',
    status: ChipStatus.SUCCESS,
    value: 'Low',
  },
  {
    id: '2',
    status: ChipStatus.WARNING,
    value: 'Medium',
  },
  {
    id: '3',
    status: ChipStatus.ERROR,
    value: 'High',
  },
];

export const LayoutNavigation = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const { addToQueue, toastComponents } = useToastQueue();

  const queryClient = useQueryClient();

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [isDiscardChangesDialogOpen, setIsDiscardChangesDialogOpen] = useState(false);
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);

  const openCreateTaskModal = () => {
    setIsCreateTaskModalOpen(true);
  };

  const closeCreateTaskModal = () => {
    setIsCreateTaskModalOpen(false);
  };

  const openDiscardChangesDialog = () => {
    setIsDiscardChangesDialogOpen(true);
  };

  const closeDiscardChangesDialog = () => {
    setIsDiscardChangesDialogOpen(false);
  };

  const openLogoutDialog = () => {
    setIsLogoutDialogOpen(true);
  };

  const closeLogoutDialog = () => {
    setIsLogoutDialogOpen(false);
  };

  const handleOverlayClick = () => {
    if (!isDirty) {
      closeCreateTaskModal();
      reset();
    } else {
      openDiscardChangesDialog();
    }
  };

  const handleLogout = () => {
    removeToken();
    queryClient.clear();
    navigate(routes.login);
  };

  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isDirty },
    setValue,
    reset,
    getValues,
  } = useFormContext<TaskData>();

  const handleOptionSelectClick = (option: OptionSelectPriority) => {
    setValue(taskFieldNames.selectedOption, option, { shouldValidate: true });
  };

  const { mutate: createTaskMutation, isLoading } = useMutation<PostTaskResponse, unknown, TaskData>({
    mutationFn: (data) =>
      axiosInstance.post(endpoints.tasks, {
        title: data.title,
        description: data.description,
        priority: data.selectedOption.value,
      }),

    onSuccess: () => {
      reset();
      closeCreateTaskModal();
      addToQueue({
        status: 'success',
        titleKey: 'createTaskToastTitleSuccess',
        descriptionKey: 'createTaskToastDescriptionSuccess',
      });
      queryClient.invalidateQueries(QueryKeys.TASKS);
    },

    onError: () => {
      addToQueue({
        status: 'error',
        titleKey: 'createTaskToastTitleError',
        descriptionKey: 'createTaskToastDescriptionSuccess',
      });
    },
  });

  const onSubmit = (data: TaskData) => {
    createTaskMutation(data);
  };

  return (
    <>
      {toastComponents}

      <Modal maxWidth={'41.25rem'} isOpen={isCreateTaskModalOpen} onOverlayClick={handleOverlayClick}>
        <TaskForm
          headerIcon={EditIcon}
          headerTitle={t('createTaskModalTitle')}
          description={t('createTaskModalDescription')}
          formTitle={t('createTaskModalSubTitle')}
          buttonText={t('createTaskButtonText')}
          selectOptionList={mockedSelectOptionsItems}
          inputProps={{
            label: t('createTaskModalLabelInput'),
            type: 'text',
            placeholder: t('createTaskModalPlaceholderInput'),
            error: errors[taskFieldNames.title]?.message,
            ...register(taskFieldNames.title),
          }}
          textAreaProps={{
            label: t('createTaskModalLabelTextarea'),
            placeholder: t('createTaskModalPlaceholderTextarea'),
            error: errors[taskFieldNames.description]?.message,
            ...register(taskFieldNames.description),
          }}
          onSubmitForm={handleSubmit(onSubmit)}
          handleOptionSelectClick={handleOptionSelectClick}
          selectedOption={getValues(taskFieldNames.selectedOption)}
          isButtonDisabled={!isValid}
          optionSelectTitle={t('createTaskOptionSelectTitle')}
          isLoadingButton={isLoading}
        />
      </Modal>

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

      <Dialog
        isOpen={isDiscardChangesDialogOpen}
        status={'error'}
        title={t('discardChangesDialogTitle')}
        description={t('discardChangesDialogDescription')}
        primaryButtonText={t('discardChangesPrimaryButtonText')}
        secondaryButtonText={t('discardChangesSecondaryButtonText')}
        onOverlayClick={closeDiscardChangesDialog}
        onPrimaryButtonClick={() => {
          closeDiscardChangesDialog();
          closeCreateTaskModal();
          reset();
        }}
        onSecondaryButtonClick={closeDiscardChangesDialog}
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
