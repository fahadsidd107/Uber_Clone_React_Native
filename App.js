import { StatusBar } from 'expo-status-bar';
import { View,StyleSheet,KeyboardAvoidingView } from 'react-native';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import EatsScreen from './screens/EatsScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
    <SafeAreaProvider>
    <KeyboardAvoidingView>
    <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
    <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown:false}}/>
    <Stack.Screen name="EatsScreen" component={EatsScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
    </KeyboardAvoidingView>
    </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
