import { View, FlatList, Text } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import TickerBox from '../TickerBox/TickerBox';
import { useGetStocks } from '../../hooks/useGetStocks';
import { Ticker } from '../../types/stocks';
import Loader from '../Loader/Loader';
import { styles } from './StockList.style';

interface Iprops {
  searchQuery?: string;
}

const StockList: FC<Iprops> = ({ searchQuery }) => {

  const {
    data,
    refetch,
    isRefetching,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    isFetching,
  } = useGetStocks({
    active: true,
    limit: 10,
    search: searchQuery && searchQuery.length > 2 ? searchQuery : '',
  });

  const [queryRes, setQueryRes] = useState<Ticker[]>([]);

  useEffect(() => {
    let newArray = [];
    data?.pages.map(item => {
      if (item) {
        newArray = [...newArray, ...item?.data?.results];
      }
    });
    setQueryRes(newArray);
  }, [data]);

  const renderItem = ({ item }) => {
    return (
      <TickerBox name={item.name} ticker={item.ticker} />
    )
  }

  const emptyList = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No Stocks</Text>
      </View>
    );
  };

  return (
    <View>
      {isRefetching || isLoading ? <Loader /> : (
        <FlatList
          numColumns={2}
          data={queryRes}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => (item.ticker + index).toString()}
          columnWrapperStyle={styles.ContentContainer}
          ListEmptyComponent={emptyList()}
          onEndReached={() => !isFetching && (setTimeout(() => {
            fetchNextPage();
          }, 1000))}
          ListFooterComponent={
            isFetchingNextPage ? (
              <Loader />
            ) : null
          }
          testID="stocksList"
        />
      )}
    </View>
  );
};

export default StockList;