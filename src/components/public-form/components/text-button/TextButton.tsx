import { StyledTextButton } from '../../publicForm.styles';

export type TextButtonProps = {
  children: string;
  onClick: () => void;
};

export const TextButton = ({ children, onClick }: TextButtonProps) => {
  return <StyledTextButton onClick={onClick}>{children}</StyledTextButton>;
};
