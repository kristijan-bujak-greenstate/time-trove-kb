import styled from 'styled-components';

import { StyledCard } from '../card/card.styles';

export const StyledForm = styled.form`
  margin-top: 0.5rem;
  width: 100%;
`;

export const StyledButtonWrapper = styled.div`
  margin-top: 1rem;
`;

export const StyledBottomTextContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 1.25rem;
`;

export const StyledLinkContainer = styled.div`
  cursor: pointer;
`;

export const StyledPublicForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${StyledCard} {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const StyledHeadingWrapper = styled.div`
  margin: 0.75rem 0;
`;

export const StyledCircleIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.neutrals.hue50};
  padding: 0.625rem;
  border-radius: 50%;
  width: fit-content;
`;
