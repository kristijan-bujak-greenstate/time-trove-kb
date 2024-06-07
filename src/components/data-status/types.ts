import { ComponentType } from 'react';

import { Palette } from '../../shared/theme/types';

type DataStatusBaseProps = {
  icon?: ComponentType;
  title: string;
  description: string;
};

type DataStatusWithButtonProps = DataStatusBaseProps & {
  onClick: () => void;
  buttonText: string;
  buttonPalette?: Palette;
};

type DataStatusWithoutButtonProps = DataStatusBaseProps & {
  onClick?: never;
  buttonText?: never;
  buttonPalette?: never;
};

export type DataStatusProps = DataStatusWithButtonProps | DataStatusWithoutButtonProps;
