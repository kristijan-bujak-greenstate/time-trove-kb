import { Item } from '../../../api/types/responses/getTasksResponse';
import { TaskCard, FlatList, PageStateContainer } from '../../../components';
import { useIsAuthenticated } from '../../../hooks/useIsAuthenticated';
import { useTranslation } from '../../../hooks/useTranslation';

export const Home = () => {
  const { tasks, isErrorTasks, isLoadingTasks } = useIsAuthenticated();

  const { t } = useTranslation();

  const onButtonBackendErrorClick = () => {
    console.log('something went wrong button clicked');
  };

  const onButtonEmptyTasksClick = () => {
    console.log('empty tasks button clicked');
  };

  const renderTask = (task: Item) => {
    return (
      <TaskCard
        title={task.title}
        isDone={task.done}
        description={task.description}
        priority={task.priority}
        chipText={t('taskCardChipText')}
        priorityText={task.priority}
        priorityTitle={t('taskCardPriority')}
        onEditClick={() => console.log(`Edit task ${task.id}`)}
        onDeleteClick={() => console.log(`Delete task ${task.id}`)}
      />
    );
  };

  const keyExtractor = (task: Item) => task.id.toString();

  return (
    <PageStateContainer
      onErrorClick={onButtonBackendErrorClick}
      onEmptyClick={onButtonEmptyTasksClick}
      isEmpty={tasks?.items.length === 0}
      isError={isErrorTasks}
      isLoading={isLoadingTasks}
      t={t}
    >
      <FlatList data={tasks?.items} renderItem={renderTask} numColumns={2} keyExtractor={keyExtractor} gap={'1rem'} />
    </PageStateContainer>
  );
};
