import { DataStatus } from '../../components';
import { PageStateContainer } from '../../components/page-state-container/PageStateContainer';
import { useTranslation } from '../../hooks/useTranslation';
import { MaintenanceIcon } from '../../icons/MaintenanceIcon';

export const Maintenance = () => {
  const { t } = useTranslation();

  return (
    <PageStateContainer isFullPage={true} shouldCenter={true}>
      <DataStatus
        icon={MaintenanceIcon}
        title={t('pages.maintenance.title')}
        description={t('pages.maintenance.description')}
      />
    </PageStateContainer>
  );
};
