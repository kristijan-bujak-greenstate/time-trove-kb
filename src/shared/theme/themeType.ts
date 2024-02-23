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
      hue0: string;
      hue50: string;
      hue100: string;
    };
    success: {
      hue0: string;
      hue50: string;
      hue100: string;
    };
    warning: {
      hue0: string;
      hue50: string;
      hue100: string;
    };
    danger: {
      hue0: string;
      hue50: string;
      hue100: string;
    };
  };
};
