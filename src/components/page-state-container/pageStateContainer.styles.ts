import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';

export const StyledPageStateContainer = styled.div<{
  $isFullPage?: boolean;
  $isInitialLoad?: boolean;
  $applyAnimation?: boolean;
  $shouldCenter?: boolean;
}>`
  height: ${({ $isFullPage }) => ($isFullPage ? '100vh' : '100%')};

  ${({ $shouldCenter }) =>
    $shouldCenter &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 2rem;
      position: relative;
    `}

  ${({ $isInitialLoad, $applyAnimation }) =>
    $isInitialLoad &&
    $applyAnimation &&
    css`
      animation: ${slideIn} 0.8s ease-out forwards;
    `}
`;

const slideIn = keyframes`
  0% {
    transform: translateY(-100vh);
    opacity: 0;
  }
  40% {
    transform: translateY(30px);
    opacity: 1;
  }
  55% {
    transform: translateY(-10px);
  }
  70% {
    transform: translateY(5px);
  }
  85% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
   
  }
`;

export const StyledPageStateAnimationWrapper = styled.div<{ $isStateComponent?: boolean }>`
  height: ${({ $isStateComponent }) => $isStateComponent && '100%'};
  overflow: hidden;
`;
