import { axiosInstance } from '../../../../api/axiosInstance';
import { endpoints } from '../../../../api/endpoints/endpoints';
import { TaskRequest } from '../../../../api/types/requests/task';
import { Item } from '../../../../api/types/responses/getTasksResponse';
import { Dialog, Modal, OptionSelectPriority, TaskForm } from '../../../../components';
import { ControlledForm } from '../../../../components/controlled-form/ControlledForm';
import { getObjectByModifiedFormFields } from '../../../../helpers/generateRequestData';
import { getQueryKey } from '../../../../helpers/getQueryKey';
import { usePagination } from '../../../../hooks/usePagination';
import { useTaskForm } from '../../../../hooks/useTaskForm';
import { EditIcon } from '../../../../icons';
import { PriorityLevel } from '../../../../shared/enums/priorityLevel';
import { QueryKeys } from '../../../../shared/enums/queryKeys';
import { TaskData, taskFieldNames, taskSchema } from '../../../../shared/schemas/taskSchema';

type EditTaskModalProps = {
  closeEditTaskModal: () => void;
  selectedTask?: Item;
  isOpenEditTaskModal: boolean;
};

type EditTaskFormProps = {
  closeEditTaskModal: () => void;
  selectedTask?: Item;
  isOpenEditTaskModal: boolean;
  translatedOptions: OptionSelectPriority[];
};

export const EditTaskForm = ({
  closeEditTaskModal,
  selectedTask,
  isOpenEditTaskModal,
  translatedOptions,
}: EditTaskFormProps) => {
  const defaultValues = {
    title: selectedTask?.title || '',
    description: selectedTask?.description || '',
    selectedOption: translatedOptions.find((option) => option.value === selectedTask?.priority),
  };

  return (
    <ControlledForm schema={taskSchema} defaultValues={defaultValues} key={JSON.stringify(defaultValues)}>
      <EditTaskModal
        isOpenEditTaskModal={isOpenEditTaskModal}
        closeEditTaskModal={closeEditTaskModal}
        selectedTask={selectedTask}
      />
    </ControlledForm>
  );
};

export const EditTaskModal = ({ closeEditTaskModal, selectedTask, isOpenEditTaskModal }: EditTaskModalProps) => {
  const { currentPage, priority } = usePagination();
  const handleOnSuccess = () => {
    closeEditTaskModal();
    addToQueue({
      status: 'success',
      titleKey: 'toast.success.edit.title',
      descriptionKey: 'toast.success.edit.description',
    });

    queryClient.invalidateQueries(getQueryKey(QueryKeys.TASKS, [currentPage, priority!]));

    if (dirtyFields.selectedOption) {
      queryClient.removeQueries(getQueryKey(QueryKeys.TASKS));
    }
  };

  const onSubmit = (data: TaskData | Partial<TaskData>) => {
    const specificModifiedFieldObj = {} as TaskRequest;

    if (dirtyFields.selectedOption) {
      specificModifiedFieldObj.priority = data?.selectedOption?.value as PriorityLevel;
      delete data.selectedOption;
    }

    const modifiedFieldsObj = getObjectByModifiedFormFields(data, dirtyFields);
    const requestDataObj = { ...modifiedFieldsObj, ...specificModifiedFieldObj };

    mutate(requestDataObj as TaskRequest);
  };

  const {
    handleOptionSelectClick,
    handleOverlayClick,
    translatedOptions,
    register,
    t,
    handleSubmit,
    isValid,
    getValues,
    isLoading,
    errors,
    reset,
    isOpenDiscardChangesDialog,
    setIsOpenDiscardChangesDialog,
    isDirty,
    addToQueue,
    queryClient,
    dirtyFields,
    mutate,
  } = useTaskForm({
    mutationFn: (requestData) => axiosInstance.patch(endpoints.singleTask(selectedTask!.id), requestData),
    onSuccessFunction: handleOnSuccess,
    closeModal: closeEditTaskModal,
  });

  return (
    <>
      <Modal maxWidth={'41.25rem'} isOpen={isOpenEditTaskModal} onOverlayClick={handleOverlayClick}>
        <TaskForm
          headerIcon={EditIcon}
          headerTitle={t('taskForm.edit.title')}
          formTitle={t('taskForm.base.formTitle')}
          buttonText={t('taskForm.edit.button')}
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
          isButtonDisabled={!isValid || !isDirty}
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
          closeEditTaskModal();
          reset();
        }}
        onSecondaryButtonClick={() => setIsOpenDiscardChangesDialog(false)}
      />
    </>
  );
};
