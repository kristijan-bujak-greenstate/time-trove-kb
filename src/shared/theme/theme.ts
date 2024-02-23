import { Theme } from './themeType';
export type TypographyFontSize = keyof Theme['typography']['fontSize'];
export type TypographyFontFamily = keyof Theme['typography']['fontFamily'];
export type TypographyFontWeight = keyof Theme['typography']['fontWeight'];
export type TypographyLineHeight = keyof Theme['typography']['lineHeight'];
export type Palette = keyof Theme['colors'];
export type Colors<T extends Palette> = keyof Theme['colors'][T];

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
      semiBold: '500',
      regular: '400',
    },
    lineHeight: {
      maxLarge: '2.5rem',
      extraLarge: '2.25rem',
      large: '1.75rem',
      medium: '1.5rem',
      small: '1.25rem',
      extraSmall: '1rem',
    },
  },
  colors: {
    neutrals: {
      hue400: '#181E25',
      hue300: '#434346',
      hue200: '#7B828A',
      hue100: '#C9D2DE',
      hue50: 'F3F4F8',
      hue0: '#FFFFFF',
    },
    primary: {
      hue0: '#9867FF',
      hue50: '#7E44F8',
      hue100: '#733CE5',
    },
    success: {
      hue0: '#5FEA7D',
      hue50: '#2FC850',
      hue100: '#2BAA47',
    },
    warning: {
      hue0: '#FFA666',
      hue50: '#FF9142',
      hue100: '#EC873D',
    },
    danger: {
      hue0: '#FF5E5E',
      hue50: '#FF4242',
      hue100: '#DF3838',
    },
  },
};
