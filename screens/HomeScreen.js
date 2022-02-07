import { View, Text,SafeAreaView,StatusBar } from 'react-native';
import React from 'react';
console.log(StatusBar.currentHeight);
const HomeScreen = () => {
  return (
    <View style={{marginTop:StatusBar.currentHeight}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
