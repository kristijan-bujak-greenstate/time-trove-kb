import React, { ComponentType } from 'react';
import { GlobalStyles } from '../src/globalStyles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/shared/theme/theme';

export const decorators = [
  (Story: ComponentType) => (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
