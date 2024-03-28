import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { LanguageProvider } from './context/LanguageContext';
import { GlobalStyles } from './globalStyles';
import { router } from './router/Router';
import { defaultTheme } from './shared/theme/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
