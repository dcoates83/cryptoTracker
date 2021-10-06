import React from 'react';
import { makeStyles } from '@material-ui/core';
import Login from '../pages/Login';

const useStyles = makeStyles({

});
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MenuType {

}

const Menu: React.FC<MenuType> = () => {
  const classes = useStyles();
  return (
    <div>
      Menu
      <Login />
    </div>
  );
};

export default Menu;
