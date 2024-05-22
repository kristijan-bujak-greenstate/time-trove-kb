import styled from 'styled-components';

import { BorderRadius, InputSize, RemSize } from '../../shared/theme/types';
import { inputTextAreaStyles } from '../input/input.styles';

export const StyledTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const StyledTextArea = styled.textarea<{
  $hasError: boolean;
  $height: RemSize;
  $borderRadius: BorderRadius;
  $size: InputSize;
  $hasIcon: boolean;
}>`
  ${inputTextAreaStyles};
  resize: none;
  height: ${({ $height }) => $height};
`;
