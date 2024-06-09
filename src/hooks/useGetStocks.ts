import {QueryFunctionContext, useInfiniteQuery} from '@tanstack/react-query';
import getStocks from '../services/getStocks.service';
import { useMemo } from 'react'

export interface QueryParam {
    active?: Boolean,
    limit?: number;
    search?: string;
}
  
export const useGetStocks = (queryParam: QueryParam) => {
  const queryKey = useMemo(
    () => [
      'stocks',
      queryParam.limit,
      queryParam.search,
    ],
    [queryParam.limit, queryParam.search],
  );
  const query = useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: ({pageParam = ''}) => getStocks(pageParam, queryParam),
    getNextPageParam: (lastPage) => lastPage.data.next_url,
    staleTime: 30000,
    // getNextPageParam: (lastPage) => lastPage.next_url?.split("tickers")[1],
    // getPreviousPageParam: (firstPage, allPages) => allPages.length - 1,
  });
  return {
    ...query,
  };
};
