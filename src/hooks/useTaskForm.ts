import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';

import { TaskRequest } from '../api/types/requests/task';
import { ErrorData } from '../api/types/responses/errorResponse';
import { TaskResponse } from '../api/types/responses/postTaskResponse';
import { OptionSelectPriority } from '../components';
import { extractKey } from '../helpers/extractKeyFromServer';
import { mockedSelectOptionsItems } from '../shared/data/selectOptionsItems';
import { TaskData, taskFieldNames } from '../shared/schemas/taskSchema';

import { useToastQueue } from './useToastQueue';
import { useTranslatedOptions } from './useTranslatedOptions';
import { useTranslation } from './useTranslation';

type UseTaskFormProps = {
  mutationFn: (requestData: TaskRequest) => Promise<TaskResponse>;
  onSuccessFunction: () => void;
  closeModal: () => void;
};

export const useTaskForm = ({ mutationFn, onSuccessFunction, closeModal }: UseTaskFormProps) => {
  const {
    getValues,
    register,
    formState: { isValid, errors, isDirty, dirtyFields },
    handleSubmit,
    reset,
    setValue,
  } = useFormContext<TaskData>();

  const { addToQueue, toastComponents } = useToastQueue();

  const queryClient = useQueryClient();

  const { t } = useTranslation();

  const [isOpenDiscardChangesDialog, setIsOpenDiscardChangesDialog] = useState(false);

  const translatedOptions = useTranslatedOptions();

  const { mutate, isLoading } = useMutation<TaskResponse, ErrorData, TaskRequest>({
    mutationFn,

    onSuccess: onSuccessFunction,

    onError: ({ code: responseKeyCode }) => {
      addToQueue({
        status: 'error',
        titleKey: 'editTaskToastTitleError',
        descriptionKey: extractKey(responseKeyCode!),
      });
    },
  });

  const handleOverlayClick = () => {
    if (!isDirty) {
      closeModal();
      reset();
    } else {
      setIsOpenDiscardChangesDialog(true);
    }
  };

  const handleOptionSelectClick = (option: OptionSelectPriority) => {
    setValue(taskFieldNames.selectedOption, option, { shouldValidate: true, shouldDirty: true });
  };

  return {
    toastComponents,
    handleOverlayClick,
    isDirty,
    isValid,
    t,
    mockedSelectOptionsItems,
    register,
    errors,
    handleSubmit,
    handleOptionSelectClick,
    getValues,
    isLoading,
    isOpenDiscardChangesDialog,
    setIsOpenDiscardChangesDialog,
    reset,
    addToQueue,
    queryClient,
    dirtyFields,
    mutate,
    translatedOptions,
  };
};
