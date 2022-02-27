import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from 'tailwind-react-native-classnames';
import { Icon } from "react-native-elements";
const RideOptionCard = () => {
  return (
    <View style={tw`bg-white flex-grow`}>
    <View>
<TouchableOpacity>
<Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name='chevron-left'
            type="fontawesome"
            color="white"
            size={18}
          />
</TouchableOpacity>
      <Text style={tw`text-center my-5 text-xl`}>Select Your Ride</Text>
    </View>
    </View>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
