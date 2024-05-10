import { ReactNode, createContext, useContext, useState } from 'react';

type PaginationContextProps = {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  limit: number;
};

type PaginationProviderProps = {
  children: ReactNode;
};

const PaginationContext = createContext({} as PaginationContextProps);

const limit = 6;

// eslint-disable-next-line react-refresh/only-export-components
export const usePaginationContext = () => useContext(PaginationContext);

export const PaginationProvider = ({ children }: PaginationProviderProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PaginationContext.Provider value={{ currentPage, setCurrentPage, limit }}>{children}</PaginationContext.Provider>
  );
};
