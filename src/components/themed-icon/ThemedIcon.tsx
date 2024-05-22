import { useTheme } from 'styled-components';

import { IconSize } from '../../shared/theme/types';
import { Palette } from '../../shared/theme/types';
import { Colors } from '../../shared/theme/types';

import { StyledIcon } from './themedIcon.styles';

type ThemedIconProps<T extends Palette> = {
  icon: React.ComponentType;
  size?: IconSize | 'fill';
  palette?: T;
  color?: Colors<T>;
  onClick?: () => void;
};

export const ThemedIcon = <T extends Palette>({
  icon: IconComponent,
  size = 'small',
  palette,
  color,
  onClick,
}: ThemedIconProps<T>) => {
  const theme = useTheme();
  const iconColor = palette && color ? (theme.colors[palette][color] as string) : theme.colors.neutrals.hue50;
  return (
    <StyledIcon $size={size} $color={iconColor} onClick={onClick}>
      <IconComponent />
    </StyledIcon>
  );
};
