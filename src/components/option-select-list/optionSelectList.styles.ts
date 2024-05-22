import styled from 'styled-components';

import { breakpoints } from '../../shared/breakpoints/breakpoints';

export const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => `${theme.colors.neutrals.hue100}`};
  @media ${breakpoints.mobile} {
    width: 1px;
    height: 2rem;
  }
`;

export const StyledOptionSelectList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 0.75rem;
  column-gap: 1rem;

  @media ${breakpoints.mobile} {
    row-gap: 0.75rem;
  }
`;
