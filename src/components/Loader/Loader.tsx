import {View, ActivityIndicator} from 'react-native';
import React, {FC} from 'react';

interface Iprops {}

const Loader: FC<Iprops> = ({}) => {
  return (
    <View style={{marginVertical: 15}}>
      <ActivityIndicator size={'small'} color={'blue'} />
    </View>
  );
};

export default Loader;
