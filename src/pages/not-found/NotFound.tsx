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
    <PageStateContainer isFullPage={true} shouldCenter={true}>
      <DataStatus
        icon={Error404Icon}
        onClick={handleButtonClick}
        title={t('pages.emptyAll.title')}
        description={t('pages.emptyAll.description')}
        buttonText={t('pages.emptyAll.button')}
      />
    </PageStateContainer>
  );
};
