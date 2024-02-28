import styled from 'styled-components';

import { IconSize } from '../../shared/theme/types';

type StyledIconProps = {
  $size: IconSize | 'fill';
  $color: string;
};

export const StyledIcon = styled.div<StyledIconProps>`
  width: ${({ theme, $size }) => ($size === 'fill' ? '100%' : theme.dimensions.icon[$size])};
  height: ${({ theme, $size }) => ($size === 'fill' ? '100%' : theme.dimensions.icon[$size])};
  color: ${({ $color }) => $color};
`;
