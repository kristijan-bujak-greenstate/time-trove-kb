import { useFormContext } from 'react-hook-form';

import { Modal, OptionSelectPriority, TaskForm } from '..';
import { EditIcon } from '../../icons';
import { mockedSelectOptionsItems } from '../../shared/data/selectOptionsItems';
import { TaskData, taskFieldNames } from '../../shared/schemas/taskSchema';

type EditTaskModalProps = {
  isOpen: boolean;
  onOverlayClick: () => void;
  handleOptionSelectClick: (option: OptionSelectPriority) => void;
  isLoadingButton: boolean;
  t: (key: string) => string;
  isEditButtonDisabled: boolean;
  onSubmit: (data: TaskData) => void;
};

export const EditTaskModal = ({
  isOpen,
  onOverlayClick,
  handleOptionSelectClick,
  isLoadingButton,
  t,
  isEditButtonDisabled,
  onSubmit,
}: EditTaskModalProps) => {
  const {
    getValues,
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useFormContext<TaskData>();

  return (
    <Modal maxWidth={'41.25rem'} isOpen={isOpen} onOverlayClick={onOverlayClick} zIndex={1}>
      <TaskForm
        headerIcon={EditIcon}
        headerTitle={t('editTaskModalTitle')}
        formTitle={t('editTaskModalSubTitle')}
        buttonText={t('editTaskButtonText')}
        selectOptionList={mockedSelectOptionsItems}
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
        isButtonDisabled={!isValid || isEditButtonDisabled}
        optionSelectTitle={t('createTaskOptionSelectTitle')}
        isLoadingButton={isLoadingButton}
      />
    </Modal>
  );
};
