import { useEffect } from 'react';

import { RemoveIcon } from '../../icons/RemoveIcon';
import { Text } from '../text/Text';
import { ThemedIcon } from '../themed-icon/ThemedIcon';

import { getToastIcon } from './getToastIcon';
import {
  StyledDescriptionContainer,
  StyledHeaderContainer,
  StyledCloseIconContainer,
  StyledTostContainer,
} from './toast.styles';

export type ToastProps = {
  status: 'warning' | 'success' | 'error';
  isOpen: boolean;
  onCloseClick: () => void;
  title: string;
  description: string;
};

export const Toast = ({ status, isOpen, title, description, onCloseClick }: ToastProps) => {
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        onCloseClick();
      }, 4000);
    }
  }, [isOpen, onCloseClick]);

  return (
    <StyledTostContainer $palette={status} $isOpen={isOpen}>
      <StyledHeaderContainer>
        <ThemedIcon size={'medium'} palette={status} color={'hue100'} icon={getToastIcon(status)} />
        <Text fontWeight={'extraBold'} fontSize={'medium'} lineHeight={'medium'} palette={status} color={'hue100'}>
          {title}
        </Text>
        <StyledCloseIconContainer onClick={onCloseClick}>
          <ThemedIcon size={'medium'} icon={RemoveIcon} palette={'neutrals'} color={'hue200'} />
        </StyledCloseIconContainer>
      </StyledHeaderContainer>
      <StyledDescriptionContainer>
        <Text fontSize={'small'} lineHeight={'small'} palette={'neutrals'} color={'hue200'}>
          {description}
        </Text>
      </StyledDescriptionContainer>
    </StyledTostContainer>
  );
};
