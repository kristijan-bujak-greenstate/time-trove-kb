import { ComponentType } from 'react';

import { Button } from '../button/Button';
import { Card } from '../card/Card';
import { CircleIcon } from '../circle-icon/CircleIcon';
import { Heading } from '../heading/Heading';
import { Input, InputProps } from '../input/Input';
import { Logo } from '../logo/Logo';
import { Text } from '../text/Text';

import { TextButton } from './components/text-button/TextButton';
import {
  StyledForm,
  StyledBottomTextContainer,
  StyledPublicForm,
  StyledHeadingWrapper,
  StyledButtonWrapper,
  StyledInputWrapper,
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
}: PublicFormProps) => {
  return (
    <StyledPublicForm>
      <Logo />
      <Card padding="2.5rem" borderRadius="large">
        <CircleIcon icon={icon} />
        <StyledHeadingWrapper>
          <Heading size={'large'}>{title}</Heading>
        </StyledHeadingWrapper>
        <Text fontSize={'small'} lineHeight={'small'} palette={'neutrals'} color={'hue200'}>
          {description}
        </Text>
        <StyledForm onSubmit={onSubmit}>
          <StyledInputWrapper>
            <Input {...firstInputProps} />
            <Input {...secondInputProps} />
          </StyledInputWrapper>
          <StyledButtonWrapper>
            <Button type="submit" size={'extraLarge'} palette={'primary'} color={'hue100'} fill={true}>
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
