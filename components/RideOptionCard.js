import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from 'tailwind-react-native-classnames';
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const RideOptionCard = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`bg-white flex-grow`}>
    <View>
<TouchableOpacity 
onPress={()=>{navigation.navigate('HomeScreen')}}
style={tw`absolute top-3 left-5 p-3 rounded-full bg-red-200`} >
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
