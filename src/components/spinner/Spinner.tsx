import { IconSize, Palette } from '../../shared/theme/types';

import { StyledLoadingSpinner } from './spinner.styles';

type LoadingSpinnerProps = {
  size?: IconSize;
  palette?: Palette;
};

export const Spinner = ({ size = 'medium', palette = 'primary' }: LoadingSpinnerProps) => {
  return <StyledLoadingSpinner $size={size} $palette={palette} />;
};
