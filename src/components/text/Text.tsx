import { useTheme } from 'styled-components';

import {
  TypographyFontSize,
  TypographyLineHeight,
  TypographyFontWeight,
  TypographyFontFamily,
  Palette,
  Colors,
} from '../../shared/theme/theme';

import { StyledText } from './text.styles';

export type TextProps<T extends Palette> = {
  fontSize?: TypographyFontSize;
  lineHeight?: TypographyLineHeight;
  fontWeight?: TypographyFontWeight;
  fontFamily?: TypographyFontFamily;
  palette?: T;
  color?: Colors<T>;
  children: string;
};

export const Text = <T extends Palette>({
  fontSize = 'small',
  lineHeight = 'small',
  fontWeight = 'regular',
  fontFamily = 'inter',
  palette,
  color,
  children,
}: TextProps<T>) => {
  const theme = useTheme();
  const textColor = palette && color ? (theme.colors[palette][color] as string) : theme.colors.neutrals.hue400;

  return (
    <StyledText
      $fontSize={fontSize}
      $lineHeight={lineHeight}
      $fontWeight={fontWeight}
      $fontFamily={fontFamily}
      $color={textColor}
    >
      {children}
    </StyledText>
  );
};
