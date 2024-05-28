import { axiosInstance } from '../api/axiosInstance';
import { endpoints } from '../api/endpoints/endpoints';
import { Dialog, Modal, TaskForm } from '../components';
import { ControlledForm } from '../components/controlled-form/ControlledForm';
import { usePagination } from '../hooks/usePagination';
import { useTaskForm } from '../hooks/useTaskForm';
import { EditIcon } from '../icons';
import { PriorityLevel } from '../shared/enums/priorityLevel';
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
  const { handlePaginationCreate } = usePagination();

  const handleOnSuccess = () => {
    closeCreateTaskModal();
    addToQueue({
      status: 'success',
      titleKey: 'toast.success.create.title',
      descriptionKey: 'toast.success.create.description',
    });
    reset();

    handlePaginationCreate();
  };

  const onSubmit = ({ title, description, selectedOption }: TaskData) => {
    mutate({
      title,
      description,
      priority: selectedOption.value as PriorityLevel,
    });
  };

  const {
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
    mutate,
  } = useTaskForm({
    mutationFn: (requestData) => axiosInstance.post(endpoints.tasks, requestData),
    onSuccessFunction: handleOnSuccess,
    closeModal: closeCreateTaskModal,
  });

  return (
    <>
      <Modal maxWidth={'41.25rem'} isOpen={isOpen} onOverlayClick={handleOverlayClick}>
        <TaskForm
          headerIcon={EditIcon}
          headerTitle={t('taskForm.create.title')}
          formTitle={t('taskForm.base.formTitle')}
          description={t('taskForm.create.description')}
          buttonText={t('taskForm.create.button')}
          selectOptionList={translatedOptions}
          inputProps={{
            label: t('taskForm.base.labelInput'),
            type: 'text',
            placeholder: t('taskForm.base.placeholderInput'),
            error: errors[taskFieldNames.title]?.message,
            ...register(taskFieldNames.title),
          }}
          textAreaProps={{
            label: t('taskForm.base.labelTextarea'),
            placeholder: t('taskForm.base.placeholderTextarea'),
            error: errors[taskFieldNames.description]?.message,
            ...register(taskFieldNames.description),
          }}
          onSubmitForm={handleSubmit(onSubmit)}
          handleOptionSelectClick={handleOptionSelectClick}
          selectedOption={getValues(taskFieldNames.selectedOption)}
          isButtonDisabled={!isValid}
          optionSelectTitle={t('taskForm.base.optionSelectTitle')}
          isLoadingButton={isLoading}
        />
      </Modal>

      <Dialog
        isOpen={isOpenDiscardChangesDialog}
        status={'error'}
        title={t('dialog.discardChanges.title')}
        description={t('dialog.discardChanges.description')}
        primaryButtonText={t('dialog.discardChanges.primaryButton')}
        secondaryButtonText={t('dialog.discardChanges.secondaryButton')}
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
