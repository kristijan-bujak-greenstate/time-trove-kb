import { useMaintenanceStore } from '../../store/useMaintenanceStore';

export const handleServiceUnavailable = () => {
  useMaintenanceStore.getState().setIsMaintenance(true);
};
