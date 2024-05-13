import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export type MaintenanceStore = {
  isMaintenance: boolean;
  setIsMaintenance: (isMaintenance: boolean) => void;
};

export const useMaintenanceStore = create<MaintenanceStore>()(
  persist(
    immer((set) => ({
      isMaintenance: false,
      setIsMaintenance: (isMaintenance: boolean) => set({ isMaintenance }),
    })),
    {
      name: 'maintenance',
    }
  )
);
