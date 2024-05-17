import { ReactNode, createContext, useContext, useState } from 'react';

import { mockedSelectOptionsItemsForFiltering } from '../shared/data/selectOptionsItems';
import { PriorityLevel } from '../shared/enums/priorityLevel';

type PaginationContextProps = {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  limit: number;
  priority: PriorityLevel;
  setPriority: (priority: PriorityLevel) => void;
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
  const [priority, setPriority] = useState<PriorityLevel>(mockedSelectOptionsItemsForFiltering[0].value);

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        limit,
        priority,
        setPriority,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
