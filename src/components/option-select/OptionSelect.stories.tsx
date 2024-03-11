import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import { OptionSelect, OptionSelectProps } from './OptionSelect';

const meta = {
  title: 'Example/Option Select',
  component: OptionSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof OptionSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const StatefulOptionSelect = ({ isSelected = false, ...restProps }: OptionSelectProps) => {
  const [isSelectedState, setIsSelectedState] = useState<boolean>(isSelected);

  const handleClick = () => {
    setIsSelectedState(!isSelectedState);
  };

  useEffect(() => {
    setIsSelectedState(isSelected);
  }, [isSelected]);

  return <OptionSelect {...restProps} isSelected={isSelectedState} onClick={handleClick} />;
};

export const Base: Story = {
  args: {
    isDisabled: false,
    isSelected: false,
    hasError: false,
    chipStatus: 'success',
    chipText: 'Low',
  },
  render: ({ ...args }) => <StatefulOptionSelect {...args} />,
};

export const Error: Story = {
  args: {
    ...Base.args,
    hasError: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Base.args,
    isDisabled: true,
  },
};

export const Selected: Story = {
  args: {
    ...Base.args,
    isSelected: true,
  },
};
