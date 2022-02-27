import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from 'tailwind-react-native-classnames';
import { Icon } from "react-native-elements";
const RideOptionCard = () => {
  return (
    <View style={tw`bg-white flex-grow`}>
    <View>
<TouchableOpacity style={tw`absolute top-3 left-5 p-3 rounded-full`} >
<Icon
            name='chevron-left'
            type="fontawesome"
          />
</TouchableOpacity>
      <Text style={tw`text-center my-5 text-xl`}>Select Your Ride</Text>
    </View>
    </View>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
