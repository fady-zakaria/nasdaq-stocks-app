import {View, Text, FlatList, StyleSheet, ListRenderItem} from 'react-native';
import React, {FC, useEffect, useMemo, useState} from 'react';
import TickerBox from '../TickerBox/TickerBox';
import { QueryParam, useGetStocks } from '../../hooks/useGetStocks';
import { Ticker, TickerRes } from '../../types/stocks';
import Loader from '../Loader/Loader';

interface Iprops {
  searchQuery: string;
}

const StockList: FC<Iprops> = ({searchQuery}) => {
  // const getParam = () => {
  //   let param: QueryParam = { 
  //     limit: 2,
  //   }
  //   if(searchQuery && searchQuery.length > 2){
  //     param.search = searchQuery;
  //   }
  //   return param;
  // }
  
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

  // {
  //   limit: 6,
  //   search: searchQuery && searchQuery.length > 2 ? searchQuery : '',
  // }
  const [queryRes, setQueryRes] = useState<Ticker[]>([]);

  useEffect(() => {
    let newArray = [];
    // console.log("data",data)
    data?.pages.map(item => {
      if (item) {
        newArray = [...newArray, ...item?.data?.results];
      }
    });
    setQueryRes(newArray);
  }, [data]);

  // const stocksList = useMemo(() => {
  //   // console.log("data",data)
  //   if (data) {
  //     let newArray = [];
  //     data?.pages.map(item => {
  //     if (item) {
  //       newArray = [...newArray, ...item?.data?.results];
  //     }
  //   });
  //   return newArray;
  //   }
  //   return [];
  // }, [data]);

  // console.log("stocksList", stocksList)

  const renderItem = ({ item }) => {
    // console.log("item", item)
    return (
      <TickerBox name={item.name} ticker={item.ticker}/>
    )
  }

  return (
    <View>
      {isRefetching || isLoading ? <Loader />: (
        <FlatList
            numColumns={2}
            data={queryRes}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item,index) => (item.ticker + index).toString()}
            columnWrapperStyle={styles.ContentContainer}
            // onEndReached={() => {

            // }}
            onEndReached={() => !isFetching && (setTimeout(() => {
              fetchNextPage();
            }, 1000))}
            // onEndReachedThreshold={0.9}
            // onRefresh={() => refetch()}
            // refreshing={isRefetching}
            ListFooterComponent={
              isFetchingNextPage ? (
                <Loader />
                ) : null
              }
            testID="stocksList"
        />
      )}
      {/* {isFetchingNextPage && <Loader />} */}
    </View>
  );
};

export default StockList;

const styles = StyleSheet.create({
    ContentContainer: {
      justifyContent: 'space-between',
      paddingVertical: 5,
    },
  });
