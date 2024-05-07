import styled from 'styled-components';

import { breakpoints } from '../../../shared/breakpoints/breakpoints';

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
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
