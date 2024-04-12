import { useNavigate } from 'react-router-dom';

import { DataStatus } from '../../components/data-status/DataStatus';
import { PageStateContainer } from '../../components/page-state-container/PageStateContainer';
import { useTranslation } from '../../hooks/useTranslation';
import { Error404Icon } from '../../icons';
import { routes } from '../../router/routes';

export const NotFound = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleButtonClick = () => {
    navigate(routes.root);
  };

  return (
    <PageStateContainer
      isFullPage={true}
      customComponent={
        <DataStatus
          icon={Error404Icon}
          onClick={handleButtonClick}
          title={t('notFoundPageTitle')}
          description={t('notFoundPageDescription')}
          buttonText={t('notFoundPageButtonText')}
        />
      }
    />
  );
};
