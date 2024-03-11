import { ChipSize } from '../../shared/theme/types';
import { Text } from '../text/Text';

import { StyledChipContainer } from './chip.styles';
import { getFontDetails } from './getFontDetailsChip';

export type ChipProps = {
  size?: ChipSize;
  children: string;
  status: 'success' | 'warning' | 'error';
  onClick?: () => void;
};

export const Chip = ({ size = 'large', children, status = 'success', onClick }: ChipProps) => {
  const { fontSize, lineHeight } = getFontDetails(size);
  return (
    <StyledChipContainer $size={size} $status={status} onClick={onClick}>
      <Text fontSize={fontSize} fontWeight={'bold'} lineHeight={lineHeight} palette={status} color={'hue100'}>
        {children}
      </Text>
    </StyledChipContainer>
  );
};
