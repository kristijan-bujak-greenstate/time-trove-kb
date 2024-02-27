import { IconSize } from '../../shared/theme/types';

import { StyledLoadingSpinner } from './spinner.styles';

type LoadingSpinnerProps = {
  size?: IconSize;
};

export const Spinner = ({ size = 'medium' }: LoadingSpinnerProps) => {
  return <StyledLoadingSpinner $size={size}></StyledLoadingSpinner>;
};
