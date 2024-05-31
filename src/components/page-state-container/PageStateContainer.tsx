import { useEffect, useState } from 'react';

import { DataStatus, Spinner } from '..';
import { NothingHereYetIcon, SomethingWentWrongIcon } from '../../icons';

import { StyledPageStateContainer } from './pageStateContainer.styles';
import { PageStateContainerProps } from './types';

export const PageStateContainer = ({
  isLoading,
  isError,
  children,
  isEmpty,
  renderCustomEmptyComponent,
  renderCustomErrorComponent,
  t,
  isFullPage = false,
  shouldCenter = false,
  applyAnimation = true,
}: PageStateContainerProps) => {
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

  useEffect(() => {
    if (isInitialLoad) document.body.addEventListener('mousedown', () => !isLoading && setIsInitialLoad(false));
  }, [isInitialLoad, isLoading]);

  if (isLoading)
    return (
      <StyledPageStateContainer $shouldCenter={true}>
        <Spinner size={'large'} />
      </StyledPageStateContainer>
    );

  if (isEmpty) {
    return (
      <StyledPageStateContainer $isInitialLoad={isInitialLoad} $applyAnimation={applyAnimation} $shouldCenter={true}>
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
      <StyledPageStateContainer $isInitialLoad={isInitialLoad} $applyAnimation={applyAnimation} $shouldCenter={true}>
        {renderCustomErrorComponent || (
          <DataStatus
            icon={SomethingWentWrongIcon}
            title={t('pages.serverError.title')}
            description={t('pages.serverError.description')}
          />
        )}
      </StyledPageStateContainer>
    );

  return (
    <StyledPageStateContainer
      $isInitialLoad={isInitialLoad}
      $applyAnimation={applyAnimation}
      $isFullPage={isFullPage}
      $shouldCenter={shouldCenter}
    >
      {children}
    </StyledPageStateContainer>
  );
};
