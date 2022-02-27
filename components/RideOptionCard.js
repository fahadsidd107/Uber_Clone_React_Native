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
onPress={()=>{ navigation.navigate('NavigationCard') }}
style={tw`absolute top-3 left-5 p-3 z-50 rounded-full bg-black`} >
<Icon name='chevron-left' type="fontawesome" color='white'/>
</TouchableOpacity>
      <Text style={tw`text-center my-5 text-xl`}>Select Your <View style={[,{height:0,width:100}]}>
    </View>
    </View>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
