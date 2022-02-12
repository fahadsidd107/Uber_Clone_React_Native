import { View, Text, StatusBar } from 'react-native'
import React from 'react'
console.log(StatusBar.currentHeight);
const EatsScreen = () => {
  return (
    <View
    style={{marginTop:StatusBar.currentHeight}}
    >
      <Text>EatsScreen</Text>
    </View>
  )
}

export default EatsScreen