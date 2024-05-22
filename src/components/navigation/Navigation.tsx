import { ComponentType } from 'react';

import { Input, ThemedIcon } from '..';
import { SearchIcon } from '../../icons/SearchIcon';
import { Colors, Palette, PxSize, RemSize } from '../../shared/theme/types';
import { Button } from '../button/Button';
import { IconButton } from '../icon-button/IconButton';
import { Text } from '../text/Text';

import {
  StyledButtonAndIconContainer,
  StyledIconButtonContainer,
  StyledNavigationContainer,
  StyledSearchContainer,
  StyledTitleButtonContainer,
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
  inputValue?: string;
  inputPlaceholder: string;
  handleOnChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  inputValue,
  inputPlaceholder,
  handleOnChangeInput,
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
      <StyledTitleButtonContainer>
        <StyledTitleWrapper>
          <Text fontWeight={'extraBold'} fontSize={'medium'} lineHeight={'medium'}>
            {title}
          </Text>
        </StyledTitleWrapper>

        <StyledSearchContainer>
          <Input
            renderIcon={<ThemedIcon size={'medium'} icon={SearchIcon} palette={'neutrals'} color={'hue900'} />}
            size={'small'}
            type="text"
            value={inputValue || ''}
            onChange={handleOnChangeInput}
            placeholder={inputPlaceholder}
          />
        </StyledSearchContainer>

        <StyledButtonAndIconContainer>
          <Button palette={'primary'} size={'medium'} fill={false} onClick={onButtonClick}>
            {buttonText}
          </Button>
          <StyledIconButtonContainer>
            <IconButton palette={'error'} iconShape={'circle'} icon={icon} onClick={onIconButtonClick} />
          </StyledIconButtonContainer>
        </StyledButtonAndIconContainer>
      </StyledTitleButtonContainer>
    </StyledNavigationContainer>
  );
};
