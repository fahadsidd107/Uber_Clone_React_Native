import { View, Text,SafeAreaView,StatusBar } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
console.log(StatusBar.currentHeight);
const HomeScreen = () => {
  return (
    <View style={{marginTop:StatusBar.currentHeight}}>
    {/* agr {} k ander[] krke normal styling dena chahain to krste hain  */}
      <Text style={tw`text-red-500 p-10`}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
