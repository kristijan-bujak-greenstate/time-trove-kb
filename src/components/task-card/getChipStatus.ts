import { ChipProps } from '../chip/Chip';

import { PriorityLevel } from './enum';

export const getChipStatus = (priority: PriorityLevel): ChipProps['status'] => {
  switch (priority) {
    case 'High':
      return 'success';
    case 'Medium':
      return 'warning';
    case 'Low':
      return 'error';
    default:
      throw new Error(`Invalid priority level: ${priority}`);
  }
};
