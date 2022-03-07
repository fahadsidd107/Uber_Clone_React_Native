import { View, Text,StatusBar,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackActions } from '@react-navigation/native';
import NavigationCard from '../components/NavigationCard';
import RideOptionCard from '../components/RideOptionCard';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from '@react-navigation/native';
const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <View
    // style={{marginTop:StatusBar.currentHeight}}
     >
     <TouchableOpacity
     onPress={()=>navigation.navigate('HomeScreen')}
      style={tw`bg-gray-100 absolute top-8 left-4 z-50 p-3 rounded-full shadow-lg`}>
<Icon name='menu'/>
     </TouchableOpacity>
      <View style={tw`h-1/2`}><Map/></View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen name="NavigationCard" component={NavigationCard} options={{headerShown:false}}/>
          <Stack.Screen name="RideOptionCard" component={RideOptionCard} options={{headerShown:false}}/>
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen