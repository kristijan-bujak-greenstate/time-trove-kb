import { ComponentType } from 'react';

import { Button } from '../button/Button';
import { Card } from '../card/Card';
import { Heading } from '../heading/Heading';
import { Input, InputProps } from '../input/Input';
import { Logo } from '../logo/Logo';
import { Text } from '../text/Text';

import { CircleIcon } from './components/circle-icon/CircleIcon';
import {
  StyledForm,
  StyledBottomTextContainer,
  StyledLinkContainer,
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
  bottomDescriptionText: string;
  bottomTitleText: string;
  firstInputProps: InputProps;
  secondInputProps: InputProps;
  onSubmit: () => void;
};

export const PublicForm = ({
  icon,
  title,
  description,
  buttonText,
  bottomDescriptionText,
  bottomTitleText,
  firstInputProps,
  secondInputProps,
  onSubmit,
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
          {bottomDescriptionText}
        </Text>
        <StyledLinkContainer>
          <Text fontSize={'small'} lineHeight={'small'} fontWeight={'extraBold'} palette={'primary'} color={'hue100'}>
            {bottomTitleText}
          </Text>
        </StyledLinkContainer>
      </StyledBottomTextContainer>
    </StyledPublicForm>
  );
};
