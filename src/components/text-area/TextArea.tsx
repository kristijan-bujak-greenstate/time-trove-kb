import { forwardRef } from 'react';

import { BorderRadius, RemSize } from '../../shared/theme/types';
import { ErrorWrapper, LabelWrapper } from '../input/input.styles';
import { Text } from '../text/Text';

import { StyledTextArea, StyledTextAreaContainer } from './textArea.styles';

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  height?: RemSize;
  borderRadius?: BorderRadius;
};

export const TextArea = forwardRef(
  (
    { label, error, height = '9.5rem', borderRadius = 'small', ...restProps }: TextAreaProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <StyledTextAreaContainer>
        <ErrorWrapper>
          {error && (
            <Text fontSize={'extraSmall'} palette={'error'} color={'hue100'} lineHeight={'extraSmall'}>
              {error}
            </Text>
          )}
        </ErrorWrapper>

        <StyledTextArea ref={ref} $hasError={!!error} $height={height} $borderRadius={borderRadius} {...restProps} />

        <LabelWrapper>
          <Text fontSize={'extraSmall'} lineHeight={'extraSmall'}>
            {label}
          </Text>
        </LabelWrapper>
      </StyledTextAreaContainer>
    );
  }
);
