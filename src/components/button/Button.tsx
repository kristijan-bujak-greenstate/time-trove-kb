import { memo } from 'react';

import { Palette, ButtonSize } from '../../shared/theme/types';
import { Spinner } from '../spinner/Spinner';
import { Text } from '../text/Text';

import { StyledSpinnerWrapper } from './button.styles';
import { StyledButton } from './button.styles';
import { getFontDetails } from './getFontDetailsButton';
import { getLoadingSpinnerSize } from './getSpinnerSizeButton';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  isLoading?: boolean;
  size?: ButtonSize;
  palette?: Palette;
  fill?: boolean;
};

export const Button = memo(
  ({
    children,
    fill = true,
    size = 'large',
    palette = 'success',
    isLoading = false,
    disabled,
    ...restProps
  }: ButtonProps) => {
    const { fontSize, lineHeight } = getFontDetails(size);
    const { spinnerIconSize } = getLoadingSpinnerSize(size);

    return (
      <StyledButton
        $isLoading={isLoading}
        disabled={disabled}
        $size={size}
        $fill={fill}
        $palette={palette}
        {...restProps}
      >
        <StyledSpinnerWrapper $isLoading={isLoading}>
          <Spinner size={spinnerIconSize} />
        </StyledSpinnerWrapper>
        <Text
          fontSize={fontSize}
          fontWeight={'extraBold'}
          lineHeight={lineHeight}
          fontFamily={'inter'}
          palette={'neutrals'}
          color={disabled ? 'hue100' : palette === 'neutrals' ? 'hue400' : 'hue0'}
        >
          {children}
        </Text>
      </StyledButton>
    );
  }
);
