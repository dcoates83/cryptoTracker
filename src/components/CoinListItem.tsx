import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { CryptoEntry, getCoins } from '../api/cryptoAPI';

const useStyles = makeStyles({
  // getCoins : new Promise<Element>
});
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CoinListItemType {

}

const CoinListItem: React.FC<CoinListItemType> = () => {
  const classes = useStyles();
  const [areCoinsFetched, setAreCoinsFetched] = useState<CryptoEntry[]>([]);
  console.log(areCoinsFetched);

  useEffect(() => {
    const coins = getCoins().then((resp) => setAreCoinsFetched(resp));
  }, []);
  return (
    <div />
  );
};

export default CoinListItem;
