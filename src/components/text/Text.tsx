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
  noWrap?: boolean;
};

export const Text = ({
  fontSize = 'sm',
  lineHeight = 'sm',
  fontWeight = 'regular',
  fontFamily = 'inter',
  color = 'grey',
  children,
  noWrap = false,
}: TextProps) => {
  return (
    <StyledText
      $fontSize={fontSize}
      $lineHeight={lineHeight}
      $fontWeight={fontWeight}
      $fontFamily={fontFamily}
      $color={color}
      $noWrap={noWrap}
    >
      {children}
    </StyledText>
  );
};
