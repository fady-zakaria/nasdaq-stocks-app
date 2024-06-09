import { View } from 'react-native'
import React, { FC, useState } from 'react'
import Header from '../../components/Header/Header';
import { styles } from './Home.style';
import SearchBar from '../../components/SearchBar/SearchBar';
import StockList from '../../components/StockList/StockList';

const Home: FC = () => {

  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.homeContent}>
        <SearchBar setSearchQuery={setSearchQuery} />
        <StockList searchQuery={searchQuery} />
      </View>
    </View>
  );
};

export default Home;
