import React from 'react';
import { getCoins } from './api/cryptoAPI';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  getCoins();
  return <div>Hello World</div>;
}

export default App;
