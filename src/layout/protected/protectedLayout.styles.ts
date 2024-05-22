import styled from 'styled-components';

import { breakpoints } from '../../shared/breakpoints/breakpoints';

export const StyledPageShellWrapper = styled.div`
  height: calc(100vh - 8.125rem);
  padding: 0 1rem;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.neutrals.hue50};
  @media ${breakpoints.laptopSmall} {
    padding: 0 1.25rem;
  }
  @media ${breakpoints.tablet} {
    height: calc(100vh - 4.75rem);
  }
`;
