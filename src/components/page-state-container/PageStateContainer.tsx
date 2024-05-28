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
          <DataStatus
            icon={NothingHereYetIcon}
            title={t('pages.emptyAll.title')}
            description={t('pages.emptyAll.description')}
          />
        )}
      </StyledPageStateContainer>
    );
  }

  if (isError)
    return (
      <StyledPageStateContainer>
        {renderCustomErrorComponent || (
          <DataStatus
            icon={SomethingWentWrongIcon}
            title={t('pages.serverError.title')}
            description={t('pages.serverError.button')}
          />
        )}
      </StyledPageStateContainer>
    );

  if (customComponent) {
    return <StyledPageStateContainer $isFullPage={isFullPage}>{customComponent}</StyledPageStateContainer>;
  }

  return <>{children}</>;
};
