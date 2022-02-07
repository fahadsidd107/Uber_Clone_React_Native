import { View, Text,SafeAreaView,StatusBar,Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
console.log(StatusBar.currentHeight);
const HomeScreen = () => {
  return (
    <View style={{marginTop:StatusBar.currentHeight}}>
    {/* agr {} k ander[] krke normal styling dena chahain to krste hain  */}
      <View>
        <Image
        style={{
          width:100,
          height:100,
          resizeMode:'contain',
        }}
          source={{
            uri:'https://links.papareact.com/gzs',
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
