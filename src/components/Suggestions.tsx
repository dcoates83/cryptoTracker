import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

});
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SuggestionsType {

}

const Suggestions: React.FC<SuggestionsType> = () => {
  const classes = useStyles();
  return <div>Suggestions</div>;
};

export default Suggestions;
