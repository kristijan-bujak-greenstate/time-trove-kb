import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { LanguageProvider } from './context/LanguageContext';
import { ToastProvider } from './context/ToastContext';
import { GlobalStyles } from './globalStyles';
import { maintenanceRouter } from './router/MaintenanceRouter';
import { router } from './router/Router';
import { defaultTheme } from './shared/theme/theme';
import { useMaintenanceStore } from './store/useMaintenanceStore';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const { isMaintenance } = useMaintenanceStore();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <LanguageProvider>
          <ToastProvider>
            <RouterProvider router={isMaintenance ? maintenanceRouter : router} />
          </ToastProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
