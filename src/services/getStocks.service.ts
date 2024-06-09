import { QueryParam } from '../hooks/useGetStocks';
import { httpClient } from './httpClient';

const getStocks = async (pageParam: string, params: QueryParam) => {
  let url = '/v3/reference/tickers';
  if (pageParam !== '') {
    url = url + pageParam?.split("tickers")[1];
    return httpClient.get(url).then(response => response);
  } else {
    return httpClient.get(url, { params }).then(response => response);
  }
}

export default getStocks;
