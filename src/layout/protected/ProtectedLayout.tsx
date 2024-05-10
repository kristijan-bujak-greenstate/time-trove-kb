import { Outlet } from 'react-router-dom';

import { PageShell } from '../../components/page-shell/PageShell';
import { PaginationProvider } from '../../context/PaginationContext';

import { LayoutNavigation } from './components/LayoutNavigation';
import { StyledPageShellWrapper } from './protectedLayout.styles';

export const ProtectedLayout = () => {
  return (
    <PaginationProvider>
      <LayoutNavigation />

      <StyledPageShellWrapper>
        <PageShell>
          <Outlet />
        </PageShell>
      </StyledPageShellWrapper>
    </PaginationProvider>
  );
};
