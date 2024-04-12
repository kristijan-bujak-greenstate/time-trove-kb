import React, { ComponentType } from 'react';
import { GlobalStyles } from '../src/globalStyles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/shared/theme/theme';
import { LanguageProvider } from '../src/context/LanguageContext';

import { LanguageProvider } from '../src/context/LanguageContext';

export const decorators = [
  (Story: ComponentType) => (
    <ThemeProvider theme={defaultTheme}>
      <LanguageProvider>
        <GlobalStyles />
        <Story />
      </LanguageProvider>
    </ThemeProvider>
  ),
];
