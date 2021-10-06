import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  spacing: {

  },
});
// eslint-disable-next-line @typescript-eslint/no-empty-interface
 interface PageTitleProps {
name: string;
subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  const classes = useStyles();
  const { name, subtitle } = props;
  return (
    <div
      className={classes.spacing}
    >
      <Typography variant="h4" color="primary">{name}</Typography>
      {
        subtitle && <Typography variant="body1">{subtitle}</Typography>
      }

    </div>
  );
};

export default PageTitle;
