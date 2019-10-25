import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';

const theme: Theme = createMuiTheme({
  status: {
    danger: teal[400],
  },
});

export default theme;
