import styled from 'styled-components';

import { StyledChipContainer } from '../chip/chip.styles';
export const StyledTaskDetailsContainer = styled.div`
  width: 100%;
`;
export const StyledIconHeadingContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  ${StyledChipContainer} {
    white-space: nowrap;
  }
`;

export const StyledDescriptionWrapper = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 1rem;
`;

export const StyledHeadingWrapper = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
