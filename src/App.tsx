import { ThemeProvider } from 'styled-components';

import { Heading } from './components/heading/Heading';
import { Text } from './components/text/Text';
import { globalStyles as GlobalStyles } from './globalStyles';
import { defaultTheme } from './shared/theme/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Text>Test text</Text>
        <Heading>Test heading</Heading>
      </ThemeProvider>
    </>
  );
}

export default App;
