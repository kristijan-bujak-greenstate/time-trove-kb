import { Outlet } from 'react-router-dom';

import { ControlledForm } from '../../components/controlled-form/ControlledForm';
import { PageShell } from '../../components/page-shell/PageShell';
import { taskSchema } from '../../shared/schemas/taskSchema';

import { LayoutNavigation } from './components/LayoutNavigation';
import { StyledPageShellWrapper } from './protectedLayout.styles';

export const ProtectedLayout = () => {
  const defaultValues = {
    title: '',
    description: '',
    selectedOption: undefined,
  };

  return (
    <ControlledForm schema={taskSchema} defaultValues={defaultValues}>
      <LayoutNavigation />
      <StyledPageShellWrapper>
        <PageShell>
          <Outlet />
        </PageShell>
      </StyledPageShellWrapper>
    </ControlledForm>
  );
};
