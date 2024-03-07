import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { useEffect } from 'react';

import { Dialog } from './Dialog';
import { DialogProps } from './types';

const meta = {
  title: 'Example/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const StatefulDialog = ({ isOpen = false, onPrimaryButtonClick, ...restProps }: DialogProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(isOpen);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Dialog
        {...restProps}
        isOpen={isModalOpen}
        onPrimaryButtonClick={onPrimaryButtonClick}
        onOverlayClick={closeModal}
      />
    </>
  );
};

export const Base: Story = {
  args: {
    isOpen: false,
    onPrimaryButtonClick: () => console.log('Primary button clicked'),
    title: 'Warning title',
    description: 'Are you sure you want to?',
    status: 'warning',
    showSecondaryButton: true,
    primaryButtonText: 'Confirm',
    secondaryButtonText: 'Cancel',
    onSecondaryButtonClick: () => console.log('Secondary button clicked'),
  },
  render: ({ ...args }) => <StatefulDialog {...args} />,
};
