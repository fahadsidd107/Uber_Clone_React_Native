import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
const NavigationCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning , Fahad</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default NavigationCard;

const styles = StyleSheet.create({});
