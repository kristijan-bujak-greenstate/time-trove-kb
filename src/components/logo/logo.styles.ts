import styled from 'styled-components';

import { LogoSize } from '../../shared/theme/types';

export const StyledImageWrapper = styled.div<{ $size: LogoSize }>`
  width: ${({ theme, $size }) => theme.logo[$size].width};
  height: ${({ theme, $size }) => theme.logo[$size].height};
`;

export const StyledImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
