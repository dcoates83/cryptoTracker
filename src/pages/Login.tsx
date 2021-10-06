import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

});
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LoginType {

}

const Login: React.FC<LoginType> = () => {
  const classes = useStyles();
  return (
    <div>Login</div>
    // Do I need to create a theme provider for this
    // <Button variant="dashed" color="secondary" sx={{ m: 1 }}>
    //   Secondary
    // </Button>
  );
};

export default Login;
