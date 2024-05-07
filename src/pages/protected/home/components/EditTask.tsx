import { useEffect } from 'react';

import { axiosInstance } from '../../../../api/axiosInstance';
import { endpoints } from '../../../../api/endpoints/endpoints';
import { TaskRequest } from '../../../../api/types/requests/task';
import { Item } from '../../../../api/types/responses/getTasksResponse';
import { Dialog, Modal, TaskForm } from '../../../../components';
import { ControlledForm } from '../../../../components/controlled-form/ControlledForm';
import { PriorityLevel } from '../../../../components/task-card/enum';
import { getObjectByModifiedFormFields } from '../../../../helpers/generateRequestData';
import { useTaskForm } from '../../../../hooks/useTaskForm';
import { EditIcon } from '../../../../icons';
import { mockedSelectOptionsItems } from '../../../../shared/data/selectOptionsItems';
import { QueryKeys } from '../../../../shared/enums/queryKeys';
import { TaskData, taskFieldNames, taskSchema } from '../../../../shared/schemas/taskSchema';

type EditTaskModalProps = {
  closeEditTaskModal: () => void;
  selectedTask: Item;
  isOpenEditTaskModal: boolean;
};

const defaultValues = {
  title: '',
  description: '',
  selectedOption: undefined,
};

export const EditTaskForm = ({ closeEditTaskModal, selectedTask, isOpenEditTaskModal }: EditTaskModalProps) => {
  return (
    <ControlledForm schema={taskSchema} defaultValues={defaultValues}>
      <EditTaskModal
        isOpenEditTaskModal={isOpenEditTaskModal}
        closeEditTaskModal={closeEditTaskModal}
        selectedTask={selectedTask}
      />
    </ControlledForm>
  );
};

export const EditTaskModal = ({ closeEditTaskModal, selectedTask, isOpenEditTaskModal }: EditTaskModalProps) => {
  const handleOnSuccess = () => {
    closeEditTaskModal();
    addToQueue({
      status: 'success',
      titleKey: 'editTaskToastTitleSuccess',
      descriptionKey: 'editTaskToastDescriptionSuccess',
    });
    reset();
    queryClient.invalidateQueries(QueryKeys.TASKS);
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
    toastComponents,
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
    mutationFn: (requestData) => axiosInstance.patch(endpoints.singleTask(selectedTask.id), requestData),
    onSuccessFunction: handleOnSuccess,
    closeModal: closeEditTaskModal,
  });

  useEffect(() => {
    if (isOpenEditTaskModal) {
      reset({
        title: selectedTask.title,
        description: selectedTask.description,
        selectedOption: mockedSelectOptionsItems.find((option) => option.value === selectedTask.priority),
      });
    }
  }, [isOpenEditTaskModal, selectedTask, reset]);

  return (
    <>
      {toastComponents}

      <Modal maxWidth={'41.25rem'} isOpen={isOpenEditTaskModal} onOverlayClick={handleOverlayClick}>
        <TaskForm
          headerIcon={EditIcon}
          headerTitle={t('editTaskModalTitle')}
          formTitle={t('editTaskModalSubTitle')}
          buttonText={t('editTaskButtonText')}
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
          isButtonDisabled={!isValid || !isDirty}
          optionSelectTitle={t('editTaskOptionSelectTitle')}
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
          closeEditTaskModal();
          reset();
        }}
        onSecondaryButtonClick={() => setIsOpenDiscardChangesDialog(false)}
      />
    </>
  );
};
