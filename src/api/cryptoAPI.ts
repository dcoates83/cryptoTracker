/* eslint-disable camelcase */
export {};
export interface TrendingCrypto {
  id: string;
  coin_id: number;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  small: string;
  large: string;
  slug: string;
  price_btc: number;
  score: number;
}

export interface CryptoEntry {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi?: {
    times: number;
    currency: string;
    percentage: number;
  };
  last_updated: string;
}

export const defaultCoinIds = [
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

const fetchWrapper = (url: string) => fetch(url, { mode: 'cors' }).then((resp) => {
  if (!resp.ok) throw new Error(`Error: ${resp.status} - ${resp.statusText}`);
  return resp.json();
});

export const getCoins = (coinIds?: string[]): Promise<CryptoEntry[]> => fetchWrapper(
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${(
    coinIds || defaultCoinIds
  ).join()}`,
).then((resp) => resp);

export const getTrending = (): Promise<{
  coins: [
    {
      item: TrendingCrypto;
    },
  ];
}> => fetchWrapper('https://api.coingecko.com/api/v3/search/trending').then((resp) => resp);
