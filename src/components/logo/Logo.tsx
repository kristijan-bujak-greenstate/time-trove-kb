import { useTheme } from 'styled-components';

import { LogoSize } from '../../shared/theme/types';

import { StyledImage, StyledImageWrapper } from './logo.styles';

type LogoProps = {
  size?: LogoSize;
};

export const Logo = ({ size = 'large' }: LogoProps) => {
  const theme = useTheme();
  return (
    <StyledImageWrapper $size={size}>
      <StyledImage src={theme.logo[size].source} />
    </StyledImageWrapper>
  );
};
