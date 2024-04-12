import { ReactNode } from 'react';

type PageStateContainerCustomProps = {
  t?: never;
  onEmptyClick?: never;
  onErrorClick?: never;
  isEmpty?: never;
  isLoading?: never;
  isError?: never;
  children?: never;
  customComponent: ReactNode;
  isFullPage?: boolean;
};

export type PageStateContainerNotCustomProps = {
  t: (key: string) => string;
  onEmptyClick: () => void;
  onErrorClick: () => void;
  isEmpty: boolean;
  isLoading: boolean;
  isError: boolean;
  children: ReactNode;
  customComponent?: never;
  isFullPage?: never;
};

export type PageStateContainerProps = PageStateContainerCustomProps | PageStateContainerNotCustomProps;
