import { useMutation } from 'react-query';

import { axiosInstance } from '../../../../api/axiosInstance';
import { endpoints } from '../../../../api/endpoints/endpoints';
import { Item } from '../../../../api/types/responses/getTasksResponse';
import { TaskResponse } from '../../../../api/types/responses/postTaskResponse';
import { Dialog } from '../../../../components';
import { usePagination } from '../../../../hooks/usePagination';
import { useToastQueue } from '../../../../hooks/useToastQueue';
import { useTranslation } from '../../../../hooks/useTranslation';
import { QueryKeys } from '../../../../shared/enums/queryKeys';

export type DeleteTaskProps = {
  isOpenDeleteTaskDialog: boolean;
  closeDeleteTaskDialog: () => void;
  selectedTask: Item;
};

export const DeleteTask = ({ isOpenDeleteTaskDialog, closeDeleteTaskDialog, selectedTask }: DeleteTaskProps) => {
  const { addToQueue, toastComponents } = useToastQueue();

  const { t } = useTranslation();

  const { handlePaginationDelete, queryClient } = usePagination();

  const { mutate: onDeleteTaskMutation, isLoading: isDeleteButtonLoading } = useMutation<TaskResponse>({
    mutationFn: () => axiosInstance.delete(endpoints.singleTask(selectedTask.id)),

    onSuccess: () => {
      closeDeleteTaskDialog();

      addToQueue({
        status: 'success',
        titleKey: 'deleteTaskToastTitleSuccess',
        descriptionKey: 'deleteTaskToastDescriptionSuccess',
      });

      queryClient.invalidateQueries(QueryKeys.TASKS);

      handlePaginationDelete();
    },

    onError: () => {
      addToQueue({
        status: 'error',
        titleKey: 'deleteTaskToastTitleError',
        descriptionKey: 'deleteTaskToastDescriptionError',
      });
    },
  });

  return (
    <>
      {toastComponents}

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
    </>
  );
};
