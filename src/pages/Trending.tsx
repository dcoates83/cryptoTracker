import React from 'react';
import { makeStyles } from '@material-ui/core';
import PageTitle from '../components/PageTitle';
import CoinListItem from '../components/CoinListItem';

const useStyles = makeStyles({

});

const Trending: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <PageTitle
        name="Trending"
        subtitle="Top-7 trending coins in the last 24 hours (according to coingecko.com)."
      />
      <CoinListItem />
    </div>
  );
};

export default Trending;
