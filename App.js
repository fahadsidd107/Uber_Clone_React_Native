import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store} styles={styles}>
<HomeScreen/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
});
