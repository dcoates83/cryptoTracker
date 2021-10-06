import { makeStyles } from '@material-ui/core';
import React from 'react';
import NavBar from './components/NavBar';
import Router from './Router';

const useStyles = makeStyles({
  // why does index.css not work here
  root: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
  },

});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
