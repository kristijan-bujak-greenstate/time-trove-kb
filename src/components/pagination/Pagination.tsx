import { memo } from 'react';

import { Button } from '../button/Button';

import { Dots } from './components/Dots';
import { StyledPagination } from './pagination.styles';

export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onButtonClick: (pageNumber: number) => void;
  pageLimitWithoutPatternApply?: number;
};

export const Pagination = memo(
  ({ totalPages, currentPage, onButtonClick, pageLimitWithoutPatternApply = 4 }: PaginationProps) => {
    const renderPaginationButtons = () => {
      const buttons: JSX.Element[] = [];

      const addPaginationButton = (pageNumber: number, isActive: boolean) => {
        buttons.push(
          <Button
            key={pageNumber}
            palette={isActive ? 'primary' : 'neutrals'}
            onClick={() => onButtonClick(pageNumber)}
            size={'small'}
            fontWeight={'bold'}
          >
            {String(pageNumber)}
          </Button>
        );
      };

      const addDots = (key: string) => {
        buttons.push(<Dots key={key} />);
      };
      // if totalPages is less than pageLimitWithoutPatternApply, it will not apply pattern and all buttons will be rendered
      if (totalPages <= pageLimitWithoutPatternApply) {
        for (let i = 1; i <= totalPages; i++) {
          addPaginationButton(i, currentPage === i);
        }
      } else {
        // add the first button
        addPaginationButton(1, currentPage === 1);
        // if the first button is clicked, show second and third button
        if (currentPage === 1) {
          for (let i = 2; i <= Math.min(3, totalPages); i++) {
            addPaginationButton(i, false);
          }
          if (totalPages > 3) {
            addDots('dots1');
          }
        } else {
          // if currentPage is 4, 2 will be missing, so I add it here
          if (currentPage === 4) {
            addPaginationButton(2, false);
          }
          // if the currentPage is greater than 4, add dots to the left side
          if (currentPage > 4) {
            addDots('dots1');
          }
          // logic to add current button, one from the left and from the right side when current button is clicked
          const startPage = Math.max(2, currentPage - 1);
          const endPage = Math.min(totalPages - 1, currentPage + 1);
          for (let i = startPage; i <= endPage; i++) {
            // if the last button is clicked, add third from the end, because it was missing (for example 12 is clicked, 10 will be missing - case for 12 total pages)
            if (currentPage === totalPages) {
              addPaginationButton(currentPage - 2, false);
            }
            addPaginationButton(i, currentPage === i);
          }
          // if the fourth from the end is clicked, second from the end will be missing (for example 9, 11 will be missing - case for 12 total pages, so I add 11)
          if (currentPage === totalPages - 3) {
            addPaginationButton(currentPage + 2, false);
          }
          // show dots on the right side if neccessary
          if (currentPage < totalPages - 3) {
            addDots('dots2');
          }
        }
        // add last one button
        addPaginationButton(totalPages, currentPage === totalPages);
      }

      return buttons;
    };

    return <StyledPagination>{renderPaginationButtons()}</StyledPagination>;
  }
);
