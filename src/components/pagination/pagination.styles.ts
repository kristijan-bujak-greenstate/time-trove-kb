import styled from 'styled-components';

import { StyledButton } from '../button/button.styles';

export const StyledPagination = styled.div`
  display: flex;
  gap: 0.25rem;
  width: fit-content;
  ${StyledButton} {
    padding: 0;
    min-width: 2rem;
    max-width: fit-content;
    height: 2rem;
  }
`;

export const StyledDots = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.25rem;
  width: 0.75rem;
  justify-content: center;
`;
