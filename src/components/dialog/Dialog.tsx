import { Button } from '../button/Button';
import { Modal } from '../modal/Modal';
import { Text } from '../text/Text';
import { ThemedIcon } from '../themed-icon/ThemedIcon';

import { StyledButtonWrapper, StyledIconTextContainer, StyledTextContainer } from './dialog.styles';
import { StyledAlertIcon, StyledButtonContainer } from './dialog.styles';
import { getDialogIcon } from './getDialogIcon';
import { DialogProps } from './types';

export const Dialog = (props: DialogProps) => {
  const {
    isOpen = false,
    title,
    description,
    onOverlayClick,
    onPrimaryButtonClick,
    status,
    showSecondaryButton = true,
    primaryButtonText = 'Confirm',
  } = props;

  let onSecondaryButtonClick;
  let secondaryButtonText;

  if ('onSecondaryButtonClick' in props && 'secondaryButtonText' in props) {
    onSecondaryButtonClick = props.onSecondaryButtonClick;
    secondaryButtonText = props.secondaryButtonText;
  }
  return (
    <Modal maxWidth={'32.5rem'} isOpen={isOpen} onOverlayClick={onOverlayClick}>
      <StyledIconTextContainer>
        <StyledAlertIcon $status={status}>
          <ThemedIcon size={'large'} icon={getDialogIcon(status)} />
        </StyledAlertIcon>
        <StyledTextContainer>
          <Text fontWeight={'extraBold'} fontSize={'extraMedium'} lineHeight={'large'}>
            {title}
          </Text>
          <Text fontWeight={'bold'} fontSize={'medium'} lineHeight={'medium'} palette={'neutrals'} color={'hue200'}>
            {description}
          </Text>
        </StyledTextContainer>
      </StyledIconTextContainer>
      <StyledButtonContainer>
        <StyledButtonWrapper $show={showSecondaryButton}>
          <Button onClick={onSecondaryButtonClick} size={'extraLarge'} palette={'neutrals'} color={'hue0'}>
            {secondaryButtonText as string}
          </Button>
        </StyledButtonWrapper>
        <StyledButtonWrapper $show={true}>
          <Button onClick={onPrimaryButtonClick} size={'extraLarge'} palette={status} color={'hue100'}>
            {primaryButtonText}
          </Button>
        </StyledButtonWrapper>
      </StyledButtonContainer>
    </Modal>
  );
};
