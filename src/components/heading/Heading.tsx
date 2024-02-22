import { StyledHeading } from './heading.styles';

export type HeadingProps = {
  children: string;
};

export const Heading = ({ children }: HeadingProps) => {
  return <StyledHeading>{children}</StyledHeading>;
};
