import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  suggestionSubtitle: {
    margin: '1rem',
    wordWrap: 'break-word',
  },
});

const Suggestions: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h6">
        Suggestions
      </Typography>
      <Typography className={classes.suggestionSubtitle} variant="subtitle2" color="initial">
        Do you have suggestions on how to improve the user experience?
        <br />
        <br />
        {' '}
        Feel free to contact us!
      </Typography>
    </div>
  );
};

export default Suggestions;
