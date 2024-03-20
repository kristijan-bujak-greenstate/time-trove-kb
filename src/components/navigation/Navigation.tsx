import { ComponentType } from 'react';

import { Colors, Palette, PxSize, RemSize } from '../../shared/theme/types';
import { Button } from '../button/Button';
import { IconButton } from '../icon-button/IconButton';
import { Text } from '../text/Text';

import {
  StyledButtonIconContainer,
  StyledIconButtonContainer,
  StyledNavigationContainer,
  StyledNavigationContentContainer,
  StyledTitleWrapper,
} from './navigation.styles';

export type NavigationProps = {
  title: string;
  icon: ComponentType;
  buttonText: string;
  onButtonClick: () => void;
  backgroundPalette?: Palette;
  backgroundColor?: Colors<Palette>;
  borderWidth?: PxSize;
  borderPalette?: Palette;
  borderColor?: Colors<Palette>;
  onIconButtonClick: () => void;
  padding?: RemSize;
};

export const Navigation = ({
  title,
  icon,
  onButtonClick,
  buttonText,
  backgroundPalette = 'neutrals',
  backgroundColor = 'hue0',
  borderWidth = '1px',
  borderPalette = 'primary',
  borderColor = 'hue100',
  padding = '1rem',
  onIconButtonClick,
}: NavigationProps) => {
  return (
    <StyledNavigationContainer
      $padding={padding}
      $backgroundPalette={backgroundPalette}
      $backgroundColor={backgroundColor}
      $borderPalette={borderPalette}
      $borderColor={borderColor}
      $borderWidth={borderWidth}
    >
      <StyledNavigationContentContainer>
        <StyledTitleWrapper>
          <Text fontWeight={'extraBold'} fontSize={'medium'} lineHeight={'medium'}>
            {title}
          </Text>
        </StyledTitleWrapper>
        <StyledButtonIconContainer>
          <Button palette={'primary'} size={'medium'} fill={false} onClick={onButtonClick}>
            {buttonText}
          </Button>
          <StyledIconButtonContainer>
            <IconButton palette={'error'} iconShape={'circle'} icon={icon} onClick={onIconButtonClick} />
          </StyledIconButtonContainer>
        </StyledButtonIconContainer>
      </StyledNavigationContentContainer>
    </StyledNavigationContainer>
  );
};
