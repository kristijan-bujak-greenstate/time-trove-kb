import { ReactNode, createContext, useContext, useState } from 'react';

import { mockedSelectOptionsItemsForFiltering } from '../shared/data/selectOptionsItems';

type PaginationContextProps = {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
  limit: number;
  priority: string;
  setPriority: (priority: string) => void;
  searchParams?: string;
  setSearchParams: (searchParam?: string) => void;
  searchInputValue?: string;
  setSearchInputValue: (searchInputValue?: string) => void;
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
  const [priority, setPriority] = useState<string>(mockedSelectOptionsItemsForFiltering[0].value);
  // This state is for a parameter in useQuery that will be sent to the server if the function to set this state is triggered.
  // (It will be triggered if there are no new changes in the searchInputValue state for 650ms while typing/changing it.)
  const [searchParams, setSearchParams] = useState<string | undefined>(undefined);
  // This state is for updating the input value during the onChange event.
  // It is global because it is set back to undefined after creating a new task.
  const [searchInputValue, setSearchInputValue] = useState<string | undefined>(undefined);

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        limit,
        priority,
        setPriority,
        searchParams,
        setSearchParams,
        searchInputValue,
        setSearchInputValue,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
