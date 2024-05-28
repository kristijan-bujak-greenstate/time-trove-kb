import { useMutation } from 'react-query';

import { axiosInstance } from '../../../../api/axiosInstance';
import { endpoints } from '../../../../api/endpoints/endpoints';
import { Item } from '../../../../api/types/responses/getTasksResponse';
import { TaskResponse } from '../../../../api/types/responses/postTaskResponse';
import { Dialog } from '../../../../components';
import { useToastContext } from '../../../../context/ToastContext';
import { usePagination } from '../../../../hooks/usePagination';
import { useTranslation } from '../../../../hooks/useTranslation';
import { QueryKeys } from '../../../../shared/enums/queryKeys';

export type DeleteTaskProps = {
  isOpenDeleteTaskDialog: boolean;
  closeDeleteTaskDialog: () => void;
  selectedTask: Item;
};

export const DeleteTask = ({ isOpenDeleteTaskDialog, closeDeleteTaskDialog, selectedTask }: DeleteTaskProps) => {
  const { addToQueue } = useToastContext();

  const { t } = useTranslation();

  const { handlePaginationDelete, queryClient } = usePagination();

  const { mutate: onDeleteTaskMutation, isLoading: isDeleteButtonLoading } = useMutation<TaskResponse>({
    mutationFn: () => axiosInstance.delete(endpoints.singleTask(selectedTask.id)),

    onSuccess: () => {
      closeDeleteTaskDialog();

      addToQueue({
        status: 'success',
        titleKey: 'toast.success.delete.title',
        descriptionKey: 'toast.success.delete.description',
      });

      handlePaginationDelete();
    },

    onError: () => {
      addToQueue({
        status: 'error',
        titleKey: 'toast.error.default.title',
        descriptionKey: 'toast.error.default.description',
      });
      closeDeleteTaskDialog();

      queryClient.invalidateQueries(QueryKeys.TASKS);
    },
  });

  return (
    <Dialog
      isOpen={isOpenDeleteTaskDialog}
      status={'error'}
      title={t('dialog.delete.title')}
      description={t('dialog.delete.description')}
      primaryButtonText={t('dialog.delete.primaryButton')}
      secondaryButtonText={t('dialog.delete.secondaryButton')}
      onOverlayClick={closeDeleteTaskDialog}
      onPrimaryButtonClick={onDeleteTaskMutation}
      onSecondaryButtonClick={closeDeleteTaskDialog}
      isPrimaryButtonLoading={isDeleteButtonLoading}
    />
  );
};
