import { Colors, Palette } from '../../shared/theme/types';
export type IconButtonColors = {
  color: Colors<Palette>;
  bgColor: Colors<Palette>;
  bgColorHover: Colors<Palette>;
};

export const getIconButtonColors = (palette: Palette): IconButtonColors => {
  return palette === 'neutrals'
    ? { color: 'hue0', bgColor: 'hue100', bgColorHover: 'hue200' }
    : { color: 'hue100', bgColor: 'hue0', bgColorHover: 'hue50' };
};
