import { DataStatus } from '../../components';
import { useTranslation } from '../../hooks/useTranslation';
import { MaintenanceIcon } from '../../icons/MaintenanceIcon';

import { StyledMaintenanceWrapper } from './maintenance.styles';

export const Maintenance = () => {
  const { t } = useTranslation();

  return (
    <StyledMaintenanceWrapper>
      <DataStatus icon={MaintenanceIcon} title={t('maintenanceTitle')} description={t('maintenanceDescription')} />
    </StyledMaintenanceWrapper>
  );
};
