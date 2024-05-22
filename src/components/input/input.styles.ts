import styled, { css } from 'styled-components';

import { BorderRadius, InputSize } from '../../shared/theme/types';
import { StyledText } from '../text/text.styles';

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
`;

export const LabelWrapper = styled.div`
  height: 1rem;
  margin-bottom: 0.25rem;
  margin-left: 0.5rem;
`;

export const ErrorWrapper = styled.div`
  height: 1rem;
  margin-top: 0.25rem;
  margin-left: 0.5rem;
`;

export const inputTextAreaStyles = css<{
  $hasError: boolean;
  $borderRadius: BorderRadius;
  $size: InputSize;
  $hasIcon: boolean;
}>`
  width: 100%;
  padding: ${({ theme, $size }) => theme.dimensions.input[$size].padding};
  padding-left: ${({ $hasIcon }) => $hasIcon && '3.25rem'};
  line-height: ${({ theme }) => theme.typography.lineHeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  outline: none;
  color: ${({ theme }) => theme.colors.neutrals.hue400};
  border-radius: ${({ theme, $borderRadius }) => theme.borderRadius[$borderRadius]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  border: 1px solid ${({ $hasError, theme }) => ($hasError ? theme.colors.error.hue100 : theme.colors.neutrals.hue100)};

  + ${LabelWrapper} {
    visibility: hidden;

    ${StyledText} {
      color: ${({ theme, $hasError }) => ($hasError ? theme.colors.error.hue100 : theme.colors.neutrals.hue200)};
    }
  }

  &::placeholder {
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.neutrals.hue100};
    background-color: ${({ theme }) => theme.colors.neutrals.hue50};

    &::placeholder {
      color: ${({ theme }) => theme.colors.neutrals.hue100};
    }
  }

  &:not(:placeholder-shown) + ${LabelWrapper} {
    visibility: ${({ $hasError }) => ($hasError ? 'hidden' : 'visible')};
  }

  &:focus {
    border-color: ${({ $hasError, theme }) => ($hasError ? theme.colors.error.hue100 : theme.colors.primary.hue100)};

    + ${LabelWrapper} {
      visibility: visible;
      ${StyledText} {
        color: ${({ theme, $hasError }) => ($hasError ? theme.colors.error.hue100 : theme.colors.primary.hue100)};
      }
    }
  }
`;

export const StyledInput = styled.input<{
  $hasError: boolean;
  $borderRadius: BorderRadius;
  $size: InputSize;
  $hasIcon: boolean;
}>`
  ${inputTextAreaStyles};
`;

export const StyledIconContainer = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;
