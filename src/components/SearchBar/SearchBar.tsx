import { TextInput } from 'react-native';
import React, { FC, useCallback, useState } from 'react';
import { styles } from './SearchBar.style';
import { Colors } from '../../utils/Colors';
import debounce from 'lodash/debounce';

interface Iprops {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar: FC<Iprops> = ({ setSearchQuery }) => {
  const [text, onChangeText] = useState<string>('');
  const debouncedFetchResults = useCallback(debounce((textValue: string) => setSearchQuery(textValue), 1000), []);
  return (
    <TextInput
      style={styles.container}
      onChangeText={(textValue) => {
        onChangeText(textValue)
        debouncedFetchResults(textValue)
      }}
      placeholder="Search for stokcs"
      value={text}
      placeholderTextColor={Colors.secondaryText}
      autoCapitalize='none'
    />
  );
};

export default SearchBar;
