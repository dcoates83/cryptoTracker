import React from 'react';
import { makeStyles } from '@material-ui/core';
import Logo from './Logo';
import Menu from './Menu';
import Suggestions from './Suggestions';

const useStyles = makeStyles({
  navBar: {
    backgroundColor: '#F2F4FA',
    width: '35%',
    padding: '2rem',
    display: 'grid',
    gridAutoFlow: 'row',
    justifyContent: 'space-evenly',
    placeItems: 'center',
    textAlign: 'center',
  },
});
// eslint-disable-next-line @typescript-eslint/no-empty-interface

const NavBar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.navBar}>
      <Logo />
      <Menu />
      <Suggestions />
    </div>
  );
};

export default NavBar;
