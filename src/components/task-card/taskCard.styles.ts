import styled, { keyframes } from 'styled-components';

import { breakpoints } from '../../shared/breakpoints/breakpoints';
import { StyledChipContainer } from '../chip/chip.styles';
import { StyledIconButton } from '../icon-button/iconButton.styles';
import { StyledText } from '../text/text.styles';

const slideIn = keyframes`
  from {
    width: 100%;
  }
  to {
    width: calc(100% - 5.25rem);
  }
`;

const slideOut = keyframes`
  from {
    width: calc(100% - 5.25rem);
  }
  to {
    width: 100%;
  }
`;

const fadeInWithSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOutWithSlideOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  ${StyledChipContainer} {
    ${StyledText} {
      max-width: 8rem;
    }
  }

  ${StyledText} {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

export const StyledMainContainer = styled.div<{ $isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  animation: ${({ $isVisible }) => ($isVisible ? slideIn : slideOut)} 0.4s ease-in-out forwards;

  @media ${breakpoints.mobile} {
    width: 100%;
    animation: none;
  }
`;

export const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 1rem;
  @media ${breakpoints.mobile} {
    margin-top: 0.25rem;
  }
`;

export const StyledPriorityContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  ${StyledChipContainer} {
    ${StyledText} {
      max-width: 6rem;
    }
  }

  ${StyledText} {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

export const StyledIconButtonsContainer = styled.div`
  display: none;
  @media ${breakpoints.mobile} {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

export const StyledTextTitleWrapper = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const StyledDescriptionContainer = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const StyledIconButtonsContainerMobile = styled.div<{ $isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background: linear-gradient(90deg, rgba(204, 204, 255, 0.1) 0%, rgba(204, 204, 255, 0.7) 100%);

  animation: ${({ $isVisible }) => ($isVisible ? fadeInWithSlideIn : fadeOutWithSlideOut)} 0.4s ease-in-out forwards;

  ${StyledIconButton} {
    box-shadow: ${({ $isVisible }) => ($isVisible ? '0 0 1px 1px rgba(0, 0, 0, 0.2)' : 'none')};
  }

  @media ${breakpoints.mobile} {
    display: none;
  }
`;
