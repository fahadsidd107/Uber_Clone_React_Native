import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from 'tailwind-react-native-classnames';
const RideOptionCard = () => {
  return (
    <View style={tw`bg-white flex-grow`}>
      <Text style={tw`text-center my-5 text-xl`}>Select Your Ride</Text>
    </View>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
