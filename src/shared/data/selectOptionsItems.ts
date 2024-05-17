import { OptionSelectPriority } from '../../components';
import { ChipStatus } from '../enums/chipStatus';
import { PriorityLevel } from '../enums/priorityLevel';

export const mockedSelectOptionsItems: OptionSelectPriority[] = [
  {
    id: '1',
    status: ChipStatus.SUCCESS,
    value: PriorityLevel.LOW,
  },
  {
    id: '2',
    status: ChipStatus.WARNING,
    value: PriorityLevel.MEDIUM,
  },
  {
    id: '3',
    status: ChipStatus.ERROR,
    value: PriorityLevel.HIGH,
  },
];

export const mockedSelectOptionsItemsForFiltering: OptionSelectPriority[] = [
  {
    id: '0',
    status: ChipStatus.PRIMARY,
    value: PriorityLevel.ALL_OPTIONS,
  },

  ...mockedSelectOptionsItems,
];
