import styled from 'styled-components';

import {
  TypographyFontWeight,
  TypographyFontFamily,
  Color,
  TypographyFontSize,
  TypographyLineHeight,
} from '../../shared/theme/theme';

export const StyledHeading = styled.h1<{
  $fontSize: TypographyFontSize;
  $fontWeight: TypographyFontWeight;
  $fontFamily: TypographyFontFamily;
  $lineHeight: TypographyLineHeight;
  $color: Color;
}>`
  font-size: ${({ theme, $fontSize }) => theme.typography.fontSize[$fontSize]};
  font-weight: ${({ theme, $fontWeight }) => theme.typography.fontWeight[$fontWeight]};
  font-family: ${({ theme, $fontFamily }) => theme.typography.fontFamily[$fontFamily]};
  line-height: ${({ theme, $lineHeight }) => theme.typography.lineHeight[$lineHeight]};
  color: ${({ theme, $color }) => theme.colors[$color]};
`;
