import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';

// font family not loading?
const theme = createTheme({
  typography: {
    fontFamily:
      'Rubik',
  },
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#fff',
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <BrowserRouter> */}
      <CssBaseline />
      <App />
      {/* </BrowserRouter> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
