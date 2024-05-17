import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';

import { ChipStatus } from '../../shared/enums/chipStatus';
import { PriorityLevel } from '../../shared/enums/priorityLevel';

import { OptionSelectList, OptionSelectListProps, OptionSelectPriority } from './OptionSelectList';

const meta = {
  title: 'Example/Option Select List',
  component: OptionSelectList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof OptionSelectList>;

export default meta;
type Story = StoryObj<typeof meta>;

const selectOptionsItems: OptionSelectPriority[] = [
  {
    id: '1',
    status: ChipStatus.SUCCESS,
    value: PriorityLevel.LOW,
  },
  {
    id: '2',
    status: ChipStatus.WARNING,
    value: PriorityLevel.MEDIUM,
  },
  {
    id: '3',
    status: ChipStatus.ERROR,
    value: PriorityLevel.HIGH,
  },
];

const StatefulOptionSelectList = ({ selectOptionList, isDisabled, hasError }: OptionSelectListProps) => {
  const [selectedOption, setSelectedOption] = useState<string>();
  const [hasErrorState, setHasErrorState] = useState<boolean>(hasError!);
  const [isDisabledState, setIsDisabledState] = useState<boolean>(isDisabled!);

  const handleOptionSelectClick = (option: OptionSelectPriority) => {
    setSelectedOption(option.value);
    setHasErrorState(false);
  };

  useEffect(() => {
    setHasErrorState(hasError!);
  }, [hasError]);

  useEffect(() => {
    setIsDisabledState(isDisabled!);
  }, [isDisabled]);

  return (
    <OptionSelectList
      selectedOption={selectedOption}
      hasError={hasErrorState}
      selectOptionList={selectOptionList}
      handleOptionSelectClick={handleOptionSelectClick}
      isDisabled={isDisabledState}
    />
  );
};

export const Base: Story = {
  args: {
    hasError: false,
    isDisabled: false,
    selectOptionList: selectOptionsItems,
  },
  render: (args) => <StatefulOptionSelectList {...args} />,
};
