import { useCallback, useEffect, useState } from 'react';

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
  removeFromQueue: () => void;
  title: string;
  description: string;
};

export const Toast = ({ status, title, description, removeFromQueue }: ToastProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeToast = useCallback(() => {
    setIsOpen(false);
    setTimeout(removeFromQueue, 600);
  }, [removeFromQueue]);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 25);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        closeToast();
      }, 4000);
    }
  }, [isOpen, closeToast]);

  return (
    <StyledTostContainer $palette={status} $isOpen={isOpen}>
      <StyledHeaderContainer>
        <ThemedIcon size={'medium'} palette={status} color={'hue100'} icon={getToastIcon(status)} />
        <Text fontWeight={'extraBold'} fontSize={'medium'} lineHeight={'medium'} palette={status} color={'hue100'}>
          {title}
        </Text>
        <StyledCloseIconContainer onClick={closeToast}>
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
