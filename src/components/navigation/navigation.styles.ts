import styled from 'styled-components';

import { breakpoints } from '../../shared/breakpoints/breakpoints';
import { Colors, Palette, PxSize, RemSize } from '../../shared/theme/types';
import { StyledButton } from '../button/button.styles';

export const StyledNavigationContainer = styled.div<{
  $padding: RemSize;
  $borderWidth: PxSize;
  $borderPalette: Palette;
  $borderColor: Colors<Palette>;
  $backgroundPalette: Palette;
  $backgroundColor: Colors<Palette>;
}>`
  padding: ${({ $padding }) => $padding};
  display: flex;
  align-items: center;
  border-bottom: ${({ $borderWidth }) => $borderWidth} solid
    ${({ $borderPalette, $borderColor, theme }) => theme.colors[$borderPalette][$borderColor]};
  background-color: ${({ $backgroundPalette, $backgroundColor, theme }) =>
    theme.colors[$backgroundPalette][$backgroundColor]};
  position: relative;
`;

export const StyledButtonAndIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  order: 2;
  ${StyledButton} {
    flex-shrink: 0;
  }
  @media ${breakpoints.tablet} {
    order: 3;
  }
`;

export const StyledIconButtonContainer = styled.div`
  @media ${breakpoints.laptop} {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
  }
`;

export const StyledTitleWrapper = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-right: 0.5rem;
  order: 1;
`;

export const StyledSearchContainer = styled.div`
  width: 100%;
  margin-top: 0.75rem;
  order: 3;
  @media ${breakpoints.tablet} {
    width: 26.25rem;
    margin-top: 0;
    order: 2;
  }
`;

export const StyledTitleButtonContainer = styled.div`
  max-width: ${({ theme }) => theme.pageWidth};
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  flex-wrap: wrap;
`;
