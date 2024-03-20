import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Dropdown, DropdownProps } from './Dropdown';
import { DropdownOption } from './types';

const meta = {
  title: 'Example/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockedDropDownOptionListLanguage: DropdownOption[] = [
  {
    id: '1',
    value: 'EN',
    imageUrl: '/images/language/en.png',
  },
  {
    id: '2',
    value: 'DE',
    imageUrl: '/images/language/de.png',
  },
];

const mockedDropDownOptionListItems: DropdownOption[] = [
  {
    id: '1',
    value: 'LLC',
  },
  {
    id: '2',
    value: 'LTD',
  },
  {
    id: '3',
    value: 'Sole Enterprise',
  },
  {
    id: '4',
    value: 'Limited Partnership',
  },
];

const StatefulDropdown = ({ selectedOption: selectedOptionArg, ...restProps }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState(selectedOptionArg);

  const handleDropdownSelectClick = (option: DropdownOption) => {
    setSelectedOption(option);
  };

  return <Dropdown {...restProps} onOptionClick={handleDropdownSelectClick} selectedOption={selectedOption} />;
};

export const DropdownLanguage: Story = {
  args: {
    type: 'textWithImage',
    selectedOption: mockedDropDownOptionListLanguage[0],
    dropdownOptions: mockedDropDownOptionListLanguage,
  },
  render: (args) => <StatefulDropdown {...args} />,
};

export const DropdownItems: Story = {
  args: {
    type: 'text',
    dropdownOptions: mockedDropDownOptionListItems,
    defaultText: 'Legal form',
  },
  render: (args) => <StatefulDropdown {...args} />,
};

export const DropdownLanguageDisabled: Story = {
  args: {
    type: 'textWithImage',
    selectedOption: mockedDropDownOptionListLanguage[0],
    dropdownOptions: mockedDropDownOptionListLanguage,
    isDisabled: true,
  },
  render: (args) => <StatefulDropdown {...args} />,
};
