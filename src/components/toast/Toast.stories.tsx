import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';

import { Toast, ToastProps } from './Toast';

const meta = {
  title: 'Example/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

const StatefulToast = ({ isOpen, ...restProps }: ToastProps) => {
  const [isToastOpen, setIsToastOpen] = useState<boolean>(isOpen);
  const openToast = () => {
    setIsToastOpen(true);
  };

  const closeToast = () => {
    setIsToastOpen(false);
  };
  useEffect(() => {
    setIsToastOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <button onClick={openToast}>Open Toast</button>
      <Toast {...restProps} isOpen={isToastOpen} onCloseClick={closeToast} />
    </>
  );
};

export const Base: Story = {
  args: {
    isOpen: false,
    title: 'Success',
    description: 'Success description',
    status: 'success',
  },
  render: ({ ...args }) => <StatefulToast {...args} />,
};
