import { Palette } from '../../shared/theme/types';
import { ThemedIcon } from '../themed-icon/ThemedIcon';

import { getIconButtonColors } from './getIconButtonColors';
import { StyledIconButton } from './iconButton.styles';

export type IconButtonProps = {
  icon: React.ComponentType;
  iconShape?: 'square' | 'circle';
  onClick?: () => void;
  palette?: Palette;
};

export const IconButton = ({ icon, iconShape = 'square', onClick, palette = 'neutrals' }: IconButtonProps) => {
  const { color, bgColor, bgColorHover } = getIconButtonColors(palette);
  return (
    <StyledIconButton
      $bgColorHover={bgColorHover}
      $palette={palette}
      $bgColor={bgColor}
      $iconShape={iconShape}
      $color={color}
      onClick={onClick}
    >
      <ThemedIcon size={iconShape === 'square' ? 'medium' : 'small'} icon={icon}></ThemedIcon>
    </StyledIconButton>
  );
};
