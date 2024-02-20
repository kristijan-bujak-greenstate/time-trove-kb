import styled from 'styled-components';

import {
  TypographyFontSize,
  TypographyFontWeight,
  TypographyLineHeight,
  TypographyFontFamily,
  Color,
} from '../../shared/theme/theme';

export const StyledText = styled.p<{
  $fontSize: TypographyFontSize;
  $fontWeight: TypographyFontWeight;
  $lineHeight: TypographyLineHeight;
  $fontFamily: TypographyFontFamily;
  $color: Color;
  $noWrap?: boolean;
}>`
  font-size: ${({ theme, $fontSize }) => theme.typography.fontSize[$fontSize]};
  font-weight: ${({ theme, $fontWeight }) => theme.typography.fontWeight[$fontWeight]};
  line-height: ${({ theme, $lineHeight }) => theme.typography.lineHeight[$lineHeight]};
  font-family: ${({ theme, $fontFamily }) => theme.typography.fontFamily[$fontFamily]};
  color: ${({ theme, $color }) => theme.colors[$color]};
  white-space: ${({ $noWrap }) => ($noWrap ? 'nowrap' : 'wrap')};
`;
