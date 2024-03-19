import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import { Pagination, PaginationProps } from './Pagination';

const meta = {
  title: 'Example/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

const StatefulPagination = ({ currentPage: currentPageArg, ...restProps }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(currentPageArg);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(currentPageArg);
  }, [currentPageArg]);

  return <Pagination {...restProps} onButtonClick={handleClick} currentPage={currentPage} />;
};

export const Base: Story = {
  args: {
    totalPages: 12,
    currentPage: 1,
    pageLimitWithoutPatternApply: 4,
  },
  render: (args) => <StatefulPagination {...args} />,
};
