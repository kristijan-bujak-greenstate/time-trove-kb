import { BorderRadius, Colors, Palette, PxSize, RemSize } from '../../shared/theme/types';

import { StyledCard } from './card.styles';

type CardProps = {
  children: React.ReactNode;
  backgroundColor?: Colors<Palette>;
  padding?: RemSize;
  borderColor?: Colors<Palette>;
  borderWidth?: PxSize;
  borderRadius?: BorderRadius;
  palette?: Palette;
  hasHoverActiveStyles?: boolean;
  onClick?: () => void;
};

export const Card = ({
  children,
  palette = 'neutrals',
  backgroundColor = 'hue0',
  borderColor = 'hue100',
  padding = '1rem',
  borderWidth = '1px',
  borderRadius = 'medium',
  hasHoverActiveStyles = false,
  onClick,
}: CardProps) => {
  return (
    <StyledCard
      $borderWidth={borderWidth}
      $backgroundColor={backgroundColor}
      $padding={padding}
      $palette={palette}
      $borderColor={borderColor}
      $borderRadius={borderRadius}
      $hasHoverActiveStyles={hasHoverActiveStyles}
      onClick={onClick}
    >
      {children}
    </StyledCard>
  );
};
