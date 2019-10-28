// import { createMuiTheme, Theme } from '@material-ui/core/styles';
// import { teal } from '@material-ui/core/colors';

// const theme: Theme = createMuiTheme({
//   status: {
//     danger: teal[400],
//   },
//   pallete: {
//     primary: {
//       // 緑色
//       main: "#8BC34A",
//       dark: "#689F38",
//       light: "#DCEDC8"
//     },
//   }
// });

// export default theme;

import { createMuiTheme } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      // 緑色
      main: '#8BC34A',
      dark: '#689F38',
      light: '#DCEDC8',
    },
    secondary: {
      // オレンジ
      main: '#FF5722',
    },
    text: {
      // ちょっと薄い黒
      primary: '#ffffff',
      secondary: '#757575',
    },
    // status: {
    //   danger: teal[400],
    // },
  },
});

type Ok = typeof theme;

export default theme;
