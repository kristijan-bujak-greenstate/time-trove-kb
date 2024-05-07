import { useMutation, useQueryClient } from 'react-query';

import { axiosInstance } from '../../../../api/axiosInstance';
import { endpoints } from '../../../../api/endpoints/endpoints';
import { Item } from '../../../../api/types/responses/getTasksResponse';
import { TaskResponse } from '../../../../api/types/responses/postTaskResponse';
import { Modal, TaskDetails } from '../../../../components';
import { useToastQueue } from '../../../../hooks/useToastQueue';
import { useTranslation } from '../../../../hooks/useTranslation';
import { EditIcon } from '../../../../icons';
import { ChipStatus } from '../../../../shared/enums/chipStatus';
import { QueryKeys } from '../../../../shared/enums/queryKeys';

type TaskDetailsModal = {
  isOpenTaskDetailsModal: boolean;
  closeTaskDetailsModal: () => void;
  selectedTask: Item;
};

export const CompleteTask = ({ isOpenTaskDetailsModal, selectedTask, closeTaskDetailsModal }: TaskDetailsModal) => {
  const { addToQueue, toastComponents } = useToastQueue();

  const { t } = useTranslation();

  const queryClient = useQueryClient();

  const { mutate: onMarkAsDoneTaskMutation, isLoading: isButtonLoading } = useMutation<TaskResponse, unknown, string>({
    mutationFn: (id) =>
      axiosInstance.patch(endpoints.singleTask(id), {
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
    </>
  );
};
