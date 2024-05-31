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
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-1rem);
  }
  60% {
    transform: translateY(0);
  }
  70% {
    transform: translateY(-0.5rem);
  }
  80% {
    transform: translateY(0);
  }
  90% {
    transform: translateY(-0.25rem);
  }
  100% {
    transform: translateY(0);
   
  }
`;
