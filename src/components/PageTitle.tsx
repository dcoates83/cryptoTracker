import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  spacing: {
    backgroundColor: '#777',
    flex: 1,
  },
});
// eslint-disable-next-line @typescript-eslint/no-empty-interface
 interface PageTitleProps {
name: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  const classes = useStyles();
  const { name } = props;
  return (
    <div
      className={classes.spacing}
    >
      {name}
    </div>
  );
};

export default PageTitle;
