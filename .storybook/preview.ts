import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { defaultTheme } from './theme';

/* snipped for brevity */

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: defaultTheme,
    },
    defaultTheme: 'default',
    Provider: ThemeProvider,
  }),
];
