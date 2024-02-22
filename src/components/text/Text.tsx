import {
  TypographyFontSize,
  TypographyLineHeight,
  TypographyFontWeight,
  TypographyFontFamily,
  Color,
} from '../../shared/theme/theme';

import { StyledText } from './text.styles';

export type TextProps = {
  fontSize?: TypographyFontSize;
  lineHeight?: TypographyLineHeight;
  fontWeight?: TypographyFontWeight;
  fontFamily?: TypographyFontFamily;
  color?: Color;
  children: string;
};

export const Text = ({
  fontSize = 'small',
  lineHeight = 'small',
  fontWeight = 'regular',
  fontFamily = 'inter',
  color = 'grey',
  children,
}: TextProps) => {
  return (
    <StyledText
      $fontSize={fontSize}
      $lineHeight={lineHeight}
      $fontWeight={fontWeight}
      $fontFamily={fontFamily}
      $color={color}
    >
      {children}
    </StyledText>
  );
};
