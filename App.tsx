import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './src/navigations/Navigation';
import ProviderWrapper from './src/Providers/ProviderWrapper';
import { Colors } from './src/utils/Colors';

export default function App() {
  return (
    <ProviderWrapper>
      <SafeAreaView style={styles.safeContainer}>
        <StatusBar hidden={true} />
        <Navigation />
      </SafeAreaView>
    </ProviderWrapper>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.SecondaryColor,
  },
});
