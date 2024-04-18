import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { axiosInstance } from '../../../api/axiosInstance';
import { endpoints } from '../../../api/endpoints/endpoints';
import { Item } from '../../../api/types/responses/getTasksResponse';
import { TaskResponse } from '../../../api/types/responses/postTaskResponse';
import { TaskCard, FlatList, PageStateContainer, TaskDetails, Modal } from '../../../components';
import { useIsAuthenticated } from '../../../hooks/useIsAuthenticated';
import { useToastQueue } from '../../../hooks/useToastQueue';
import { useTranslation } from '../../../hooks/useTranslation';
import { EditIcon } from '../../../icons';
import { ChipStatus } from '../../../shared/enums/chipStatus';
import { QueryKeys } from '../../../shared/enums/queryKeys';

export const Home = () => {
  const { tasks, isErrorTasks, isLoadingTasks } = useIsAuthenticated();

  const [isOpenTaskDetailsModal, setIsOpenTaskDetailsModal] = useState(false);

  const [selectedTask, setSelectedTask] = useState<Item>();

  const { t } = useTranslation();

  const { addToQueue, toastComponents } = useToastQueue();

  const queryClient = useQueryClient();

  const onButtonBackendErrorClick = () => {
    console.log('something went wrong button clicked');
  };

  const onButtonEmptyTasksClick = () => {
    console.log('empty tasks button clicked');
  };

  const handleTaskClick = (task: Item) => {
    setSelectedTask(task);
    setIsOpenTaskDetailsModal(true);
  };

  const closeTaskDetailsModal = () => {
    setIsOpenTaskDetailsModal(false);
  };

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
        onEditClick={() => console.log(`Edit task ${task.id}`)}
        onDeleteClick={() => console.log(`Delete task ${task.id}`)}
        onClick={() => handleTaskClick(task)}
      />
    );
  };

  const { mutate: onMarkAsDoneTaskMutation, isLoading: isButtonLoading } = useMutation<TaskResponse, unknown, string>({
    mutationFn: (id: string) =>
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

  const keyExtractor = (task: Item) => task.id.toString();

  return (
    <>
      {toastComponents}

      <Modal maxWidth={'41.25rem'} isOpen={isOpenTaskDetailsModal} onOverlayClick={closeTaskDetailsModal}>
        {selectedTask && (
          <TaskDetails
            headerIcon={EditIcon}
            headerTitle={t('taskDetailsTitle')}
            taskTitle={selectedTask.title}
            taskDescription={selectedTask.description}
            chipText={selectedTask.done ? t('chipTextDone') : t('chipTextInProgress')}
            chipStatus={selectedTask.done ? ChipStatus.SUCCESS : ChipStatus.WARNING}
            buttonText={t('taskDetailsButtonText')}
            onClick={() => onMarkAsDoneTaskMutation(selectedTask.id)}
            isButtonLoading={isButtonLoading}
          />
        )}
      </Modal>

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
