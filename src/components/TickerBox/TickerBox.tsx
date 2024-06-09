import {View, Text, Image, ImageSourcePropType} from 'react-native';
import React, {FC} from 'react';
import { styles } from './TickerBox.style';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Iprops {
  src?: ImageSourcePropType;
  name?: string;
  ticker?: string;
}

const TickerBox: FC<Iprops> = ({src, name, ticker}) => {
  return (
    <TouchableOpacity style={styles.container}>
       <Image
          style={styles.img}
          source={{uri: 'https://picsum.photos/200'}}
        />
          <Text style={styles.tickerText} numberOfLines={2}>
          {ticker}
          </Text>
            <Text style={styles.stockName} numberOfLines={2}>
            {name}
          </Text>
    </TouchableOpacity>
  );
};

export default TickerBox;
