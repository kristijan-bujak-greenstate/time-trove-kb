import styled, { css } from 'styled-components';

import { Palette, RemSize, Colors, PxSize, BorderRadius } from '../../shared/theme/types';

export const StyledCard = styled.div<{
  $padding: RemSize;
  $backgroundColor: Colors<Palette>;
  $palette: Palette;
  $borderColor: Colors<Palette>;
  $borderWidth: PxSize;
  $borderRadius: BorderRadius;
  $hasHoverActiveStyles?: boolean;
}>`
  height: 100%;
  padding: ${({ $padding }) => $padding};
  border-radius: ${({ theme, $borderRadius }) => theme.borderRadius[$borderRadius]};
  border: ${({ $borderWidth }) => $borderWidth} solid
    ${({ theme, $borderColor, $palette }) => theme.colors[$palette][$borderColor]};
  background-color: ${({ theme, $backgroundColor, $palette }) => theme.colors[$palette][$backgroundColor]};
  cursor: ${({ $hasHoverActiveStyles }) => ($hasHoverActiveStyles ? 'pointer' : 'default')};
  ${({ $hasHoverActiveStyles }) =>
    $hasHoverActiveStyles &&
    css`
      transition: box-shadow 0.1s ease-out;
      &:hover {
        box-shadow: 0 0.25rem 1.5rem 0 #0000000f;
      }
      &:active {
        box-shadow: none;
      }
    `}
`;
