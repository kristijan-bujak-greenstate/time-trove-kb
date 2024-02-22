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
      extraLarge: '2rem',
      large: '1.5rem',
      medium: '1rem',
      small: '0.875rem',
    },
    fontWeight: {
      extraBold: '700',
      bold: '600',
      regular: '400',
    },
    lineHeight: {
      extraLarge: '2.5rem',
      large: '2.25rem',
      medium: '1.5rem',
      small: '1.25rem',
      extraSmall: '1rem',
    },
  },
  colors: {
    lightGrey: '#7B828A',
    grey: '#434346',
    black: '#181E25',
  },
};
