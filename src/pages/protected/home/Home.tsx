import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';

import { axiosInstance } from '../../../api/axiosInstance';
import { endpoints } from '../../../api/endpoints/endpoints';
import { Item } from '../../../api/types/responses/getTasksResponse';
import { TaskResponse } from '../../../api/types/responses/postTaskResponse';
import { TaskCard, FlatList, PageStateContainer, OptionSelectPriority, Dialog } from '../../../components';
import { TaskDetailsModal } from '../../../components/task-details-modal/TaskDetailsModal';
import { EditTaskModal } from '../../../components/task-edit-modal/EditTaskModal';
import { useIsAuthenticated } from '../../../hooks/useIsAuthenticated';
import { useToastQueue } from '../../../hooks/useToastQueue';
import { useTranslation } from '../../../hooks/useTranslation';
import { mockedSelectOptionsItems } from '../../../shared/data/selectOptionsItems';
import { QueryKeys } from '../../../shared/enums/queryKeys';
import { TaskData, taskFieldNames } from '../../../shared/schemas/taskSchema';

export const Home = () => {
  const { tasks, isErrorTasks, isLoadingTasks } = useIsAuthenticated();

  const [isOpenTaskDetailsModal, setIsOpenTaskDetailsModal] = useState(false);
  const [isOpenEditTaskModal, setIsOpenEditTaskModal] = useState(false);
  const [isOpenDiscardChangesDialog, setIsOpenDiscardChangesDialog] = useState(false);
  const [isOpenDeleteTaskDialog, setIsOpenDeleteTaskDialog] = useState(false);

  const [isEditButtonDisabled, setIsEditButtonDisabled] = useState(true);

  const [selectedTask, setSelectedTask] = useState<Item>();

  const { t } = useTranslation();

  const { addToQueue, toastComponents } = useToastQueue();

  const queryClient = useQueryClient();

  const {
    setValue,
    reset,
    formState: { isDirty },
  } = useFormContext<TaskData>();

  const onButtonBackendErrorClick = () => {
    // TO DO
    console.log('something went wrong button clicked');
  };

  const onButtonEmptyTasksClick = () => {
    // TO DO
    console.log('empty tasks button clicked');
  };

  const handleTaskClick = (task: Item) => {
    setSelectedTask(task);
    setIsOpenTaskDetailsModal(true);
  };

  const handleEditTaskClick = (task: Item) => {
    setSelectedTask(task);
    setIsOpenEditTaskModal(true);
  };

  const handleDeleteTaskClick = (task: Item) => {
    setSelectedTask(task);
    setIsOpenDeleteTaskDialog(true);
  };

  const closeTaskDetailsModal = () => {
    setIsOpenTaskDetailsModal(false);
  };

  const closeEditTaskModal = () => {
    setIsOpenEditTaskModal(false);
  };

  const openDiscardChangesDialog = () => {
    setIsOpenDiscardChangesDialog(true);
  };

  const closeDiscardChangesDialog = () => {
    setIsOpenDiscardChangesDialog(false);
  };

  const closeDeleteTaskDialog = () => {
    setIsOpenDeleteTaskDialog(false);
  };

  const keyExtractor = (task: Item) => task.id.toString();

  const renderTask = (task: Item) => {
    return (
      <TaskCard
        title={task.title}
        isDone={task.done}
        description={task.description}
        priority={task.priority}
        chipText={task.done ? t('chipTextDone') : t('chipTextInProgress')}
        priorityText={task.priority}
        priorityTitle={t('taskCardPriority')}
        onEditClick={() => handleEditTaskClick(task)}
        onDeleteClick={() => handleDeleteTaskClick(task)}
        onClick={() => handleTaskClick(task)}
      />
    );
  };

  const { mutate: onMarkAsDoneTaskMutation, isLoading: isButtonLoading } = useMutation<TaskResponse, unknown, string>({
    mutationFn: (id) =>
      axiosInstance.patch(`${endpoints.tasks}/${id}`, {
        done: true,
      }),

    onSuccess: () => {
      closeTaskDetailsModal();
      addToQueue({
        status: 'success',
        titleKey: 'taskDetailsToastTitleSuccess',
        descriptionKey: 'taskDetailsToastDescriptionSuccess',
      });
      queryClient.invalidateQueries(QueryKeys.TASKS);
    },

    onError: () => {
      addToQueue({
        status: 'error',
        titleKey: 'taskDetailsToastTitleError',
        descriptionKey: 'taskDetailsToastDescriptionError',
      });
    },
  });

  const { mutate: onDeleteTaskMutation, isLoading: isDeleteButtonLoading } = useMutation<TaskResponse, unknown>({
    mutationFn: () => axiosInstance.delete(`${endpoints.tasks}/${selectedTask?.id}`),

    onSuccess: () => {
      closeDeleteTaskDialog();
      addToQueue({
        status: 'success',
        titleKey: 'deleteTaskToastTitleSuccess',
        descriptionKey: 'deleteTaskToastDescriptionSuccess',
      });
      queryClient.invalidateQueries(QueryKeys.TASKS);
    },

    onError: () => {
      addToQueue({
        status: 'error',
        titleKey: 'deleteTaskToastTitleError',
        descriptionKey: 'deleteTaskToastDescriptionError',
      });
    },
  });

  const { mutate: onEditTaskMutation, isLoading: isEditButtonLoading } = useMutation<TaskResponse, unknown, TaskData>({
    mutationFn: (data) => {
      return axiosInstance.patch(`${endpoints.tasks}/${selectedTask?.id}`, {
        title: data.title,
        description: data.description,
        priority: data.selectedOption.value,
      });
    },
    onSuccess: () => {
      closeEditTaskModal();
      addToQueue({
        status: 'success',
        titleKey: 'editTaskToastTitleSuccess',
        descriptionKey: 'editTaskToastDescriptionSuccess',
      });

      queryClient.invalidateQueries(QueryKeys.TASKS);
    },
    onError: () => {
      addToQueue({
        status: 'error',
        titleKey: 'editTaskToastTitleError',
        descriptionKey: 'editTaskToastDescriptionSuccess',
      });
    },
  });

  const onSubmit = (data: TaskData) => {
    onEditTaskMutation(data);
  };

  const handleOptionSelectClick = (option: OptionSelectPriority) => {
    setValue(taskFieldNames.selectedOption, option, { shouldValidate: true, shouldDirty: true });
  };

  const handleOverlayClick = () => {
    if (!isDirty) {
      closeEditTaskModal();
      reset();
    } else {
      openDiscardChangesDialog();
    }
  };

  useEffect(() => {
    if (isOpenEditTaskModal && selectedTask) {
      reset({
        title: selectedTask.title,
        description: selectedTask.description,
        selectedOption: mockedSelectOptionsItems.find((option) => option.value === selectedTask.priority),
      });
    }
  }, [isOpenEditTaskModal, selectedTask, reset]);

  useEffect(() => {
    if (!isDirty) {
      setIsEditButtonDisabled(true);
    } else {
      setIsEditButtonDisabled(false);
    }
  }, [isDirty]);

  return (
    <>
      {toastComponents}

      <Dialog
        isOpen={isOpenDiscardChangesDialog}
        status={'error'}
        title={t('discardChangesDialogTitle')}
        description={t('discardChangesDialogDescription')}
        primaryButtonText={t('discardChangesPrimaryButtonText')}
        secondaryButtonText={t('discardChangesSecondaryButtonText')}
        onOverlayClick={closeDiscardChangesDialog}
        onPrimaryButtonClick={() => {
          closeDiscardChangesDialog();
          closeEditTaskModal();
          reset();
        }}
        onSecondaryButtonClick={closeDiscardChangesDialog}
      />

      <Dialog
        isOpen={isOpenDeleteTaskDialog}
        status={'error'}
        title={t('deleteTaskTitleDialog')}
        description={t('deleteTaskDescriptionDialog')}
        primaryButtonText={t('deleteTaskPrimaryButtonText')}
        secondaryButtonText={t('deleteTaskSecondaryButtonText')}
        onOverlayClick={closeDeleteTaskDialog}
        onPrimaryButtonClick={onDeleteTaskMutation}
        onSecondaryButtonClick={closeDeleteTaskDialog}
        isPrimaryButtonLoading={isDeleteButtonLoading}
      />

      <TaskDetailsModal
        isOpen={isOpenTaskDetailsModal}
        onOverlayClick={closeTaskDetailsModal}
        selectedTask={selectedTask}
        onMarkAsDoneTaskMutation={onMarkAsDoneTaskMutation}
        isButtonLoading={isButtonLoading}
        t={t}
      />

      <EditTaskModal
        isOpen={isOpenEditTaskModal}
        onOverlayClick={handleOverlayClick}
        handleOptionSelectClick={handleOptionSelectClick}
        isLoadingButton={isEditButtonLoading}
        isEditButtonDisabled={isEditButtonDisabled}
        onSubmit={onSubmit}
        t={t}
      />

      <PageStateContainer
        onErrorClick={onButtonBackendErrorClick}
        onEmptyClick={onButtonEmptyTasksClick}
        isEmpty={tasks?.items.length === 0}
        isError={isErrorTasks}
        isLoading={isLoadingTasks}
        t={t}
      >
        <FlatList data={tasks?.items} renderItem={renderTask} numColumns={2} keyExtractor={keyExtractor} gap={'1rem'} />
      </PageStateContainer>
    </>
  );
};
