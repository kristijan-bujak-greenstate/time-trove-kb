import { forwardRef } from 'react';

import { BorderRadius, InputSize } from '../../shared/theme/types';
import { Text } from '../text/Text';

import { ErrorWrapper, LabelWrapper, StyledInputContainer, StyledInput, StyledIconContainer } from './input.styles';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  label?: string;
  error?: string;
  borderRadius?: BorderRadius;
  renderIcon?: JSX.Element;
  size?: InputSize;
};

export const Input = forwardRef(
  (
    { label, error, borderRadius = 'small', size = 'medium', renderIcon, ...restProps }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <StyledInputContainer>
        {renderIcon && <StyledIconContainer> {renderIcon}</StyledIconContainer>}

        {label && (
          <ErrorWrapper>
            {error && (
              <Text
                fontSize={'extraSmall'}
                palette={'error'}
                color={'hue100'}
                fontFamily={'montserrat'}
                lineHeight={'extraSmall'}
              >
                {error}
              </Text>
            )}
          </ErrorWrapper>
        )}

        <StyledInput
          ref={ref}
          $hasError={!!error}
          $borderRadius={borderRadius}
          $size={size}
          $hasIcon={!!renderIcon}
          {...restProps}
        />

        {label && (
          <LabelWrapper>
            <Text fontSize={'extraSmall'} lineHeight={'extraSmall'}>
              {label}
            </Text>
          </LabelWrapper>
        )}
      </StyledInputContainer>
    );
  }
);
