import styled from 'styled-components';

import { PxSize, RemSize } from '../../shared/theme/types';
export const StyledRadioButton = styled.button<{
  $size: RemSize;
  $border: PxSize;
  $isSelected: boolean;
  $hasError: boolean;
}>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border: ${({ $isSelected, theme, $hasError }) =>
    $isSelected && !$hasError
      ? `6px solid ${theme.colors.primary.hue100}`
      : `1px solid ${$hasError ? theme.colors.error.hue100 : theme.colors.neutrals.hue100}`};

  border-radius: 50%;
  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutrals.hue50};
    border: ${({ theme }) => `1px solid ${theme.colors.neutrals.hue100}`};
  }
`;
