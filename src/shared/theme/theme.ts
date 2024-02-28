import { Theme } from './types';

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
      extraSmall: '0.75rem',
    },
    fontWeight: {
      extraBold: '700',
      semiBold: '500',
      bold: '600',
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
      hue50: '#F3F4F8',
      hue0: '#FFFFFF',
    },
    primary: {
      hue0: '#9867FF',
      hue50: '#7E44F8',
      hue100: '#733CE5',
    },
    success: {
      hue0: '#5FEA7D',
      hue25: '#EEFFE6',
      hue50: '#2FC850',
      hue100: '#2BAA47',
    },
    warning: {
      hue0: '#FFA666',
      hue25: '#FFF2E6',
      hue50: '#FF9142',
      hue100: '#EC873D',
    },
    error: {
      hue0: '#FF5E5E',
      hue25: '#FFE6E6',
      hue50: '#FF4242',
      hue100: '#DF3838',
    },
  },
  dimensions: {
    button: {
      small: {
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
      },
      medium: {
        padding: '0.625rem 1.375rem',
        borderRadius: '0.75rem',
      },
      large: {
        padding: '0.75rem 1.75rem',
        borderRadius: '0.75rem',
      },
      extraLarge: {
        padding: '1rem 2.25rem',
        borderRadius: '0.75rem',
      },
    },
    icon: {
      small: '1.25rem',
      medium: '1.5rem',
      large: '3rem',
    },
    chip: {
      large: {
        padding: '0.5rem 0.75rem',
        borderRadius: '0.75rem',
      },
      small: {
        padding: '0.25rem 0.5rem',
        borderRadius: '0.5rem',
      },
    },
  },
};
