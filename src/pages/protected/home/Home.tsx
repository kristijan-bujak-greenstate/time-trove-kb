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
  OptionSelectPriority,
} from '../../../components';
import { DropdownOption } from '../../../components/dropdown/types';
import { useLanguageContext } from '../../../context/LanguageContext';
import { usePagination } from '../../../hooks/usePagination';
import { useTranslatedOptions } from '../../../hooks/useTranslatedOptions';
import { TranslationKey, useTranslation } from '../../../hooks/useTranslation';
import { SomethingWentWrongIcon } from '../../../icons';
import { languageOptions } from '../../../shared/data/languageOptions';
import { mockedSelectOptionsItemsForFiltering } from '../../../shared/data/selectOptionsItems';
import { PriorityLevel } from '../../../shared/enums/priorityLevel';

import { CompleteTask } from './components/CompleteTask';
import { CustomEmptyTasks } from './components/CustomEmptyTasks';
import { DeleteTask } from './components/DeleteTask';
import { EditTaskForm } from './components/EditTask';
import {
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

  const translatedOptions = useTranslatedOptions(mockedSelectOptionsItemsForFiltering);

  const {
    currentPage,
    setCurrentPage,
    totalPages,
    totalItems,
    taskItems,
    isLoadingTasks,
    isErrorTasks,
    refetch,
    priority,
    setPriority,
    searchParams,
  } = usePagination();

  const handleLanguageDropdownClick = (option: DropdownOption) => {
    setCurrentLanguage(option);
  };

  const handlePaginationButtonClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleOptionSelectClick = (option: OptionSelectPriority) => {
    setCurrentPage(1);
    setPriority(option.value);
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
        chipText={t(task.done ? 'chip.done' : 'chip.inProgress')}
        priorityText={t(('priority.' + task.priority) as TranslationKey)}
        priorityTitle={t('taskCard.label')}
        onEditClick={() => handleEditTaskClick(task)}
        onDeleteClick={() => handleDeleteTaskClick(task)}
        onClick={() => handleTaskClick(task)}
      />
    );
  };

  const isEmptyAll = !totalItems && !searchParams && priority === PriorityLevel.ALL_OPTIONS;

  return (
    <PageStateContainer
      isEmpty={!totalItems}
      isError={isErrorTasks}
      isLoading={isLoadingTasks}
      t={t}
      renderCustomEmptyComponent={
        <CustomEmptyTasks
          closeCreateTaskModal={closeCreateTaskModal}
          isEmptyAll={isEmptyAll}
          handleLanguageDropdownClick={handleLanguageDropdownClick}
          isOpenCreateTaskModal={isOpenCreateTaskModal}
          onButtonEmptyTasksClick={onButtonEmptyTasksClick}
          handleOptionSelectClick={handleOptionSelectClick}
          priority={priority}
        />
      }
      renderCustomErrorComponent={
        <DataStatus
          icon={SomethingWentWrongIcon}
          onClick={refetch}
          title={t('pages.serverError.title')}
          description={t('pages.serverError.description')}
          buttonText={t('pages.serverError.button')}
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
              {t('home.headerTitle')}
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
            handleOptionSelectClick={handleOptionSelectClick}
            selectedOption={priority}
            showLine={true}
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
