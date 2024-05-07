import { Outlet } from 'react-router-dom';

import { PageShell } from '../../components/page-shell/PageShell';

import { LayoutNavigation } from './components/LayoutNavigation';
import { StyledPageShellWrapper } from './protectedLayout.styles';

export const ProtectedLayout = () => {
  return (
    <>
      <LayoutNavigation />

      <StyledPageShellWrapper>
        <PageShell>
          <Outlet />
        </PageShell>
      </StyledPageShellWrapper>
    </>
  );
};
