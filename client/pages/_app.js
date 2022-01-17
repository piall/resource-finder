import '../styles/globals.scss';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#ffd803',
    // },
    secondary: {
      main: '#E33E7F',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

export default MyApp;
