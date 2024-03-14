import { StyledHeading } from './heading.styles';

export type HeadingProps = {
  children: string;
  size?: 'regular' | 'large';
};

export const Heading = ({ children, size = 'regular' }: HeadingProps) => {
  return <StyledHeading $size={size}>{children}</StyledHeading>;
};
