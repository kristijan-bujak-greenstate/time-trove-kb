import { Fragment } from 'react';

import { ChipStatus } from '../../shared/enums/chipStatus';
import { PriorityLevel } from '../../shared/enums/priorityLevel';
import { OptionSelect } from '../option-select/OptionSelect';

import { StyledOptionSelectList, StyledLine } from './optionSelectList.styles';

export type OptionSelectListProps = {
  selectOptionList: OptionSelectPriority[];
  hasError?: boolean;
  selectedOption?: string;
  handleOptionSelectClick: (option: OptionSelectPriority) => void;
  isDisabled?: boolean;
  showLine?: boolean;
};

export type OptionSelectPriority = {
  id: string;
  status: ChipStatus;
  value: PriorityLevel;
  optionTextValue?: string;
};

export const OptionSelectList = ({
  selectedOption,
  handleOptionSelectClick,
  selectOptionList,
  hasError = false,
  isDisabled = false,
  showLine = false,
}: OptionSelectListProps) => {
  return (
    <StyledOptionSelectList>
      {selectOptionList.map((option: OptionSelectPriority, index: number) => (
        <Fragment key={option.id}>
          <OptionSelect
            chipText={option.optionTextValue!}
            chipStatus={option.status}
            onClick={() => handleOptionSelectClick(option)}
            isSelected={selectedOption === option.value}
            hasError={hasError}
            isDisabled={isDisabled}
          />
          {index === 0 && showLine && <StyledLine />}
        </Fragment>
      ))}
    </StyledOptionSelectList>
  );
};
