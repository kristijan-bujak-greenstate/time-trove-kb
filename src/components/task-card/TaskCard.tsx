import { DeleteIcon } from '../../icons/DeleteIcon';
import { EditIcon } from '../../icons/EditIcon';
import { Card } from '../card/Card';
import { Chip } from '../chip/Chip';
import { IconButton } from '../icon-button/IconButton';
import { Text } from '../text/Text';

import { PriorityLevel } from './enum';
import { getChipStatus } from './getChipStatus';
import {
  StyledFooterContainer,
  StyledHeaderContainer,
  StyledIconButtonsContainer,
  StyledPriorityContainer,
} from './taskCard.styles';

type TaskCardProps = {
  title: string;
  isDone: boolean;
  description: string;
  priority: PriorityLevel;
  chipText: string;
  priorityTitle: string;
  priorityText: string;
  onEditClick: () => void;
  onDeleteClick: () => void;
};

export const TaskCard = ({
  title,
  isDone,
  description,
  priority,
  priorityText,
  chipText,
  priorityTitle,
  onEditClick,
  onDeleteClick,
}: TaskCardProps) => {
  return (
    <Card hasHoverActiveStyles={true}>
      <StyledHeaderContainer>
        <Text fontWeight={'extraBold'}>{title}</Text>
        <Chip status={isDone ? 'success' : 'warning'}>{chipText}</Chip>
      </StyledHeaderContainer>
      <Text fontSize={'small'} lineHeight={'small'} palette={'neutrals'} color={'hue300'}>
        {description}
      </Text>
      <StyledFooterContainer>
        <StyledPriorityContainer>
          <Text fontWeight={'extraBold'} fontSize={'small'} lineHeight={'small'}>
            {priorityTitle}
          </Text>
          <Chip size={'small'} status={getChipStatus(priority)}>
            {priorityText}
          </Chip>
        </StyledPriorityContainer>
        <StyledIconButtonsContainer>
          <IconButton icon={EditIcon} onClick={onEditClick} />
          <IconButton icon={DeleteIcon} onClick={onDeleteClick} palette={'error'} />
        </StyledIconButtonsContainer>
      </StyledFooterContainer>
    </Card>
  );
};
