import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

});
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CoinListItemType {

}

const CoinListItem: React.FC<CoinListItemType> = () => {
  const classes = useStyles();
  return <div>CoinListItem</div>;
};

export default CoinListItem;
