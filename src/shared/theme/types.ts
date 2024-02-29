export type RemSize =
  | `${number}rem`
  | `${number}rem ${number}rem`
  | `${number}rem ${number}rem ${number}rem`
  | `${number}rem ${number}rem ${number}rem ${number}rem`;

export type TypographyFontSize = keyof Theme['typography']['fontSize'];
export type TypographyFontFamily = keyof Theme['typography']['fontFamily'];
export type TypographyFontWeight = keyof Theme['typography']['fontWeight'];
export type TypographyLineHeight = keyof Theme['typography']['lineHeight'];
export type Palette = keyof Theme['colors'];
export type Colors<T extends Palette> = keyof Theme['colors'][T];
export type ButtonSize = keyof Theme['dimensions']['button'];
export type IconSize = keyof Theme['dimensions']['icon'];
export type ChipSize = keyof Theme['dimensions']['chip'];

export type Theme = {
  typography: {
    fontFamily: {
      montserrat: string;
      inter: string;
    };
    fontSize: {
      extraLarge: string;
      small: string;
      medium: string;
      large: string;
      extraSmall: string;
    };
    fontWeight: {
      extraBold: string;
      bold: string;
      semiBold: string;
      regular: string;
    };
    lineHeight: {
      extraSmall: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
      maxLarge: string;
    };
  };
  colors: {
    neutrals: {
      hue400: string;
      hue300: string;
      hue200: string;
      hue100: string;
      hue50: string;
      hue0: string;
    };
    primary: {
      hue50: string;
      hue100: string;
      hue200: string;
    };
    success: {
      hue25: string;
      hue50: string;
      hue100: string;
      hue200: string;
    };
    warning: {
      hue25: string;
      hue50: string;
      hue100: string;
      hue200: string;
    };
    error: {
      hue0: string;
      hue25: string;
      hue50: string;
      hue75: string;
      hue100: string;
      hue200: string;
    };
  };
  dimensions: {
    button: {
      small: {
        padding: RemSize;
        borderRadius: RemSize;
      };
      medium: {
        padding: RemSize;
        borderRadius: RemSize;
      };
      large: {
        padding: RemSize;
        borderRadius: RemSize;
      };
      extraLarge: {
        padding: RemSize;
        borderRadius: RemSize;
      };
    };
    icon: {
      small: RemSize;
      medium: RemSize;
      large: RemSize;
    };
    chip: {
      large: {
        padding: RemSize;
        borderRadius: RemSize;
      };
      small: {
        padding: RemSize;
        borderRadius: RemSize;
      };
    };
  };
};
