import { TranslationKey } from '../../hooks/useTranslation';

export type BaseProps = {
  shouldCenter?: boolean;
  applyAnimation?: boolean;
  children: JSX.Element;
};

export type StateProps = BaseProps & {
  t: (key: TranslationKey) => string;
  isEmpty: boolean;
  isLoading: boolean;
  isError: boolean;
  renderCustomEmptyComponent?: JSX.Element;
  renderCustomErrorComponent?: JSX.Element;
  isFullPage?: never;
};

export type WrapperProps = BaseProps & {
  t?: never;
  isEmpty?: never;
  isLoading?: never;
  isError?: never;
  renderCustomEmptyComponent?: never;
  renderCustomErrorComponent?: never;
  isFullPage?: boolean;
};

export type PageStateContainerProps = StateProps | WrapperProps;
