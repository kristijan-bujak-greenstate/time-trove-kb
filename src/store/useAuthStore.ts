import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export type AuthStore = {
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    immer((set) => ({
      isLogged: false,
      setIsLogged: (isLogged: boolean) => set({ isLogged }),
    })),
    {
      name: 'auth',
    }
  )
);
