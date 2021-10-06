import React from 'react';
import { makeStyles } from '@material-ui/core';
import PageTitle from '../components/PageTitle';
import CoinListItem from '../components/CoinListItem';

const useStyles = makeStyles({

});

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <PageTitle name="Home" />
      <CoinListItem />
    </div>
  );
};

export default Home;
