import { forwardRef } from 'react';

import { BorderRadius } from '../../shared/theme/types';
import { Text } from '../text/Text';

import { ErrorWrapper, LabelWrapper, StyledInputContainer, StyledInput } from './input.styles';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  borderRadius?: BorderRadius;
};

export const Input = forwardRef(
  ({ label, error, borderRadius = 'small', ...restProps }: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
      <StyledInputContainer>
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

        <StyledInput ref={ref} $hasError={!!error} $borderRadius={borderRadius} {...restProps} />

        <LabelWrapper>
          <Text fontSize={'extraSmall'} lineHeight={'extraSmall'}>
            {label}
          </Text>
        </LabelWrapper>
      </StyledInputContainer>
    );
  }
);
