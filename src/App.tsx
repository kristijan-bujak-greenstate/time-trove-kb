import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { LanguageProvider } from './context/LanguageContext';
import { GlobalStyles } from './globalStyles';
import { maintenanceRouter } from './router/MaintenanceRouter';
import { router } from './router/Router';
import { defaultTheme } from './shared/theme/theme';
import { useMaintenance } from './store/useMaintenance';

const queryClient = new QueryClient();

function App() {
  const { isMaintenance } = useMaintenance();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <LanguageProvider>
          <RouterProvider router={isMaintenance ? maintenanceRouter : router} />
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
