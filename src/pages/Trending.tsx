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
      <PageTitle name="Trending" />
      <CoinListItem />
    </div>
  );
};

export default Trending;
