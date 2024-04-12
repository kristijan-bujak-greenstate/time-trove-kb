import { PageStateContainer } from '../../../components/page-state-container/PageStateContainer';
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

  return (
    <PageStateContainer
      onErrorClick={onButtonBackendErrorClick}
      onEmptyClick={onButtonEmptyTasksClick}
      isEmpty={!!tasks?.items}
      isError={isErrorTasks}
      isLoading={isLoadingTasks}
      t={t}
    >
      <div>Home component</div>
    </PageStateContainer>
  );
};
