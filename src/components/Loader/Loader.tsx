import { View, ActivityIndicator, StyleSheet } from 'react-native';
import React, { FC } from 'react';

const Loader: FC = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={'small'} color={'blue'} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loading: {
    marginVertical: 15
  },
})