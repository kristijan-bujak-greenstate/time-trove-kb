import { StyledModalOverlay, StyledModalContent } from './modal.styles';

export type ModalProps = {
  isOpen: boolean;
  onOverlayClick: () => void;
  children: React.ReactNode;
};

export const Modal = ({ isOpen = false, onOverlayClick, children }: ModalProps) => {
  return (
    <StyledModalOverlay $isOpen={isOpen} onClick={onOverlayClick}>
      <StyledModalContent $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        {children}
      </StyledModalContent>
    </StyledModalOverlay>
  );
};
