import { DataStatus, Spinner } from '..';
import { NothingHereYetIcon, SomethingWentWrongIcon } from '../../icons';

import { StyledPageStateContainer } from './pageStateContainer.styles';
import { PageStateContainerProps } from './types';

export const PageStateContainer = ({
  isLoading,
  isError,
  children,
  isEmpty,
  customComponent,
  renderCustomEmptyComponent,
  renderCustomErrorComponent,
  isFullPage = false,
  t,
}: PageStateContainerProps) => {
  if (isLoading)
    return (
      <StyledPageStateContainer>
        <Spinner size={'large'} />
      </StyledPageStateContainer>
    );

  if (isEmpty) {
    return (
      <StyledPageStateContainer>
        {renderCustomEmptyComponent || (
          <DataStatus icon={NothingHereYetIcon} title={t('emptyTasksTitle')} description={t('emptyTasksDescription')} />
        )}
      </StyledPageStateContainer>
    );
  }

  if (isError)
    return (
      <>
        <StyledPageStateContainer>
          {renderCustomErrorComponent} ||
          <DataStatus
            icon={SomethingWentWrongIcon}
            title={t('backendErrorTitle')}
            description={t('backendErrorDescription')}
          />
        </StyledPageStateContainer>
      </>
    );

  if (customComponent) {
    return <StyledPageStateContainer $isFullPage={isFullPage}>{customComponent}</StyledPageStateContainer>;
  }

  return <>{children}</>;
};
