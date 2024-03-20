import { PxSize, RemSize } from '../../shared/theme/types';

import { StyledRadioButton } from './radioButton.styles';

type RadioProps = {
  size?: RemSize;
  border?: PxSize;
  isSelected: boolean;
  disabled: boolean;
  hasError?: boolean;
  onClick: () => void;
};

export const RadioButton = ({
  size = '1.25rem',
  border = '1px',
  isSelected,
  disabled,
  hasError = false,
  onClick,
}: RadioProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick();
  };
  return (
    <StyledRadioButton
      $size={size}
      $border={border}
      $isSelected={isSelected}
      $hasError={hasError}
      disabled={disabled}
      onClick={handleClick}
    />
  );
};
