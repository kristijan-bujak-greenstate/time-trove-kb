import { useState } from 'react';

import { Item } from '../../../api/types/responses/getTasksResponse';
import {
  TaskCard,
  FlatList,
  PageStateContainer,
  Text,
  Dropdown,
  OptionSelectList,
  DataStatus,
  Pagination,
} from '../../../components';
import { DropdownOption } from '../../../components/dropdown/types';
import { CreateTaskForm } from '../../../components-logic/CreateTask';
import { useLanguageContext } from '../../../context/LanguageContext';
import { usePagination } from '../../../hooks/usePagination';
import { useTranslatedOptions } from '../../../hooks/useTranslatedOptions';
import { useTranslation } from '../../../hooks/useTranslation';
import { NothingHereYetIcon, SomethingWentWrongIcon } from '../../../icons';
import { languageOptions } from '../../../shared/data/languageOptions';

import { CompleteTask } from './components/CompleteTask';
import { DeleteTask } from './components/DeleteTask';
import { EditTaskForm } from './components/EditTask';
import {
  StyledDropdownWrapper,
  StyledFlatListWrapper,
  StyledHeaderContainer,
  StyledPaginationWrapper,
  StyledTitleDropdownContainer,
} from './home.styles';

export const Home = () => {
  const [isOpenTaskDetailsModal, setIsOpenTaskDetailsModal] = useState(false);
  const [isOpenEditTaskModal, setIsOpenEditTaskModal] = useState(false);
  const [isOpenCreateTaskModal, setIsOpenCreateTaskModal] = useState(false);
  const [isOpenDeleteTaskDialog, setIsOpenDeleteTaskDialog] = useState(false);

  const [selectedTask, setSelectedTask] = useState<Item>();

  const { t } = useTranslation();

  const { currentLanguage, setCurrentLanguage } = useLanguageContext();

  const translatedOptions = useTranslatedOptions();

  const { currentPage, setCurrentPage, totalPages, totalItems, taskItems, isLoadingTasks, isErrorTasks, refetch } =
    usePagination();

  const handleLanguageDropdownClick = (option: DropdownOption) => {
    setCurrentLanguage(option);
  };

  const handlePaginationButtonClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
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
      isEmpty={!totalItems}
      isError={isErrorTasks}
      isLoading={isLoadingTasks}
      t={t}
      renderCustomEmptyComponent={
        <>
          <CreateTaskForm closeCreateTaskModal={closeCreateTaskModal} isOpen={isOpenCreateTaskModal} />
          <StyledDropdownWrapper>
            <Dropdown
              selectedOption={currentLanguage}
              type={'textWithImage'}
              dropdownOptions={languageOptions}
              onOptionClick={handleLanguageDropdownClick}
            />
          </StyledDropdownWrapper>
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
          onClick={refetch}
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
          translatedOptions={translatedOptions}
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

        <StyledFlatListWrapper>
          <FlatList
            data={taskItems}
            renderItem={renderTask}
            numColumns={2}
            keyExtractor={(task) => task.id}
            gap={'1rem'}
          />
        </StyledFlatListWrapper>

        <StyledPaginationWrapper>
          <Pagination currentPage={currentPage} onButtonClick={handlePaginationButtonClick} totalPages={totalPages} />
        </StyledPaginationWrapper>
      </>
    </PageStateContainer>
  );
};
