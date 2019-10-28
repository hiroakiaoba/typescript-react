import { createMuiTheme } from '@material-ui/core';
import { teal, brown } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8BC34A',
      dark: '#689F38',
      light: '#DCEDC8',
    },
    secondary: {
      main: '#FF5722',
    },
    text: {
      primary: '#757575',
      secondary: '#ffffff',
    },
  },
  status: {
    danger: teal[400],
    info: brown[800],
  },
});

export default theme;
