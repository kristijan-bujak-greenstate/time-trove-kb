import { ChipStatus } from '../../shared/enums/chipStatus';

import { PriorityLevel } from './enum';

export const getChipStatus = (priority: PriorityLevel): ChipStatus => {
  switch (priority) {
    case 'High':
      return ChipStatus.SUCCESS;
    case 'Medium':
      return ChipStatus.WARNING;
    case 'Low':
      return ChipStatus.ERROR;
    default:
      throw new Error(`Invalid priority level: ${priority}`);
  }
};
