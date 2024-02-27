import { ChipSize } from '../../shared/theme/types';
import { TypographyFontSize, TypographyLineHeight } from '../../shared/theme/types';
type FontDetails = {
  fontSize: TypographyFontSize;
  lineHeight: TypographyLineHeight;
};
export const getFontDetails = (size: ChipSize): FontDetails => {
  return size === 'large'
    ? { fontSize: 'small', lineHeight: 'small' }
    : { fontSize: 'extraSmall', lineHeight: 'extraSmall' };
};
