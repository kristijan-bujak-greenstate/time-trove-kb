import styled from 'styled-components';

import { breakpoints } from '../shared/breakpoints/breakpoints';

export const StyledPublicLayout = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.neutrals.hue50};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 6rem 1.25rem;
  @media (${breakpoints.tablet}) {
    padding: 2rem 1.25rem;
  }
`;

export const StyledDropdownWrapper = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
`;

export const StyledOutletWrapper = styled.div`
  max-width: 29.375rem;
  width: 100%;
`;
