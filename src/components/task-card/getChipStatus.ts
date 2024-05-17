import { ChipStatus } from '../../shared/enums/chipStatus';
import { PriorityLevel } from '../../shared/enums/priorityLevel';

export const getChipStatus = (priority: PriorityLevel): ChipStatus => {
  switch (priority) {
    case 'High':
      return ChipStatus.ERROR;
    case 'Medium':
      return ChipStatus.WARNING;
    case 'Low':
      return ChipStatus.SUCCESS;
    default:
      throw new Error(`Invalid priority level: ${priority}`);
  }
};
