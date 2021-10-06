import React from 'react';
import { makeStyles } from '@material-ui/core';
import PageTitle from '../components/PageTitle';
import CoinListItem from '../components/CoinListItem';
import CoinList from '../components/CoinList';

const useStyles = makeStyles({

});

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <PageTitle name="Home" subtitle="Welcome to CryptoCrunch. Create an account, log in and start tracking your favourite cryptocurrencies!" />
      <CoinList />
      {/* <CoinListItem /> */}
    </div>
  );
};

export default Home;
