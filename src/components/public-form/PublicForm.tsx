import { ComponentType } from 'react';

import { Button } from '../button/Button';
import { Card } from '../card/Card';
import { CircleIcon } from '../circle-icon/CircleIcon';
import { Heading } from '../heading/Heading';
import { Input, InputProps } from '../input/Input';
import { Logo } from '../logo/Logo';
import { Text } from '../text/Text';
import { TextButton } from '../text-button/TextButton';

import {
  StyledForm,
  StyledBottomTextContainer,
  StyledPublicForm,
  StyledHeadingWrapper,
  StyledButtonWrapper,
  StyledInputWrapper,
  StyledDescriptionWrapper,
} from './publicForm.styles';

export type PublicFormProps = {
  icon: ComponentType;
  title: string;
  description: string;
  buttonText: string;
  footerDescriptionText: string;
  footerButtonText: string;
  firstInputProps: InputProps;
  secondInputProps: InputProps;
  onSubmit: () => void;
  onFooterButtonClick: () => void;
  isLoadingButton: boolean;
  isButtonDisabled?: boolean;
};

export const PublicForm = ({
  icon,
  title,
  description,
  buttonText,
  footerDescriptionText,
  footerButtonText,
  firstInputProps,
  secondInputProps,
  onSubmit,
  onFooterButtonClick,
  isLoadingButton,
  isButtonDisabled = false,
}: PublicFormProps) => {
  return (
    <StyledPublicForm>
      <Logo />
      <Card padding="2.5rem" borderRadius="large">
        <CircleIcon icon={icon} />
        <StyledHeadingWrapper>
          <Heading size={'large'}>{title}</Heading>
        </StyledHeadingWrapper>
        <StyledDescriptionWrapper>
          <Text fontSize={'small'} lineHeight={'small'} palette={'neutrals'} color={'hue200'}>
            {description}
          </Text>
        </StyledDescriptionWrapper>
        <StyledForm onSubmit={onSubmit}>
          <StyledInputWrapper>
            <Input {...firstInputProps} />
            <Input {...secondInputProps} />
          </StyledInputWrapper>
          <StyledButtonWrapper>
            <Button
              isLoading={isLoadingButton}
              disabled={isButtonDisabled}
              type="submit"
              size={'extraLarge'}
              palette={'primary'}
              color={'hue100'}
              fill={true}
            >
              {buttonText}
            </Button>
          </StyledButtonWrapper>
        </StyledForm>
      </Card>
      <StyledBottomTextContainer>
        <Text fontSize={'small'} lineHeight={'small'}>
          {footerDescriptionText}
        </Text>
        &nbsp;
        <TextButton onClick={onFooterButtonClick}>{footerButtonText}</TextButton>
      </StyledBottomTextContainer>
    </StyledPublicForm>
  );
};
