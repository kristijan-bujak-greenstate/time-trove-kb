import { useMaintenance } from '../../store/useMaintenance';

export const handleServiceUnavailable = () => {
  useMaintenance.getState().setIsMaintenance(true);
};
