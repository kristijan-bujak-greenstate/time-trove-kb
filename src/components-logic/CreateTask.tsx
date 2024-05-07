import { axiosInstance } from '../api/axiosInstance';
import { endpoints } from '../api/endpoints/endpoints';
import { Dialog, Modal, TaskForm } from '../components';
import { ControlledForm } from '../components/controlled-form/ControlledForm';
import { PriorityLevel } from '../components/task-card/enum';
import { useTaskForm } from '../hooks/useTaskForm';
import { EditIcon } from '../icons';
import { QueryKeys } from '../shared/enums/queryKeys';
import { TaskData, taskFieldNames, taskSchema } from '../shared/schemas/taskSchema';

type CreateTaskModalProps = {
  isOpen: boolean;
  closeCreateTaskModal: () => void;
};

const defaultValues = {
  title: '',
  description: '',
  selectedOption: undefined,
};

export const CreateTaskForm = ({ closeCreateTaskModal, isOpen }: CreateTaskModalProps) => {
  return (
    <ControlledForm schema={taskSchema} defaultValues={defaultValues}>
      <CreateTaskModal isOpen={isOpen} closeCreateTaskModal={closeCreateTaskModal} />
    </ControlledForm>
  );
};

export const CreateTaskModal = ({ isOpen, closeCreateTaskModal }: CreateTaskModalProps) => {
  const handleOnSuccess = () => {
    closeCreateTaskModal();
    addToQueue({
      status: 'success',
      titleKey: 'createTaskToastTitleSuccess',
      descriptionKey: 'createTaskToastDescriptionSuccess',
    });
    reset();
    queryClient.invalidateQueries(QueryKeys.TASKS);
  };

  const onSubmit = ({ title, description, selectedOption }: TaskData) => {
    mutate({
      title,
      description,
      priority: selectedOption.value as PriorityLevel,
    });
  };

  const {
    toastComponents,
    t,
    translatedOptions,
    handleOverlayClick,
    register,
    errors,
    handleSubmit,
    handleOptionSelectClick,
    getValues,
    isLoading,
    isValid,
    isOpenDiscardChangesDialog,
    setIsOpenDiscardChangesDialog,
    reset,
    addToQueue,
    queryClient,
    mutate,
  } = useTaskForm({
    mutationFn: (requestData) => axiosInstance.post(endpoints.tasks, requestData),
    onSuccessFunction: handleOnSuccess,
    closeModal: closeCreateTaskModal,
  });

  return (
    <>
      {toastComponents}

      <Modal maxWidth={'41.25rem'} isOpen={isOpen} onOverlayClick={handleOverlayClick}>
        <TaskForm
          headerIcon={EditIcon}
          headerTitle={t('createTaskModalTitle')}
          formTitle={t('createTaskModalSubTitle')}
          description={t('createTaskModalDescription')}
          buttonText={t('createTaskButtonText')}
          selectOptionList={translatedOptions}
          inputProps={{
            label: t('editTaskModalLabelInput'),
            type: 'text',
            placeholder: t('editTaskModalPlaceholderInput'),
            error: errors[taskFieldNames.title]?.message,
            ...register(taskFieldNames.title),
          }}
          textAreaProps={{
            label: t('editTaskModalLabelTextarea'),
            placeholder: t('editTaskModalPlaceholderTextarea'),
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
        isOpen={isOpenDiscardChangesDialog}
        status={'error'}
        title={t('discardChangesDialogTitle')}
        description={t('discardChangesDialogDescription')}
        primaryButtonText={t('discardChangesPrimaryButtonText')}
        secondaryButtonText={t('discardChangesSecondaryButtonText')}
        onOverlayClick={() => setIsOpenDiscardChangesDialog(false)}
        onPrimaryButtonClick={() => {
          setIsOpenDiscardChangesDialog(false);
          closeCreateTaskModal();
          reset();
        }}
        onSecondaryButtonClick={() => setIsOpenDiscardChangesDialog(false)}
      />
    </>
  );
};
