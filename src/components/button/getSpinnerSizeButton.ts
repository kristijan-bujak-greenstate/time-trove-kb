import { ButtonSize, IconSize } from '../../shared/theme/types';

type LoadingSpinnerDetails = {
  spinnerIconSize?: IconSize;
};

export const getLoadingSpinnerSize = (size: ButtonSize): LoadingSpinnerDetails => {
  switch (size) {
    case 'small':
    case 'medium':
      return {
        spinnerIconSize: 'small',
      };

    case 'large':
    case 'extraLarge':
      return {
        spinnerIconSize: 'medium',
      };
    default:
      throw new Error(`Unsupported size: ${size}`);
  }
};
