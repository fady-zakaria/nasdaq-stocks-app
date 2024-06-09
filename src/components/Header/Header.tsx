import { View, Image, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { Colors } from '../../utils/Colors';
import { nasdaqLogo } from '../../utils/imgs';

const Header: FC = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={nasdaqLogo} style={styles.logoStyle} tintColor={Colors.primaryText} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.SecondaryColor,
    paddingTop: 0,
    padding: 12,
  },
  logoStyle: {
    resizeMode: 'center',
    height: 34,
    width: 150,
  },
})