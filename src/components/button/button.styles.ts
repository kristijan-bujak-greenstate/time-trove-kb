import styled from 'styled-components';

import { ButtonSize, Palette } from '../../shared/theme/types';
import { StyledText } from '../text/text.styles';

export const StyledButton = styled.button<{
  $size: ButtonSize;
  $fill?: boolean;
  $palette: Palette;
  $isLoading: boolean;
}>`
  padding: ${({ theme, $size }) => theme.dimensions.button[$size].padding};
  border-radius: ${({ theme, $size }) => theme.dimensions.button[$size].borderRadius};
  background-color: ${({ theme, $palette }) =>
    $palette === 'neutrals' ? theme.colors[$palette].hue0 : theme.colors[$palette].hue100};
  width: ${({ $fill }) => ($fill ? '100%' : 'fit-content')};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  border: ${({ theme, $palette }) =>
    `1px solid ${$palette === 'neutrals' ? theme.colors.neutrals.hue100 : 'transparent'}`};

  &:hover {
    background-color: ${({ theme, $palette }) =>
      $palette === 'neutrals' ? theme.colors[$palette].hue50 : theme.colors[$palette].hue50};
  }

  &:active {
    background-color: ${({ theme, $palette }) =>
      $palette === 'neutrals' ? theme.colors[$palette].hue0 : theme.colors[$palette].hue200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutrals.hue50};
    border: none;
    cursor: default;
  }
  ${StyledText} {
    visibility: ${({ $isLoading }) => ($isLoading ? 'hidden' : 'visible')};
  }
`;

export const StyledSpinnerWrapper = styled.div<{ $isLoading: boolean }>`
  visibility: ${({ $isLoading }) => ($isLoading ? 'visible' : 'hidden')};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
