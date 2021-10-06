import React from 'react';
import { makeStyles } from '@material-ui/core';
import Home from './pages/Home';
import PageTitle from './components/PageTitle';
import Trending from './pages/Trending';
// import { Switch, Route } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    flexGrow: 10,
    backgroundColor: '#eee',
    display: 'flex',
    flexDirection: 'column',
  },
});
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RouterType {

}

const Router: React.FC<RouterType> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      {/* <Switch>
        <Route path="/"> */}
      <Home />
      {/* </Route>
        <Route path="/Login"> */}
      {/* <Login/> */}
      {/* </Route>
        <Route path="/Trending"> */}
      <Trending />

      {/* </Route>
          </Switch> */}
    </div>
  );
};

export default Router;
