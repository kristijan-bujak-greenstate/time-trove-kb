import { ComponentType } from 'react';

import { Button } from '../button/Button';
import { Chip } from '../chip/Chip';
import { CircleIcon } from '../circle-icon/CircleIcon';
import { Heading } from '../heading/Heading';
import { Text } from '../text/Text';

import {
  StyledDescriptionWrapper,
  StyledHeaderContainer,
  StyledHeadingWrapper,
  StyledIconHeadingContainer,
  StyledTaskDetailsContainer,
} from './taskDetails.styles';
import { ChipStatus } from '../../shared/enums/chipStatus';

export type TaskDetailsProps = {
  headerIcon: ComponentType;
  headerTitle: string;
  taskTitle: string;
  taskDescription: string;
  chipText: string;
  chipStatus: ChipStatus;
  buttonText: string;
  onClick: () => void;
  isButtonLoading: boolean;
};

export const TaskDetails = ({
  headerIcon,
  headerTitle,
  taskTitle,
  taskDescription,
  chipText,
  chipStatus,
  buttonText,
  onClick,
  isButtonLoading = false,
}: TaskDetailsProps) => {
  return (
    <StyledTaskDetailsContainer>
      <StyledHeaderContainer>
        <StyledIconHeadingContainer>
          <CircleIcon icon={headerIcon} />
          <StyledHeadingWrapper>
            <Heading>{headerTitle}</Heading>
          </StyledHeadingWrapper>
        </StyledIconHeadingContainer>
        <Chip size="large" status={chipStatus}>
          {chipText}
        </Chip>
      </StyledHeaderContainer>
      <Text lineHeight={'medium'} fontSize={'medium'} fontWeight={'extraBold'}>
        {taskTitle}
      </Text>
      <StyledDescriptionWrapper>
        <Text lineHeight={'small'} fontSize={'small'} palette={'neutrals'} color={'hue300'}>
          {taskDescription}
        </Text>
      </StyledDescriptionWrapper>

      <Button
        isLoading={isButtonLoading}
        onClick={onClick}
        type={'submit'}
        size={'extraLarge'}
        palette={'primary'}
        color={'hue100'}
      >
        {buttonText}
      </Button>
    </StyledTaskDetailsContainer>
  );
};
