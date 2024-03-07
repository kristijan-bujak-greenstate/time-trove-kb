import { AlertIcon } from '../../icons/AlertIcon';
import { SuccessCheckIcon } from '../../icons/SuccessCheckIcon';
import { Xicon } from '../../icons/XIcon';

import { DialogProps } from './types';

export const getDialogIcon = (status: DialogProps['status']): React.ComponentType => {
  switch (status) {
    case 'warning':
      return AlertIcon;
    case 'success':
      return SuccessCheckIcon;
    case 'error':
      return Xicon;
    default:
      throw new Error(`Unsupported status: ${status}`);
  }
};
