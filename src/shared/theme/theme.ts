import { Theme } from './themeType';
export type TypographyFontSize = keyof Theme['typography']['fontSize'];
export type TypographyFontFamily = keyof Theme['typography']['fontFamily'];
export type TypographyFontWeight = keyof Theme['typography']['fontWeight'];
export type TypographyLineHeight = keyof Theme['typography']['lineHeight'];
export type Color = keyof Theme['colors'];

export const defaultTheme: Theme = {
  typography: {
    fontFamily: {
      montserrat: 'Montserrat',
      inter: 'Inter',
    },
    fontSize: {
      xLg: '2rem',
      lg: '1.5rem',
      md: '1rem',
      sm: '0.875rem',
      xSm: '0.75rem',
    },
    fontWeight: {
      extraBold: '700',
      bold: '600',
      semiBold: '500',
      regular: '400',
    },
    lineHeight: {
      xLg: '2.5rem',
      lg: '2.25rem',
      md: '1.5rem',
      sm: '1.25rem',
      xSm: '1rem',
    },
  },
  colors: {
    grey: '#434346',
    black: '#181E25',
  },
};
