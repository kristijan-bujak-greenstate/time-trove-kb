import styled from 'styled-components';

import { IconSize } from '../../shared/theme/types';

export const StyledLoadingSpinner = styled.span<{
  $size: IconSize;
}>`
  width: ${({ theme, $size }) => theme.dimensions.icon[$size]};
  height: ${({ theme, $size }) => theme.dimensions.icon[$size]};
  border: 2px solid ${({ theme }) => theme.colors.neutrals.hue0};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: rotation 1s linear infinite;
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
