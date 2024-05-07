type PageStateContainerCustomProps = {
  t?: never;
  isEmpty?: never;
  isLoading?: never;
  isError?: never;
  children?: never;
  customComponent?: JSX.Element;
  renderCustomEmptyComponent?: never;
  renderCustomErrorComponent?: never;
  isFullPage?: boolean;
};

export type PageStateContainerNotCustomProps = {
  t: (key: string) => string;
  isEmpty: boolean;
  isLoading: boolean;
  isError: boolean;
  children: JSX.Element;
  customComponent?: never;
  renderCustomEmptyComponent?: JSX.Element;
  renderCustomErrorComponent?: JSX.Element;
  isFullPage?: never;
};

export type PageStateContainerProps = PageStateContainerCustomProps | PageStateContainerNotCustomProps;
