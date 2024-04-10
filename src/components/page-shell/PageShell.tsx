import { ReactNode } from 'react';

import { StyledPageShell } from './pageShell.styles';

type PageShellProps = {
  children: ReactNode;
};

export const PageShell = ({ children }: PageShellProps) => {
  return <StyledPageShell>{children}</StyledPageShell>;
};
