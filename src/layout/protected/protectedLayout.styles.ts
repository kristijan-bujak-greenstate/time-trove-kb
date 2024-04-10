import styled from 'styled-components';

import { breakpoints } from '../../shared/breakpoints/breakpoints';

export const StyledPageShellWrapper = styled.div`
  height: calc(100vh - 4.75rem);
  padding: 0 1rem;
  overflow-y: auto;
  @media ${breakpoints.laptopSmall} {
    padding: 0 1.25rem;
  }
`;
