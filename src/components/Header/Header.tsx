import {View, Text, Image, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import { Colors } from '../../utils/Colors';
import { nasdaqLogo } from '../../utils/imgs';

interface Iprops {}

const Header: FC<Iprops> = ({}) => {
  return (
    <View style={styles.headerContainer}>
         <Image source={nasdaqLogo} style={styles.logoStyle} tintColor={Colors.primaryText}/>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: Colors.SecondaryColor,
        paddingTop: 0,
        padding: 12,
        // marginTop: 0,
        // marginBottom: 10,
    },
    logoStyle: {
        resizeMode: 'center',
        height: 34,
        width: 150,
    },
})