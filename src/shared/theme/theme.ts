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
      extraMedium: '1.25rem',
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
      larger: '2rem',
      large: '1.75rem',
      medium: '1.5rem',
      small: '1.25rem',
      extraSmall: '1rem',
    },
  },
  colors: {
    neutrals: {
      hue900: '#000000',
      hue400: '#181E25',
      hue300: '#434346',
      hue200: '#7B828A',
      hue150: '#6F7492',
      hue100: '#C9D2DE',
      hue50: '#F3F4F8',
      hue0: '#FFFFFF',
    },
    primary: {
      hue0: '#FFFFFF',
      hue25: '#F3EDFF',
      hue50: '#9867FF',
      hue100: '#7E44F8',
      hue200: '#733CE5',
      hue250: '#F9F9FB',
      hue300: '#3381FF',
    },
    success: {
      hue0: '#FFFFFF',
      hue25: '#e6ffe6',
      hue50: '#5FEA7D',
      hue100: '#2FC850',
      hue200: '#2BAA47',
    },
    warning: {
      hue0: '#FFFFFF',
      hue25: '#fff5e6',
      hue50: '#FFA666',
      hue100: '#FF9142',
      hue200: '#EC873D',
    },
    error: {
      hue0: '#FFEDED',
      hue25: '#FFE6E6',
      hue50: '#FF5E5E',
      hue75: '#ff9999',
      hue100: '#FF4242',
      hue200: '#DF3838',
    },
  },
  borderRadius: {
    small: '0.75rem',
    medium: '1rem',
    large: '1.25rem',
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
    input: {
      small: {
        padding: '0.5rem 0.875rem',
      },
      medium: {
        padding: '1rem 1.25rem',
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
  logo: {
    large: {
      width: '10.25rem',
      height: '3.5rem',
      source: 'https://i.postimg.cc/8PjrndBz/LogoFull.png',
    },
    small: {
      width: '3.5rem',
      height: '3.5rem',
      source: 'https://i.postimg.cc/RC3HgQTV/Logo-Partial.png',
    },
  },
  pageWidth: '77.5rem',
};
