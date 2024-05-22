import { forwardRef } from 'react';

import { BorderRadius, InputSize, RemSize } from '../../shared/theme/types';
import { ErrorWrapper, LabelWrapper, StyledIconContainer } from '../input/input.styles';
import { Text } from '../text/Text';

import { StyledTextArea, StyledTextAreaContainer } from './textArea.styles';

export type TextAreaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> & {
  label: string;
  error?: string;
  height?: RemSize;
  borderRadius?: BorderRadius;
  size?: InputSize;
  renderIcon?: JSX.Element;
};

export const TextArea = forwardRef(
  (
    {
      label,
      error,
      height = '9.5rem',
      borderRadius = 'small',
      size = 'medium',
      renderIcon,
      ...restProps
    }: TextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <StyledTextAreaContainer>
        {renderIcon && <StyledIconContainer> {renderIcon}</StyledIconContainer>}

        {label && (
          <ErrorWrapper>
            {error && (
              <Text fontSize={'extraSmall'} palette={'error'} color={'hue100'} lineHeight={'extraSmall'}>
                {error}
              </Text>
            )}
          </ErrorWrapper>
        )}

        <StyledTextArea
          ref={ref}
          $hasError={!!error}
          $height={height}
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
      </StyledTextAreaContainer>
    );
  }
);
