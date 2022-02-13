import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import { createStackNavigator } from "@react-navigation/stack";
const MapScreen = () => {
  return (
    <View
    // style={{marginTop:StatusBar.currentHeight}}
     >
      <View style={tw`h-1/2`}><Map/></View>
      <View style={tw`h-1/2`}></View>
    </View>
  )
}

export default MapScreen