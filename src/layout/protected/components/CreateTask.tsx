import { useFormContext } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';

import { axiosInstance } from '../../../api/axiosInstance';
import { endpoints } from '../../../api/endpoints/endpoints';
import { TaskResponse } from '../../../api/types/responses/postTaskResponse';
import { Dialog, Modal, OptionSelectPriority, TaskForm } from '../../../components';
import { ControlledForm } from '../../../components/controlled-form/ControlledForm';
import { useToastQueue } from '../../../hooks/useToastQueue';
import { EditIcon } from '../../../icons';
import { mockedSelectOptionsItems } from '../../../shared/data/selectOptionsItems';
import { QueryKeys } from '../../../shared/enums/queryKeys';
import { TaskData, taskFieldNames, taskSchema } from '../../../shared/schemas/taskSchema';

type CreateTaskModalProps = {
  isOpen: boolean;
  t: (key: string) => string;
  closeCreateTaskModal: () => void;
  openDiscardChangesDialog: () => void;
  isDiscardChangesDialogOpen: boolean;
  closeDiscardChangesDialog: () => void;
};

export const CreateTaskModal = ({
  isOpen,
  t,
  closeCreateTaskModal,
  openDiscardChangesDialog,
  isDiscardChangesDialogOpen,
  closeDiscardChangesDialog,
}: CreateTaskModalProps) => {
  const {
    getValues,
    register,
    formState: { isValid, errors, isDirty },
    handleSubmit,
    reset,
    setValue,
  } = useFormContext<TaskData>();

  const { addToQueue, toastComponents } = useToastQueue();

  const queryClient = useQueryClient();

  const onSubmit = (data: TaskData) => {
    createTaskMutation(data);
  };

  const handleOverlayClick = () => {
    if (!isDirty) {
      closeCreateTaskModal();
      reset();
    } else {
      openDiscardChangesDialog();
    }
  };

  const handleOptionSelectClick = (option: OptionSelectPriority) => {
    setValue(taskFieldNames.selectedOption, option, { shouldValidate: true, shouldDirty: true });
  };

  const { mutate: createTaskMutation, isLoading } = useMutation<TaskResponse, unknown, TaskData>({
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

  return (
    <>
      {toastComponents}

      <Modal maxWidth={'41.25rem'} isOpen={isOpen} onOverlayClick={handleOverlayClick} zIndex={1}>
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
    </>
  );
};

type ControlledCreateTaskForm = {
  openDiscardChangesDialog: () => void;
  closeCreateTaskModal: () => void;
  isOpen: boolean;
  isDiscardChangesDialogOpen: boolean;
  closeDiscardChangesDialog: () => void;
  t: (key: string) => string;
};

export const ControlledCreateTaskForm = ({
  openDiscardChangesDialog,
  closeCreateTaskModal,
  isOpen,
  isDiscardChangesDialogOpen,
  closeDiscardChangesDialog,
  t,
}: ControlledCreateTaskForm) => {
  const defaultValues = {
    title: '',
    description: '',
    selectedOption: undefined,
  };

  return (
    <ControlledForm schema={taskSchema} defaultValues={defaultValues}>
      <CreateTaskModal
        isOpen={isOpen}
        openDiscardChangesDialog={openDiscardChangesDialog}
        closeCreateTaskModal={closeCreateTaskModal}
        t={t}
        isDiscardChangesDialogOpen={isDiscardChangesDialogOpen}
        closeDiscardChangesDialog={closeDiscardChangesDialog}
      />
    </ControlledForm>
  );
};
