import styled from 'styled-components';

import { DialogProps } from './types';

export const StyledAlertIcon = styled.div<{ $status: DialogProps['status'] }>`
  padding: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  border-radius: 50%;
  background-color: ${({ theme, $status }) => theme.colors[$status].hue100};
  width: fit-content;
`;

export const StyledButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  @media (max-width: 34.5rem) {
    flex-direction: column-reverse;
  }
`;

export const StyledIconTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTextContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledButtonWrapper = styled.div<{ $show?: boolean }>`
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  width: 100%;
`;
