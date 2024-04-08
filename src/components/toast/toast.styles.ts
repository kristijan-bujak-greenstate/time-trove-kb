import styled from 'styled-components';

import { Palette } from '../../shared/theme/types';
import { StyledText } from '../text/text.styles';
import { StyledIcon } from '../themed-icon/themedIcon.styles';

export const StyledTostContainer = styled.div<{ $palette: Palette; $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.75rem;
  max-width: 26.25rem;
  width: calc(100% - 2rem);
  border: 1px solid ${({ theme }) => theme.colors.neutrals.hue100};
  border-bottom: 0;
  background-color: ${({ theme }) => theme.colors.neutrals.hue0};
  box-shadow:
    0px 1px 12px 0px #00000014,
    0px -3px 0px 0px ${({ theme, $palette }) => theme.colors[$palette].hue100} inset;
  transform: translateY(${({ $isOpen }) => ($isOpen ? '4.75rem' : 'calc(-100% - 1rem)')});
  transition: transform 0.6s cubic-bezier(0.11, 1.22, 0.53, 1.11);
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  gap: 1rem;

  ${StyledIcon} {
    flex-shrink: 0;
  }
  ${StyledText} {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

export const StyledCloseIconContainer = styled.div`
  margin-left: auto;
  cursor: pointer;
`;

export const StyledDescriptionContainer = styled.div`
  margin: 0.25rem 1.5rem 0 2.5rem;
  overflow: hidden;
`;
