import {
  TypographyFontWeight,
  TypographyFontFamily,
  TypographyLineHeight,
  Color,
  TypographyFontSize,
} from '../../shared/theme/theme';

import { StyledHeading } from './heading.styles';

export type HeadingProps = {
  fontSize?: TypographyFontSize;
  lineHeight?: TypographyLineHeight;
  fontWeight?: TypographyFontWeight;
  fontFamily?: TypographyFontFamily;
  children: string;
  color?: Color;
};

export const Heading = ({
  fontSize = 'lg',
  lineHeight = 'lg',
  fontWeight = 'extraBold',
  fontFamily = 'inter',
  children,
  color = 'black',
}: HeadingProps) => {
  return (
    <StyledHeading
      $fontWeight={fontWeight}
      $fontSize={fontSize}
      $fontFamily={fontFamily}
      $lineHeight={lineHeight}
      $color={color}
    >
      {children}
    </StyledHeading>
  );
};
