import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core';
import { CryptoEntry, getCoins } from '../api/cryptoAPI';

interface DefaultCoinListType {
  fetchCoins?: string[];
}

const useStyles = makeStyles((theme) => ({
  coinList: {

  },
}));

const CoinList: React.FC<DefaultCoinListType> = () => {
  const defaultCoinIds = [
    'bitcoin',
    'ethereum',
    'binancecoin',
    'tether',
    'ripple',
    'litecoin',
    'chainlink',
    'terra-luna',
    'vechain',
  ];

  const classes = useStyles();
  const [areCoinsFetched, setAreCoinsFetched] = useState<CryptoEntry[] | DefaultCoinListType>([]);
  // eslint-disable-next-line no-console

  useEffect(() => {
    getCoins(defaultCoinIds)
      .then((resp) => setAreCoinsFetched(resp));
  }, []);
  console.log(areCoinsFetched, 'here');

  return (
    <div className={classes.coinList}>
      test
    </div>
  );
};

export default CoinList;
