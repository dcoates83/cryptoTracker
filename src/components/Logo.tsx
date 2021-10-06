import React from 'react';
import {
  createTheme, makeStyles, responsiveFontSizes, ThemeProvider, Typography,
} from '@material-ui/core';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
  logoImage: {
    width: '10vw',
  },
});
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LogoType {

}

const Logo: React.FC<LogoType> = () => {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <img className={classes.logoImage} src="/images/crypto_logo.svg" alt="Logo" />
        {/* Better way for responsive text? */}
        <Typography variant="h4">CrypoCrunch</Typography>
      </ThemeProvider>
    </div>
  );
};

export default Logo;
