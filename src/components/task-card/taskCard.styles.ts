import styled from 'styled-components';

import { StyledText } from '../text/text.styles';

export const StyledHeaderContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  ${StyledText} {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

export const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.25rem;
`;

export const StyledPriorityContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const StyledIconButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const StyledTextTitleWrapper = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  background-color: red;
`;
