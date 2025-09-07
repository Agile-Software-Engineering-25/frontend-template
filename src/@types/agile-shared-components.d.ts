declare module '@agile-software/shared-components' {
  import { extendTheme } from '@mui/joy/styles';

  export type CustomTheme = ReturnType<typeof extendTheme>;

  export function createCustomTheme(config?: Partial<CustomTheme>): CustomTheme;
}
