import { useMutation, useQueryClient } from 'react-query';

import { axiosInstance } from '../../../../api/axiosInstance';
import { endpoints } from '../../../../api/endpoints/endpoints';
import { Item } from '../../../../api/types/responses/getTasksResponse';
import { TaskResponse } from '../../../../api/types/responses/postTaskResponse';
import { Modal, TaskDetails } from '../../../../components';
import { useToastContext } from '../../../../context/ToastContext';
import { getQueryKey } from '../../../../helpers/getQueryKey';
import { usePagination } from '../../../../hooks/usePagination';
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
  const { addToQueue } = useToastContext();

  const { t } = useTranslation();

  const queryClient = useQueryClient();

  const { priority, currentPage } = usePagination();

  const { mutate: onMarkAsDoneTaskMutation, isLoading: isButtonLoading } = useMutation<TaskResponse, unknown, string>({
    mutationFn: (id) =>
      axiosInstance.patch(endpoints.singleTask(id), {
        done: true,
      }),

    onSuccess: () => {
      closeTaskDetailsModal();
      addToQueue({
        status: 'success',
        titleKey: 'toast.success.complete.title',
        descriptionKey: 'toast.success.complete.description',
      });

      queryClient.invalidateQueries(getQueryKey(QueryKeys.TASKS, [currentPage, priority!]));
    },

    onError: () => {
      addToQueue({
        status: 'error',
        titleKey: 'toast.error.default.title',
        descriptionKey: 'toast.error.default.description',
      });

      queryClient.invalidateQueries(getQueryKey(QueryKeys.TASKS, [currentPage, priority!]));
    },
  });

  return (
    <>
      <Modal maxWidth={'41.25rem'} isOpen={isOpenTaskDetailsModal} onOverlayClick={closeTaskDetailsModal}>
        {selectedTask && (
          <TaskDetails
            headerIcon={EditIcon}
            headerTitle={t('taskDetails.headerTitle')}
            taskTitle={selectedTask.title}
            taskDescription={selectedTask.description}
            chipText={selectedTask.done ? t('chip.done') : t('chip.inProgress')}
            chipStatus={selectedTask.done ? ChipStatus.SUCCESS : ChipStatus.WARNING}
            buttonText={t('taskDetails.button')}
            onClick={() => onMarkAsDoneTaskMutation(selectedTask.id)}
            isButtonLoading={isButtonLoading}
          />
        )}
      </Modal>
    </>
  );
};
