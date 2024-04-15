import { Spinner } from '..';
import { NothingHereYetIcon, SomethingWentWrongIcon } from '../../icons';
import { DataStatus } from '../data-status/DataStatus';

import { StyledPageStateContainer } from './pageStateContainer.styles';
import { PageStateContainerProps } from './types';

export const PageStateContainer = ({
  isLoading,
  isError,
  children,
  isEmpty,
  onErrorClick,
  onEmptyClick,
  t,
  customComponent,
  isFullPage = false,
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
        <DataStatus
          icon={NothingHereYetIcon}
          onClick={onEmptyClick}
          title={t('emptyTasksTitle')}
          description={t('emptyTasksDescription')}
          buttonText={t('emptyTasksButtonText')}
          buttonPalette={'primary'}
        />
      </StyledPageStateContainer>
    );
  }

  if (isError)
    return (
      <StyledPageStateContainer>
        <DataStatus
          icon={SomethingWentWrongIcon}
          onClick={onErrorClick}
          title={t('backendErrorTitle')}
          description={t('backendErrorDescription')}
          buttonText={t('backendErrorButtonText')}
          buttonPalette={'neutrals'}
        />
      </StyledPageStateContainer>
    );

  if (customComponent) {
    return <StyledPageStateContainer $isFullPage={isFullPage}>{customComponent}</StyledPageStateContainer>;
  }

  return <>{children}</>;
};
