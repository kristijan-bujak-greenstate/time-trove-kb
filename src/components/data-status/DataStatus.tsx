import { ComponentType } from 'react';

import { Button } from '..';
import { Text } from '..';
import { Palette } from '../../shared/theme/types';

import { ButtonWrapper, StyledDataStatusContainer } from './dataStatus.styles';

type DataStatusProps = {
  icon: ComponentType;
  onClick: () => void;
  title: string;
  description: string;
  buttonText: string;
  buttonPalette?: Palette;
};

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
      <ButtonWrapper>
        <Button palette={buttonPalette} fill={true} size={'extraLarge'} onClick={onClick}>
          {buttonText}
        </Button>
      </ButtonWrapper>
    </StyledDataStatusContainer>
  );
};
