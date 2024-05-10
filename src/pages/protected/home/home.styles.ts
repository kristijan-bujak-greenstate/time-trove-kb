import styled from 'styled-components';

import { breakpoints } from '../../../shared/breakpoints/breakpoints';

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  flex-direction: column;
  gap: 1rem;
  @media ${breakpoints.tablet} {
    flex-direction: row;
  }
`;

export const StyledTitleDropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${breakpoints.tablet} {
    gap: 0.75rem;
  }
`;

export const StyledPaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
`;

export const StyledFlatListWrapper = styled.div`
  min-height: 27.875rem;
`;

export const StyledDropdownWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
