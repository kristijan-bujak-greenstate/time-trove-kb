import 'styled-components';
import { Theme } from './themeType';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
