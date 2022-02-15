import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackActions } from '@react-navigation/native';
const MapScreen = () => {
  return (
    <View
    // style={{marginTop:StatusBar.currentHeight}}
     >
      <View style={tw`h-1/2`}><Map/></View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen name="NavigationCard" component={NavigationCard} options={{headerShown:false}}/>
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen