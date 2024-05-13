import styled from 'styled-components';
import { keyframes } from 'styled-components';

import { RemSize } from '../../shared/theme/types';

const modalShrinkAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.17);
  }
`;

const modalExpandAnimation = keyframes`
  0% {
    transform: scale(0.17);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledModalOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => `${theme.colors.neutrals.hue900}66`};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: opacity 0.1s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  z-index: 2;
`;

export const StyledModalContent = styled.div<{ $isOpen: boolean; $maxWidth?: RemSize }>`
  max-width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : 'none')};
  width: ${({ $maxWidth }) => ($maxWidth ? '100%' : 'auto')};
  background-color: ${({ theme }) => theme.colors.neutrals.hue0};
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.neutrals.hue100};
  border-radius: 1rem;
  animation: ${({ $isOpen }) => ($isOpen ? modalExpandAnimation : modalShrinkAnimation)} 0.1s ease-out;
  z-index: 2;
`;
