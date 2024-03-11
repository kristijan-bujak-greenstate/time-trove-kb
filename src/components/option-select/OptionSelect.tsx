import { Chip, ChipProps } from '../chip/Chip';
import { RadioButton } from '../radio-button/RadioButton';

import { StyledOptionSelect } from './optionSelect.styles';

export type OptionSelectProps = {
  chipText: string;
  chipStatus: ChipProps['status'];
  isSelected?: boolean;
  isDisabled?: boolean;
  hasError?: boolean;
  onClick: () => void;
};

export const OptionSelect = ({
  chipStatus,
  chipText,
  isSelected = false,
  isDisabled = false,
  hasError = false,
  onClick,
}: OptionSelectProps) => {
  return (
    <StyledOptionSelect>
      <RadioButton isSelected={isSelected} disabled={isDisabled} hasError={hasError} onClick={onClick} />
      <Chip status={chipStatus} onClick={onClick}>
        {chipText}
      </Chip>
    </StyledOptionSelect>
  );
};
