import React, { useState, useEffect } from 'react';

import { makeStyles, Typography } from '@material-ui/core';
import { CryptoEntry, getCoins, getTrending } from '../api/cryptoAPI';
import CoinListItem from './CoinListItem';

interface DefaultCoinListType {
  trending?: string;
}

const useStyles = makeStyles((theme) => ({
  coinList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  coinTitles: {
    display: 'grid',
    height: 50,
    width: '100%',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    gridTemplateColumns: '50px 1fr 1fr 1fr 1fr ',

  },
}));

const CoinList: React.FC <DefaultCoinListType | undefined> = (props) => {
  const classes = useStyles();
  const [areCoinsFetched, setAreCoinsFetched] = useState<CryptoEntry[] >([]);

  const { trending } = props;
  const convertToStringCheck = String(trending);
  const trendingCheck = 'trending';
  // console.log(convertToStringCheck === trendingCheck);

  useEffect(() => {
    if (trendingCheck === trending) {
      console.log('here');

      getTrending().then((trendingNFT) => {
        const trendingIds = trendingNFT.coins.map((i) => i.item.id);
        getCoins(trendingIds)
          .then(
            (resp) => setAreCoinsFetched(resp),
          );
      });
    } else {
      getCoins()
        .then(
          (resp) => setAreCoinsFetched(resp),
        );
    }
  }, []);

  return (
    <div>
      <div className={classes.coinTitles}>
        <Typography variant="h6" />
        <Typography variant="h6">NFT</Typography>
        <Typography variant="h6">Current</Typography>
        <Typography variant="h6">24H High</Typography>
        <Typography variant="h6">24H Low</Typography>
      </div>
      <div className={classes.coinList}>
        {
        areCoinsFetched.map((item) => (
          <CoinListItem
            key={item.name}
            currentPrice={item.current_price}
            highPrice={item.high_24h}
            lowPrice={item.low_24h}
            icon={item.image}
            name={item.name}
          />
        ))
      }
      </div>
    </div>
  );
};

export default CoinList;
