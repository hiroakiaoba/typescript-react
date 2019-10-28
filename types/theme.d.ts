import { Theme } from '@material-ui/core/styles/createMuiTheme';
import "styled-components"

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: {
      danger: string,
      info: string
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    status?: {
      danger: string,
      info: string
    }
  }
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
