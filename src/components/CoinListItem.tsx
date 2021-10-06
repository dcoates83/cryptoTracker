import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  coinListItem: {
    display: 'grid',
    height: 50,
    width: '100%',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    gridTemplateColumns: '50px 1fr 1fr 1fr 1fr ',
  },
  iconWrapper: {
    width: 32,
  },
  icon: {
    width: 26,
    height: 26,
    marginRight: 3,
  },
  name: {
    fontWeight: 600,
  },
  price: {

  },
}));
// eslint-disable-next-line @typescript-eslint/no-empty-interface
 interface CoinListItemProps {
    icon: string;
    name: string;
    currentPrice: number;
    highPrice: number;
    lowPrice: number;
}

const CoinListItem: React.FC<CoinListItemProps> = (props) => {
  const classes = useStyles();
  const {
    icon, name, currentPrice, highPrice, lowPrice,
  } = props;

  return (
    <div className={classes.coinListItem}>

      <img className={classes.icon} src={icon} alt={name} />
      <Typography variant="h6" className={classes.name}>{name}</Typography>
      <Typography className={classes.price}>
        $
        {currentPrice}
      </Typography>
      <Typography className={classes.price}>
        $
        {highPrice}
      </Typography>
      <Typography className={classes.price}>
        $
        {lowPrice}
      </Typography>
    </div>
  );
};

export default CoinListItem;
