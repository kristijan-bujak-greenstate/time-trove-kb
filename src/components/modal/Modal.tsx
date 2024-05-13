import { RemSize } from '../../shared/theme/types';

import { StyledModalOverlay, StyledModalContent } from './modal.styles';

export type ModalProps = {
  isOpen: boolean;
  onOverlayClick: () => void;
  children: React.ReactNode;
  maxWidth?: RemSize;
};

export const Modal = ({ isOpen = false, onOverlayClick, maxWidth, children }: ModalProps) => {
  return (
    <StyledModalOverlay $isOpen={isOpen} onClick={onOverlayClick}>
      <StyledModalContent $maxWidth={maxWidth} $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        {children}
      </StyledModalContent>
    </StyledModalOverlay>
  );
};
