import { OptionSelectPriority } from '../../components';
import { ChipStatus } from '../enums/chipStatus';

export const mockedSelectOptionsItems: OptionSelectPriority[] = [
  {
    id: '1',
    status: ChipStatus.SUCCESS,
    value: 'Low',
  },
  {
    id: '2',
    status: ChipStatus.WARNING,
    value: 'Medium',
  },
  {
    id: '3',
    status: ChipStatus.ERROR,
    value: 'High',
  },
];
