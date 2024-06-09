import { QueryParam } from '../hooks/useGetStocks';
import {httpClient} from './httpClient';

const getStocks = (pageParam: string, params: QueryParam) =>{
  // const callingApI = `?limit=${params?.limit}` + `&search=${params?.searchText}` 
  // console.log("callingApI", callingApI)
  // console.log("pageParam", pageParam)
  // console.log("params", params)
  let url = '/v3/reference/tickers';
  if(pageParam !== ''){
    url = url + pageParam?.split("tickers")[1];
    return httpClient.get(url).then(response => response);
  } else {
    return httpClient.get(url, {params}).then(response => response);
  } 
}

export default getStocks;
