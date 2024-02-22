import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './globalStyles';
import { defaultTheme } from './shared/theme/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
