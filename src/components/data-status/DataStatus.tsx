import { Button } from '..';
import { Text } from '..';

import { ButtonWrapper, StyledDataStatusContainer } from './dataStatus.styles';
import { DataStatusProps } from './types';

export const DataStatus = ({
  onClick,
  title,
  description,
  buttonText,
  icon: IconComponent,
  buttonPalette = 'primary',
}: DataStatusProps) => {
  return (
    <StyledDataStatusContainer>
      <IconComponent />
      <Text fontSize={'extraLarge'} fontWeight={'extraBold'} lineHeight={'maxLarge'}>
        {title}
      </Text>
      <Text lineHeight={'medium'} fontSize={'medium'} palette={'neutrals'} color={'hue300'}>
        {description}
      </Text>
      {buttonText && (
        <ButtonWrapper>
          <Button palette={buttonPalette} fill={true} size={'extraLarge'} onClick={onClick}>
            {buttonText}
          </Button>
        </ButtonWrapper>
      )}
    </StyledDataStatusContainer>
  );
};
