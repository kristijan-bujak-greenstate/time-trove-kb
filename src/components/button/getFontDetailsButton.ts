import { TypographyFontSize, TypographyLineHeight, ButtonSize } from '../../shared/theme/types';

type FontDetails = {
  fontSize: TypographyFontSize;
  lineHeight: TypographyLineHeight;
};

export const getFontDetails = (size: ButtonSize): FontDetails => {
  switch (size) {
    case 'small':
      return { fontSize: 'extraSmall', lineHeight: 'extraSmall' };

    case 'medium':
      return { fontSize: 'small', lineHeight: 'small' };

    case 'large':
    case 'extraLarge':
      return { fontSize: 'medium', lineHeight: 'medium' };
    default:
      throw new Error(`Unsupported size: ${size}`);
  }
};
