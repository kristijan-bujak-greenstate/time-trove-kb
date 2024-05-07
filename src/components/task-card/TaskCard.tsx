import { DeleteIcon } from '../../icons/DeleteIcon';
import { EditIcon } from '../../icons/EditIcon';
import { ChipStatus } from '../../shared/enums/chipStatus';
import { Card } from '../card/Card';
import { Chip } from '../chip/Chip';
import { IconButton } from '../icon-button/IconButton';
import { Text } from '../text/Text';

import { PriorityLevel } from './enum';
import { getChipStatus } from './getChipStatus';
import {
  StyledDescriptionContainer,
  StyledFooterContainer,
  StyledHeaderContainer,
  StyledIconButtonsContainer,
  StyledMainContainer,
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
  onClick: () => void;
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
  onClick,
}: TaskCardProps) => {
  const handleEditButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onEditClick();
  };

  const handleDeleteButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onDeleteClick();
  };

  return (
    <Card hasHoverActiveStyles={true} onClick={onClick}>
      <StyledMainContainer>
        <div>
          <StyledHeaderContainer>
            <Text fontWeight={'extraBold'}>{title}</Text>
            <Chip status={isDone ? ChipStatus.SUCCESS : ChipStatus.WARNING}>{chipText}</Chip>
          </StyledHeaderContainer>
          <StyledDescriptionContainer>
            <Text fontSize={'small'} lineHeight={'small'} palette={'neutrals'} color={'hue300'}>
              {description}
            </Text>
          </StyledDescriptionContainer>
        </div>
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
            <IconButton icon={EditIcon} onClick={handleEditButtonClick} />
            <IconButton icon={DeleteIcon} onClick={handleDeleteButtonClick} palette={'error'} />
          </StyledIconButtonsContainer>
        </StyledFooterContainer>
      </StyledMainContainer>
    </Card>
  );
};
