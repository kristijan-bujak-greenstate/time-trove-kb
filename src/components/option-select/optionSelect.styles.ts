import styled from 'styled-components';

import { StyledChipContainer } from '../chip/chip.styles';

export const StyledOptionSelect = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  ${StyledChipContainer}:hover {
    cursor: pointer;
  }
`;
