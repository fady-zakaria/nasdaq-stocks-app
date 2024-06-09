import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, FC, useState } from 'react'
import getStocks from '../../services/getStocks.service';
import Header from '../../components/Header/Header';
import { styles } from './Home.style';
import SearchBar from '../../components/SearchBar/SearchBar';
import TickerBox from '../../components/TickerBox/TickerBox';
import { FlatList } from 'react-native-gesture-handler';
import { useGetStocks } from '../../hooks/useGetStocks';
import StockList from '../../components/StockList/StockList';

interface Iprops {}

const Home: FC<Iprops> = ({}) => {

    // useEffect(()=>{
    //     getData();
    // },[])

    // const getData = async () => {
    //     try {
    //         const res = await getStocks();
    //     } catch (error) {
    //         console.log("error",error)
    //     }
    // }
    const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.homeContent}>
        <SearchBar setSearchQuery={setSearchQuery}/> 
        <StockList searchQuery={searchQuery}/>
      </View>
    {/*       
      <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
      <TickerBox name='Apple Inc' ticker='AAPL'/>
      <TickerBox />
      </View> */}
    </View>
  );
};

export default Home;
