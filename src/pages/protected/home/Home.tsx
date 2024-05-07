import { useState } from 'react';
import { useQuery } from 'react-query';

import { axiosInstance } from '../../../api/axiosInstance';
import { endpoints } from '../../../api/endpoints/endpoints';
import { Item, TasksResponse } from '../../../api/types/responses/getTasksResponse';
import {
  TaskCard,
  FlatList,
  PageStateContainer,
  Text,
  Dropdown,
  OptionSelectList,
  DataStatus,
} from '../../../components';
import { DropdownOption } from '../../../components/dropdown/types';
import { CreateTaskForm } from '../../../components-logic/CreateTask';
import { useLanguageContext } from '../../../context/LanguageContext';
import { getQueryKey } from '../../../helpers/getQueryKey';
import { useTranslatedOptions } from '../../../hooks/useTranslatedOptions';
import { useTranslation } from '../../../hooks/useTranslation';
import { NothingHereYetIcon, SomethingWentWrongIcon } from '../../../icons';
import { languageOptions } from '../../../shared/data/languageOptions';
import { QueryKeys } from '../../../shared/enums/queryKeys';

import { CompleteTask } from './components/CompleteTask';
import { DeleteTask } from './components/DeleteTask';
import { EditTaskForm } from './components/EditTask';
import { StyledHeaderContainer, StyledTitleDropdownContainer } from './home.styles';

export const Home = () => {
  const [isOpenTaskDetailsModal, setIsOpenTaskDetailsModal] = useState(false);
  const [isOpenEditTaskModal, setIsOpenEditTaskModal] = useState(false);
  const [isOpenCreateTaskModal, setIsOpenCreateTaskModal] = useState(false);
  const [isOpenDeleteTaskDialog, setIsOpenDeleteTaskDialog] = useState(false);

  const [selectedTask, setSelectedTask] = useState<Item>();

  const { t } = useTranslation();

  const { currentLanguage, setCurrentLanguage } = useLanguageContext();

  const translatedOptions = useTranslatedOptions();

  const handleLanguageDropdownClick = (option: DropdownOption) => {
    setCurrentLanguage(option);
  };

  const onButtonEmptyTasksClick = () => {
    setIsOpenCreateTaskModal(true);
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

  const closeCreateTaskModal = () => {
    setIsOpenCreateTaskModal(false);
  };

  const closeDeleteTaskDialog = () => {
    setIsOpenDeleteTaskDialog(false);
  };

  const {
    data: tasks,
    isLoading: isLoadingTasks,
    isError: isErrorTasks,
    refetch,
  } = useQuery<TasksResponse>({
    queryKey: getQueryKey(QueryKeys.TASKS),
    queryFn: () => axiosInstance.get(endpoints.tasks),
  });

  const renderTask = (task: Item) => {
    return (
      <TaskCard
        title={task.title}
        isDone={task.done}
        description={task.description}
        priority={task.priority}
        chipText={task.done ? t('chipTextDone') : t('chipTextInProgress')}
        priorityText={t(task.priority)}
        priorityTitle={t('taskCardPriority')}
        onEditClick={() => handleEditTaskClick(task)}
        onDeleteClick={() => handleDeleteTaskClick(task)}
        onClick={() => handleTaskClick(task)}
      />
    );
  };

  return (
    <PageStateContainer
      isEmpty={!tasks?.totalItems}
      isError={isErrorTasks}
      isLoading={isLoadingTasks}
      t={t}
      renderCustomEmptyComponent={
        <>
          <CreateTaskForm closeCreateTaskModal={closeCreateTaskModal} isOpen={isOpenCreateTaskModal} />

          <DataStatus
            icon={NothingHereYetIcon}
            onClick={onButtonEmptyTasksClick}
            title={t('emptyTasksTitle')}
            description={t('emptyTasksDescription')}
            buttonText={t('emptyTasksButtonText')}
            buttonPalette={'primary'}
          />
        </>
      }
      renderCustomErrorComponent={
        <DataStatus
          icon={SomethingWentWrongIcon}
          onClick={() => refetch()}
          title={t('backendErrorTitle')}
          description={t('backendErrorDescription')}
          buttonText={t('backendErrorButtonText')}
          buttonPalette={'neutrals'}
        />
      }
    >
      <>
        <DeleteTask
          closeDeleteTaskDialog={closeDeleteTaskDialog}
          isOpenDeleteTaskDialog={isOpenDeleteTaskDialog}
          selectedTask={selectedTask!}
        />

        <CompleteTask
          isOpenTaskDetailsModal={isOpenTaskDetailsModal}
          closeTaskDetailsModal={closeTaskDetailsModal}
          selectedTask={selectedTask!}
        />

        <EditTaskForm
          closeEditTaskModal={closeEditTaskModal}
          isOpenEditTaskModal={isOpenEditTaskModal}
          selectedTask={selectedTask!}
        />

        <StyledHeaderContainer>
          <StyledTitleDropdownContainer>
            <Text fontWeight={'extraBold'} lineHeight={'extraSmall'}>
              {t('headerTitle')}
            </Text>

            <Dropdown
              selectedOption={currentLanguage}
              type={'textWithImage'}
              dropdownOptions={languageOptions}
              onOptionClick={handleLanguageDropdownClick}
            />
          </StyledTitleDropdownContainer>

          <OptionSelectList
            selectOptionList={translatedOptions}
            handleOptionSelectClick={() => console.log('TO DO HANDLE OPTION SELECT CLICK')}
          />
        </StyledHeaderContainer>

        <FlatList
          data={tasks?.items}
          renderItem={renderTask}
          numColumns={2}
          keyExtractor={(task) => task.id.toString()}
          gap={'1rem'}
        />
      </>
    </PageStateContainer>
  );
};
