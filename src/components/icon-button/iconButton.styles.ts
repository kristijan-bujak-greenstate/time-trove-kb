import styled from 'styled-components';

import { Palette } from '../../shared/theme/types';
import { Colors } from '../../shared/theme/types';
import { StyledIcon } from '../themed-icon/themedIcon.styles';

import { IconButtonProps } from './IconButton';

export const StyledIconButton = styled.button<{
  $bgColor: Colors<Palette>;
  $color: Colors<Palette>;
  $bgColorHover: Colors<Palette>;
  $palette: Palette;
  $iconShape: IconButtonProps['iconShape'];
}>`
  background-color: ${({ theme, $bgColor, $palette }) => theme.colors[$palette][$bgColor]};
  padding: ${({ $iconShape }) => ($iconShape === 'square' ? '0.375rem' : '0.625rem')};
  border-radius: ${({ $iconShape }) => ($iconShape === 'square' ? '0.5rem' : '50%')};
  ${StyledIcon} {
    color: ${({ theme, $color, $palette }) => theme.colors[$palette][$color]};
  }
  &:hover {
    cursor: pointer;
    ${StyledIcon} {
      color: ${({ theme }) => theme.colors.neutrals.hue0};
    }
    background-color: ${({ theme, $bgColorHover, $palette }) => theme.colors[$palette][$bgColorHover]};
  }
  &:active {
    background-color: ${({ theme, $bgColor, $palette }) => theme.colors[$palette][$bgColor]};
    ${StyledIcon} {
      color: ${({ theme, $color, $palette }) => theme.colors[$palette][$color]};
    }
  }
`;
