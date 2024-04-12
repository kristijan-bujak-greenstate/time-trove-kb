import { DataStatus } from '../../components';
import { PageStateContainer } from '../../components/page-state-container/PageStateContainer';
import { useTranslation } from '../../hooks/useTranslation';
import { MaintenanceIcon } from '../../icons/MaintenanceIcon';

export const Maintenance = () => {
  const { t } = useTranslation();

  return (
    <PageStateContainer
      isFullPage={true}
      customComponent={
        <DataStatus icon={MaintenanceIcon} title={t('maintenanceTitle')} description={t('maintenanceDescription')} />
      }
    />
  );
};
