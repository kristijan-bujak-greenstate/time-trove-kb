import styled from 'styled-components';

import { ChipProps } from './Chip';

export const StyledChipContainer = styled.div<{ $size: NonNullable<ChipProps['size']>; $status: ChipProps['status'] }>`
  padding: ${({ theme, $size }) => theme.dimensions.chip[$size].padding};
  border-radius: ${({ theme, $size }) => theme.dimensions.chip[$size].borderRadius};
  background-color: ${({ theme, $status }) => theme.colors[$status].hue25};
  min-width: fit-content;
`;
