import { Modal, TaskDetails } from '..';
import { Item } from '../../api/types/responses/getTasksResponse';
import { EditIcon } from '../../icons';
import { ChipStatus } from '../../shared/enums/chipStatus';

type TaskDetailsModalProps = {
  isOpen: boolean;
  onOverlayClick: () => void;
  selectedTask: Item | undefined;
  onMarkAsDoneTaskMutation: (id: string) => void;
  isButtonLoading: boolean;
  t: (key: string) => string;
};

export const TaskDetailsModal = ({
  isOpen,
  onOverlayClick,
  selectedTask,
  onMarkAsDoneTaskMutation,
  isButtonLoading,
  t,
}: TaskDetailsModalProps) => {
  return (
    <Modal maxWidth={'41.25rem'} isOpen={isOpen} onOverlayClick={onOverlayClick}>
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
  );
};
