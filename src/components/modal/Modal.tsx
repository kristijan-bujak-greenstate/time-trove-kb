import { RemSize } from '../../shared/theme/types';

import { StyledModalOverlay, StyledModalContent } from './modal.styles';

export type ModalProps = {
  isOpen: boolean;
  onOverlayClick: () => void;
  children: React.ReactNode;
  maxWidth?: RemSize;
  zIndex?: number;
};

export const Modal = ({ isOpen = false, onOverlayClick, maxWidth, children, zIndex = 1 }: ModalProps) => {
  return (
    <StyledModalOverlay $isOpen={isOpen} onClick={onOverlayClick} $zIndex={zIndex}>
      <StyledModalContent $maxWidth={maxWidth} $isOpen={isOpen} $zIndex={zIndex} onClick={(e) => e.stopPropagation()}>
        {children}
      </StyledModalContent>
    </StyledModalOverlay>
  );
};
