import { ChipStatus } from '../../shared/enums/chipStatus';
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
  status: ChipStatus;
  value: string;
  optionTextValue?: string;
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
          chipText={option.optionTextValue!}
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
