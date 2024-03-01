import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';

import { Modal, ModalProps } from './Modal';

const meta = {
  title: 'Example/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const StatefulModal = ({ isOpen, children }: ModalProps) => {
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
      <Modal isOpen={isModalOpen} onOverlayClick={closeModal}>
        {children}
      </Modal>
    </>
  );
};

export const Base: Story = {
  args: {
    isOpen: false,
    children: (
      <div style={{ maxWidth: '672px', width: '100%' }}>
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
        corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
        expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
        quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
        molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
        maiores alias consequatur aut perferendis doloribus asperiores repellat."
      </div>
    ),
  },
  render: ({ ...args }) => <StatefulModal {...args} />,
};
