import styled from 'styled-components';

import { breakpoints } from '../../shared/breakpoints/breakpoints';
import { PxSize, RemSize } from '../../shared/theme/types';

export const StyledFlatList = styled.div<{
  $numColumns: number | 'auto-fill';
  $gap: PxSize | RemSize;
  $itemMinWidth: RemSize;
}>`
  display: grid;
  gap: ${({ $gap }) => $gap};
  @media (${breakpoints.tablet}) {
    grid-template-columns: ${({ $numColumns, $itemMinWidth }) =>
      $numColumns === 'auto-fill' ? `repeat(auto-fill, minmax(${$itemMinWidth}, 1fr))` : `repeat(${$numColumns}, 1fr)`};
  }
`;
