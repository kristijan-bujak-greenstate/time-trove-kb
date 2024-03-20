import { ComponentType } from 'react';

import { ThemedIcon } from '../themed-icon/ThemedIcon';

import { StyledCircleIcon } from './circleIcon.styles';

export type CircleIconProps = {
  icon: ComponentType;
};

export const CircleIcon = ({ icon }: CircleIconProps) => {
  return (
    <StyledCircleIcon>
      <ThemedIcon icon={icon} palette={'neutrals'} color={'hue200'}></ThemedIcon>
    </StyledCircleIcon>
  );
};
