import { ChipProps } from '../chip/Chip';
import { OptionSelect } from '../option-select/OptionSelect';

import { StyledOptionSelectList } from './optionSelectList.styles';

export type OptionSelectListProps = {
  selectOptionList: OptionSelectPriority[];
  hasError?: boolean;
  selectedOption?: string;
  handleOptionSelectClick: (option: OptionSelectPriority) => void;
  isDisabled?: boolean;
};

export type OptionSelectPriority = {
  id: string;
  status: ChipProps['status'];
  value: string;
};

export const OptionSelectList = ({
  selectedOption,
  handleOptionSelectClick,
  selectOptionList,
  hasError = false,
  isDisabled = false,
}: OptionSelectListProps) => {
  return (
    <StyledOptionSelectList>
      {selectOptionList.map((option: OptionSelectPriority) => (
        <OptionSelect
          key={option.id}
          chipText={option.value}
          chipStatus={option.status}
          onClick={() => handleOptionSelectClick(option)}
          isSelected={selectedOption === option.value}
          hasError={hasError}
          isDisabled={isDisabled}
        />
      ))}
    </StyledOptionSelectList>
  );
};
