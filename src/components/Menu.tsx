import React from 'react';
import { Button, IconButton, makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Login from '../pages/Login';

const useStyles = makeStyles({
  navButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  navButton: {
    margin: 2,
  },
  navButtonIcon: {
    marginLeft: 2,
  },
});
// little messy - any way to put variant etc.. into a class?
const Menu: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.navButtonContainer}>

      <Button className={classes.navButton} variant="contained" size="medium" color="primary">
        Home
        <HomeIcon className={classes.navButtonIcon} fontSize="small" />
      </Button>
      <Button className={classes.navButton} variant="contained" size="medium" color="primary">
        Trending
        <TrendingUpIcon className={classes.navButtonIcon} fontSize="small" />
      </Button>

      <br />
      <br />

      <div>
        <Button className={classes.navButton} variant="contained" size="medium" color="primary">
          Login
          <ExitToAppIcon className={classes.navButtonIcon} fontSize="small" />
        </Button>
        <Button className={classes.navButton} variant="contained" size="medium" color="primary">
          Register
          <AccountBoxIcon className={classes.navButtonIcon} fontSize="small" />
        </Button>
      </div>
    </div>
  );
};

export default Menu;
