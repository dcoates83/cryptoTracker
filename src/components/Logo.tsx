import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

});
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LogoType {

}

const Logo: React.FC<LogoType> = () => {
  const classes = useStyles();
  return <div>Logo</div>;
};

export default Logo;
