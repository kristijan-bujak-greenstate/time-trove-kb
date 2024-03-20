import styled from 'styled-components';

import { HeadingProps } from './Heading';

export const StyledHeading = styled.h1<{ $size?: HeadingProps['size'] }>`
  font-size: ${({ theme, $size }) =>
    $size === 'large' ? theme.typography.fontSize.large : theme.typography.fontSize.extraMedium};
  font-weight: ${({ theme }) => theme.typography.fontWeight.extraBold};
  line-height: ${({ theme, $size }) =>
    $size === 'large' ? theme.typography.lineHeight.larger : theme.typography.lineHeight.large};
  color: ${({ theme }) => theme.colors.neutrals.hue400};
`;
